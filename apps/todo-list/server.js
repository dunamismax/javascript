import Fastify from 'fastify';
import { MongoClient, ObjectId } from 'mongodb';
import vine from '@vinejs/vine';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 3001;
const MONGODB_URI =
  process.env.MONGODB_URI || 'mongodb://localhost:27017/todos';

// Create Fastify instance
const fastify = Fastify({
  logger: true,
});

// MongoDB connection
let db;
let todosCollection;

async function connectToDatabase() {
  try {
    const client = new MongoClient(MONGODB_URI);
    await client.connect();
    db = client.db();
    todosCollection = db.collection('todos');
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
}

// VineJS validation schemas
const createTodoSchema = vine.object({
  text: vine.string().trim().minLength(1),
  priority: vine.enum(['high', 'medium', 'low']).optional(),
  category: vine
    .enum(['general', 'work', 'personal', 'shopping', 'health'])
    .optional(),
});

const updateTodoSchema = vine.object({
  text: vine.string().trim().minLength(1).optional(),
  completed: vine.boolean().optional(),
  priority: vine.enum(['high', 'medium', 'low']).optional(),
  category: vine
    .enum(['general', 'work', 'personal', 'shopping', 'health'])
    .optional(),
});

const querySchema = vine.object({
  category: vine.string().optional(),
  completed: vine.string().optional(),
  priority: vine.string().optional(),
});

const idParamsSchema = vine.object({
  id: vine.string().regex(/^[0-9a-fA-F]{24}$/),
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

fastify.get('/analytics', async (request, reply) => {
  return reply.sendFile('analytics.html');
});

fastify.get('/analytics.html', async (request, reply) => {
  return reply.sendFile('analytics.html');
});

fastify.get('/about', async (request, reply) => {
  return reply.sendFile('about.html');
});

fastify.get('/about.html', async (request, reply) => {
  return reply.sendFile('about.html');
});

// API Routes

// Get all todos
fastify.get('/api/todos', async (request, reply) => {
  try {
    const query = await vine.validate({
      schema: querySchema,
      data: request.query,
    });

    const filter = {};

    if (query.category && query.category !== 'all') {
      filter.category = query.category;
    }

    if (query.completed !== undefined) {
      filter.completed = query.completed === 'true';
    }

    if (query.priority && query.priority !== 'all') {
      filter.priority = query.priority;
    }

    const todos = await todosCollection
      .find(filter)
      .sort({ createdAt: -1 })
      .toArray();

    return todos;
  } catch (error) {
    if (error.messages) {
      return reply
        .status(400)
        .send({ error: 'Invalid query parameters', details: error.messages });
    }
    request.log.error(error);
    return reply.status(500).send({ error: 'Internal server error' });
  }
});

// Create new todo
fastify.post('/api/todos', async (request, reply) => {
  try {
    const data = await vine.validate({
      schema: createTodoSchema,
      data: request.body,
    });

    const newTodo = {
      text: data.text,
      completed: false,
      priority: data.priority || 'medium',
      category: data.category || 'general',
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const result = await todosCollection.insertOne(newTodo);
    const createdTodo = await todosCollection.findOne({
      _id: result.insertedId,
    });

    return reply.status(201).send(createdTodo);
  } catch (error) {
    if (error.messages) {
      return reply
        .status(400)
        .send({ error: 'Validation failed', details: error.messages });
    }
    request.log.error(error);
    return reply.status(500).send({ error: 'Internal server error' });
  }
});

// Update todo
fastify.put('/api/todos/:id', async (request, reply) => {
  try {
    const params = await vine.validate({
      schema: idParamsSchema,
      data: request.params,
    });

    const data = await vine.validate({
      schema: updateTodoSchema,
      data: request.body,
    });

    if (Object.keys(data).length === 0) {
      return reply.status(400).send({ error: 'No valid fields to update' });
    }

    const updateData = { ...data, updatedAt: new Date() };

    const result = await todosCollection.updateOne(
      { _id: new ObjectId(params.id) },
      { $set: updateData }
    );

    if (result.matchedCount === 0) {
      return reply.status(404).send({ error: 'Todo not found' });
    }

    const updatedTodo = await todosCollection.findOne({
      _id: new ObjectId(params.id),
    });
    return updatedTodo;
  } catch (error) {
    if (error.messages) {
      return reply
        .status(400)
        .send({ error: 'Validation failed', details: error.messages });
    }
    request.log.error(error);
    return reply.status(500).send({ error: 'Internal server error' });
  }
});

// Delete todo
fastify.delete('/api/todos/:id', async (request, reply) => {
  try {
    const params = await vine.validate({
      schema: idParamsSchema,
      data: request.params,
    });

    const result = await todosCollection.deleteOne({
      _id: new ObjectId(params.id),
    });

    if (result.deletedCount === 0) {
      return reply.status(404).send({ error: 'Todo not found' });
    }

    return { message: 'Todo deleted successfully' };
  } catch (error) {
    if (error.messages) {
      return reply
        .status(400)
        .send({ error: 'Validation failed', details: error.messages });
    }
    request.log.error(error);
    return reply.status(500).send({ error: 'Internal server error' });
  }
});

// Get statistics
fastify.get('/api/stats', async (request, reply) => {
  try {
    const [total, completed, pending, byPriority, byCategory] =
      await Promise.all([
        todosCollection.countDocuments({}),
        todosCollection.countDocuments({ completed: true }),
        todosCollection.countDocuments({ completed: false }),
        todosCollection
          .aggregate([
            { $group: { _id: '$priority', count: { $sum: 1 } } },
            { $project: { priority: '$_id', count: 1, _id: 0 } },
          ])
          .toArray(),
        todosCollection
          .aggregate([
            { $group: { _id: '$category', count: { $sum: 1 } } },
            { $project: { category: '$_id', count: 1, _id: 0 } },
          ])
          .toArray(),
      ]);

    return {
      total,
      completed,
      pending,
      byPriority,
      byCategory,
    };
  } catch (error) {
    request.log.error(error);
    return reply.status(500).send({ error: 'Internal server error' });
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
    await connectToDatabase();
    await fastify.listen({ port: PORT, host: '0.0.0.0' });
    console.log(`Todo API server running on http://localhost:${PORT}`);
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
    if (db) {
      await db.client.close();
      console.log('Database connection closed.');
    }
  } catch (error) {
    console.error('Error during shutdown:', error);
  }
  process.exit(0);
});

start();
