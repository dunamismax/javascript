import type { ApiResponse } from "./types.ts";

// API Response Utilities
export function createApiResponse<T>(
  success: boolean,
  data?: T,
  error?: string,
  details?: Record<string, unknown>,
): ApiResponse<T> {
  return { success, data, error, details };
}

export function createSuccessResponse<T>(data: T): ApiResponse<T> {
  return createApiResponse(true, data);
}

export function createErrorResponse<T>(
  error: string,
  details?: Record<string, unknown>,
): ApiResponse<T> {
  return createApiResponse(false, undefined, error, details);
}

// Weather API Utilities
export async function fetchWeatherData(zipCode: string, apiKey: string) {
  const url =
    `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},US&appid=${apiKey}&units=imperial`;

  const response = await fetch(url);

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error("ZIP code not found");
    }
    throw new Error(`Weather API error: ${response.statusText}`);
  }

  const data = await response.json();

  return {
    location: `${data.name}, ${data.sys.country}`,
    temperature: Math.round(data.main.temp),
    description: data.weather[0].description,
    humidity: data.main.humidity,
    windSpeed: Math.round(data.wind.speed),
    pressure: data.main.pressure,
    visibility: Math.round((data.visibility || 0) / 1609.34), // meters to miles
    icon: data.weather[0].icon,
    feelsLike: Math.round(data.main.feels_like),
  };
}

// Validation Error Handling
import * as v from "valibot";

export function formatValidationErrors(
  issues: v.BaseIssue<unknown>[],
): Record<string, string> {
  const formatted: Record<string, string> = {};

  for (const issue of issues) {
    const path = issue.path?.map((p) => p.key).join(".") || "general";
    formatted[path] = issue.message;
  }

  return formatted;
}

// Note: Rate limiting is now handled by Fresh 2.0 middleware in routes/_middleware.ts

// String utilities
export function escapeHtml(unsafe: string): string {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

// CSS Class utilities
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

// Environment utilities
export function getEnvVar(key: string, defaultValue?: string): string {
  const value = Deno.env.get(key);
  if (value === undefined) {
    if (defaultValue !== undefined) {
      return defaultValue;
    }
    throw new Error(`Environment variable ${key} is required`);
  }
  return value;
}

export function getPort(): number {
  const port = Deno.env.get("PORT");
  return port ? parseInt(port, 10) : 8000;
}

export function getWeatherApiKey(): string {
  return getEnvVar("OPENWEATHERMAP_API_KEY");
}
