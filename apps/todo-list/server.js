import express from 'express';
import sqlite3 from 'sqlite3';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

// Database setup
const dbPath = path.join(__dirname, 'database', 'todos.db');
const db = new sqlite3.Database(dbPath);

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Set up EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Initialize database
db.serialize(() => {
  db.run(`
        CREATE TABLE IF NOT EXISTS todos (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            text TEXT NOT NULL,
            completed BOOLEAN DEFAULT 0,
            priority TEXT DEFAULT 'medium',
            category TEXT DEFAULT 'general',
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    `);
});

// View Routes
app.get('/', (req, res) => {
  res.render('index', { title: 'Todo List App' });
});

app.get('/analytics', (req, res) => {
  res.render('analytics', { title: 'Analytics - Todo List App' });
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About - Todo List App' });
});

// API Routes

// Get all todos
app.get('/api/todos', (req, res) => {
  const { category, completed, priority } = req.query;
  let query = 'SELECT * FROM todos WHERE 1=1';
  const params = [];

  if (category && category !== 'all') {
    query += ' AND category = ?';
    params.push(category);
  }

  if (completed !== undefined) {
    query += ' AND completed = ?';
    params.push(completed === 'true' ? 1 : 0);
  }

  if (priority && priority !== 'all') {
    query += ' AND priority = ?';
    params.push(priority);
  }

  query += ' ORDER BY created_at DESC';

  db.all(query, params, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(rows);
  });
});

// Create new todo
app.post('/api/todos', (req, res) => {
  const { text, priority = 'medium', category = 'general' } = req.body;

  if (!text || !text.trim()) {
    res.status(400).json({ error: 'Todo text is required' });
    return;
  }

  const query = `
        INSERT INTO todos (text, priority, category)
        VALUES (?, ?, ?)
    `;

  db.run(query, [text.trim(), priority, category], function (err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }

    // Return the created todo
    db.get('SELECT * FROM todos WHERE id = ?', [this.lastID], (err, row) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.status(201).json(row);
    });
  });
});

// Update todo
app.put('/api/todos/:id', (req, res) => {
  const { id } = req.params;
  const { text, completed, priority, category } = req.body;

  // Build dynamic update query
  const updates = [];
  const params = [];

  if (text !== undefined) {
    updates.push('text = ?');
    params.push(text.trim());
  }

  if (completed !== undefined) {
    updates.push('completed = ?');
    params.push(completed ? 1 : 0);
  }

  if (priority !== undefined) {
    updates.push('priority = ?');
    params.push(priority);
  }

  if (category !== undefined) {
    updates.push('category = ?');
    params.push(category);
  }

  if (updates.length === 0) {
    res.status(400).json({ error: 'No valid fields to update' });
    return;
  }

  updates.push('updated_at = CURRENT_TIMESTAMP');
  params.push(id);

  const query = `UPDATE todos SET ${updates.join(', ')} WHERE id = ?`;

  db.run(query, params, function (err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }

    if (this.changes === 0) {
      res.status(404).json({ error: 'Todo not found' });
      return;
    }

    // Return the updated todo
    db.get('SELECT * FROM todos WHERE id = ?', [id], (err, row) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json(row);
    });
  });
});

// Delete todo
app.delete('/api/todos/:id', (req, res) => {
  const { id } = req.params;

  db.run('DELETE FROM todos WHERE id = ?', [id], function (err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }

    if (this.changes === 0) {
      res.status(404).json({ error: 'Todo not found' });
      return;
    }

    res.json({ message: 'Todo deleted successfully' });
  });
});

// Get statistics
app.get('/api/stats', (req, res) => {
  const queries = {
    total: 'SELECT COUNT(*) as count FROM todos',
    completed: 'SELECT COUNT(*) as count FROM todos WHERE completed = 1',
    pending: 'SELECT COUNT(*) as count FROM todos WHERE completed = 0',
    byPriority:
      'SELECT priority, COUNT(*) as count FROM todos GROUP BY priority',
    byCategory:
      'SELECT category, COUNT(*) as count FROM todos GROUP BY category',
  };

  const stats = {};
  let completed = 0;
  const total = Object.keys(queries).length;

  Object.entries(queries).forEach(([key, query]) => {
    db.all(query, [], (err, rows) => {
      if (err) {
        console.error(`Error executing ${key} query:`, err);
        return;
      }

      if (key === 'byPriority' || key === 'byCategory') {
        stats[key] = rows;
      } else {
        stats[key] = rows[0].count;
      }

      completed++;
      if (completed === total) {
        res.json(stats);
      }
    });
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Todo API server running on http://localhost:${PORT}`);
});

// Graceful shutdown
process.on('SIGINT', () => {
  console.log('\nShutting down server...');
  db.close(err => {
    if (err) {
      console.error(err.message);
    } else {
      console.log('Database connection closed.');
    }
    process.exit(0);
  });
});
