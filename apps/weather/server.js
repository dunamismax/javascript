import Fastify from 'fastify';
import vine from '@vinejs/vine';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import rateLimit from '@fastify/rate-limit';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 3000;
const OPENWEATHERMAP_API_KEY = process.env.OPENWEATHERMAP_API_KEY;

// Create Fastify instance
const fastify = Fastify({
  logger: true,
});

// Register rate limiting
await fastify.register(rateLimit, {
  max: 60, // 60 requests
  timeWindow: '1 minute',
  skipOnError: false,
});

// Centralized error handling middleware
class AppError extends Error {
  constructor(message, statusCode = 500, code = 'INTERNAL_ERROR') {
    super(message);
    this.statusCode = statusCode;
    this.code = code;
    this.name = 'AppError';
  }
}

// Custom error handler
const errorHandler = (error, request, reply) => {
  // VineJS validation errors
  if (error.messages) {
    return reply.status(400).send({
      error: 'Validation failed',
      code: 'VALIDATION_ERROR',
      details: error.messages,
    });
  }

  // Custom application errors
  if (error instanceof AppError) {
    return reply.status(error.statusCode).send({
      error: error.message,
      code: error.code,
    });
  }

  // Rate limit errors
  if (error.statusCode === 429) {
    return reply.status(429).send({
      error: 'Too many requests',
      code: 'RATE_LIMIT_EXCEEDED',
      retryAfter: error.retryAfter,
    });
  }

  // Weather API errors
  if (error.message && error.message.includes('Weather API')) {
    return reply.status(502).send({
      error: 'Weather service temporarily unavailable',
      code: 'WEATHER_API_ERROR',
    });
  }

  // Default error handling
  request.log.error(error);
  reply.status(error.statusCode || 500).send({
    error: error.statusCode < 500 ? error.message || 'Bad request' : 'Internal server error',
    code: error.statusCode < 500 ? 'CLIENT_ERROR' : 'INTERNAL_ERROR',
  });
};

// VineJS validation schemas - ZIP code only
const zipCodeParamsSchema = vine.object({
  zipcode: vine.string().trim().regex(/^\d{5}(-\d{4})?$/),
});

// Register static file serving
await fastify.register(import('@fastify/static'), {
  root: path.join(__dirname, 'public'),
  prefix: '/',
});

// View Routes - Serve static HTML files
fastify.get('/', async (request, reply) => {
  return reply.sendFile('index.html');
});

fastify.get('/about', async (request, reply) => {
  return reply.sendFile('about.html');
});

fastify.get('/about.html', async (request, reply) => {
  return reply.sendFile('about.html');
});

fastify.get('/settings', async (request, reply) => {
  return reply.sendFile('settings.html');
});

fastify.get('/settings.html', async (request, reply) => {
  return reply.sendFile('settings.html');
});

// API Routes

// Get weather data for a ZIP code
fastify.get('/api/weather/:zipcode', {
  config: {
    rateLimit: {
      max: 30,
      timeWindow: '1 minute'
    }
  }
}, async (request, reply) => {
  const params = await vine.validate({
    schema: zipCodeParamsSchema,
    data: request.params,
  });

  if (!OPENWEATHERMAP_API_KEY) {
    throw new AppError('OpenWeatherMap API key not configured', 500, 'API_KEY_MISSING');
  }

  // Use ZIP code format for OpenWeatherMap API
  const zipCode = params.zipcode;
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},US&appid=${OPENWEATHERMAP_API_KEY}&units=metric`
  );

  if (!response.ok) {
    if (response.status === 404) {
      throw new AppError('ZIP code not found. Please check the ZIP code and try again.', 404, 'ZIPCODE_NOT_FOUND');
    }
    throw new Error(`Weather API error: ${response.status}`);
  }

  const data = await response.json();
  return data;
});

// Set error handler
fastify.setErrorHandler(errorHandler);

// Start server
async function start() {
  try {
    await fastify.listen({ port: PORT, host: '0.0.0.0' });
    console.log(`Weather app running at http://localhost:${PORT}`);
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
}

// Graceful shutdown
process.on('SIGINT', async () => {
  console.log('\nShutting down server...');
  try {
    await fastify.close();
  } catch (error) {
    console.error('Error during shutdown:', error);
  }
  process.exit(0);
});

start();
