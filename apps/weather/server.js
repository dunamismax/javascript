import Fastify from 'fastify';
import vine from '@vinejs/vine';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 3000;
const OPENWEATHERMAP_API_KEY = process.env.OPENWEATHERMAP_API_KEY;

// Create Fastify instance
const fastify = Fastify({
  logger: true,
});

// VineJS validation schemas
const cityParamsSchema = vine.object({
  city: vine.string().trim().minLength(1).maxLength(100),
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

// Get weather data for a city
fastify.get('/api/weather/:city', async (request, reply) => {
  try {
    const params = await vine.validate({
      schema: cityParamsSchema,
      data: request.params,
    });

    if (!OPENWEATHERMAP_API_KEY) {
      return reply.status(500).send({
        error: 'OpenWeatherMap API key not configured',
      });
    }

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(params.city)}&appid=${OPENWEATHERMAP_API_KEY}&units=metric`
    );

    if (!response.ok) {
      if (response.status === 404) {
        return reply.status(404).send({
          error: 'City not found. Please check the spelling and try again.',
        });
      }
      throw new Error(`Weather API error: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    if (error.messages) {
      return reply.status(400).send({
        error: 'Invalid city name',
        details: error.messages,
      });
    }

    request.log.error(error);

    if (error.message.includes('Weather API error')) {
      return reply.status(502).send({
        error: 'Weather service temporarily unavailable',
      });
    }

    return reply.status(500).send({
      error: 'Internal server error',
    });
  }
});

// Error handler
fastify.setErrorHandler((error, request, reply) => {
  request.log.error(error);
  reply.status(500).send({ error: 'Something went wrong!' });
});

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
