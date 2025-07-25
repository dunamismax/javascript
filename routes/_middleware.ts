import { type MiddlewareHandlerContext } from "$fresh/server.ts";

// Rate limiting middleware
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

function getRateLimit(ip: string, maxRequests = 100, windowMs = 60000) {
  const now = Date.now();
  const current = rateLimitMap.get(ip);

  if (!current || now > current.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs });
    return { allowed: true, count: 1, resetTime: now + windowMs };
  }

  if (current.count >= maxRequests) {
    return {
      allowed: false,
      count: current.count,
      resetTime: current.resetTime,
    };
  }

  current.count++;
  return { allowed: true, count: current.count, resetTime: current.resetTime };
}

// Security headers middleware
function addSecurityHeaders(headers: Headers) {
  headers.set("X-Content-Type-Options", "nosniff");
  headers.set("X-Frame-Options", "DENY");
  headers.set("X-XSS-Protection", "1; mode=block");
  headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=()");
}

// CORS middleware
function addCorsHeaders(headers: Headers, origin?: string) {
  if (
    origin && (origin.includes("localhost") || origin.includes("127.0.0.1"))
  ) {
    headers.set("Access-Control-Allow-Origin", origin);
  } else {
    headers.set("Access-Control-Allow-Origin", "*");
  }
  headers.set(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS",
  );
  headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");
  headers.set("Access-Control-Max-Age", "86400");
}

export async function handler(
  req: Request,
  ctx: MiddlewareHandlerContext,
) {
  const url = new URL(req.url);
  const ip = req.headers.get("x-forwarded-for") ||
    req.headers.get("x-real-ip") ||
    "unknown";

  // Handle OPTIONS preflight requests
  if (req.method === "OPTIONS") {
    const response = new Response(null, { status: 204 });
    addCorsHeaders(response.headers, req.headers.get("origin") || undefined);
    return response;
  }

  // Apply rate limiting to API routes
  if (url.pathname.startsWith("/api/")) {
    const rateLimit = getRateLimit(ip, 100, 60000); // 100 requests per minute

    if (!rateLimit.allowed) {
      const response = new Response(
        JSON.stringify({
          success: false,
          error: "Rate limit exceeded",
          details: {
            retryAfter: Math.ceil((rateLimit.resetTime - Date.now()) / 1000),
          },
        }),
        {
          status: 429,
          headers: {
            "Content-Type": "application/json",
            "Retry-After": Math.ceil((rateLimit.resetTime - Date.now()) / 1000)
              .toString(),
          },
        },
      );
      addSecurityHeaders(response.headers);
      return response;
    }
  }

  // Continue to the next handler
  const response = await ctx.next();

  // Add security headers to all responses
  addSecurityHeaders(response.headers);

  // Add CORS headers to API responses
  if (url.pathname.startsWith("/api/")) {
    addCorsHeaders(response.headers, req.headers.get("origin") || undefined);
  }

  return response;
}
