<p align="center">
  <img src="https://github.com/dunamismax/images/blob/main/Vanilla-JS-Logo.png" alt="JavaScript Development Monorepo" width="200" />
</p>

<p align="center">
  <a href="https://github.com/dunamismax/javascript">
    <img src="https://readme-typing-svg.demolab.com/?font=Fira+Code&size=24&pause=1000&color=F7DF1E&center=true&vCenter=true&width=1200&lines=Full-Stack+Vanilla+JavaScript+Monorepo;Vanilla+HTML%2BCSS%2BJS+%2B+Node.js+%2B+Fastify;MongoDB+Native+Driver+%2B+VineJS+Validation;pnpm+Workspaces+%2B+esbuild+Bundling;Vanilla+Frontend+%2B+FlareJS+Router;Zero+Framework+Dependencies;Lightning+Fast+Performance;Production+Ready+%2B+Secure;Real-World+Applications;Docker+%2B+systemd+%2B+Caddy;Enterprise+Grade+Architecture;Maximum+Performance+Control;Modern+Development+Experience;Complete+Tech+Stack" alt="Typing SVG" />
  </a>
</p>

<p align="center">
  <a href="https://nodejs.org/"><img src="https://img.shields.io/badge/Node.js-18+-339933.svg?logo=node.js&logoColor=white" alt="Node.js Version"></a>
  <a href="https://fastify.dev/"><img src="https://img.shields.io/badge/Fastify-4.29+-000000.svg?logo=fastify&logoColor=white" alt="Fastify Version"></a>
  <a href="https://www.mongodb.com/"><img src="https://img.shields.io/badge/MongoDB-6.18+-47A248.svg?logo=mongodb&logoColor=white" alt="MongoDB Version"></a>
  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><img src="https://img.shields.io/badge/Vanilla_JS-ES2020+-F7DF1E.svg?logo=javascript&logoColor=black" alt="Vanilla JS"></a>
  <a href="https://esbuild.github.io/"><img src="https://img.shields.io/badge/esbuild-0.19+-FFCF00.svg?logoColor=black" alt="esbuild"></a>
  <a href="https://pnpm.io/"><img src="https://img.shields.io/badge/pnpm-8+-F69220.svg?logo=pnpm&logoColor=white" alt="pnpm"></a>
  <a href="https://github.com/vinejs/vine"><img src="https://img.shields.io/badge/VineJS-1.8+-22C55E.svg?logoColor=white" alt="VineJS"></a>
  <a href="https://eslint.org/"><img src="https://img.shields.io/badge/ESLint-8.57+-4B32C3.svg?logo=eslint&logoColor=white" alt="ESLint"></a>
  <a href="https://prettier.io/"><img src="https://img.shields.io/badge/Prettier-3.6+-F7B93E.svg?logo=prettier&logoColor=black" alt="Prettier"></a>
  <a href="https://caddyserver.com/"><img src="https://img.shields.io/badge/Caddy-2.0+-1F88C0.svg?logoColor=white" alt="Caddy"></a>
  <br>
  <a href="https://systemd.io/"><img src="https://img.shields.io/badge/systemd-Production-000000.svg?logoColor=white" alt="systemd"></a>
  <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-green.svg" alt="MIT License"></a>
  <img src="https://img.shields.io/badge/Build_System-esbuild-yellow.svg" alt="Build System">
  <img src="https://img.shields.io/badge/Package_Manager-pnpm-orange.svg" alt="Package Manager">
  <img src="https://img.shields.io/badge/Framework_Free-Vanilla_JS-blue.svg" alt="Framework Free">
</p>

---

# Full-Stack Vanilla JavaScript Monorepo

> **Enterprise-grade JavaScript architecture combining the simplicity of vanilla frontend technologies with the power of modern backend infrastructure**

A production-ready monorepo implementing the **Full-Stack Vanilla JS & Node.js** technology stack. Built for **maximum performance**, **zero framework dependencies**, and **complete control** over your application architecture.

## Core Philosophy

**Frontend**: Lightweight, framework-free vanilla HTML, CSS, and JavaScript  
**Backend**: High-performance Node.js services with Fastify and MongoDB  
**Tooling**: Modern development experience with lightning-fast builds and deployment

## Complete Tech Stack

### Core Foundation

- **HTML** → Standard markup for structuring all web content
- **Vanilla JavaScript (ES Modules)** → Single language for frontend and backend
- **CSS** → Plain CSS with custom properties and design system
- **Node.js** → JavaScript runtime powering the entire backend
- **pnpm** → Fast, disk space-efficient package manager

### High-Performance Backend

- **Fastify** → High-performance, low-overhead web framework (2-3x faster than Express)
- **MongoDB** → Database with official native Node.js driver
- **VineJS** → Comprehensive type-safe data validation
- **dotenv** → Secure environment variable management

### Modern Frontend Experience

- **Static HTML Files** → Each page as separate `.html` files
- **Vanilla DOM Manipulation** → Native browser APIs for all interactivity
- **Plain CSS Design System** → BEM methodology with CSS custom properties
- **FlareJS Router** → Custom 2kB client-side router for SPA navigation

### Build & Quality Tools

- **esbuild** → Extremely fast bundler and minifier (10-100x faster than webpack)
- **pnpm scripts** → Primary task runner for all automation
- **Prettier** → Automatic code formatting across all files
- **ESLint** → Code analysis and quality enforcement

### Production Deployment

- **systemd** → Process management for Node.js services
- **Caddy** → Web server and reverse proxy with automatic HTTPS
- **MongoDB** → Production database with connection pooling
- **Docker** → Containerization support for deployment

## Project Architecture

```
javascript-monorepo/
├── apps/
│   ├── todo-list/              # Full-stack todo app
│   │   ├── server.js              # Fastify backend + VineJS validation
│   │   ├── public/                # Vanilla frontend source
│   │   ├── dist/                  # Built & optimized assets
│   │   ├── build.js               # esbuild configuration
│   │   └── .env.example           # Environment template
│   └── weather/                # Weather dashboard
│       ├── server.js              # Fastify backend + API integration
│       ├── public/                # Vanilla frontend source
│       ├── dist/                  # Built & optimized assets
│       ├── build.js               # esbuild configuration
│       └── .env.example           # Environment template
├── packages/
│   ├── utils/                     # API client, DOM helpers, storage
│   ├── ui-components/             # CSS design system
│   ├── FlareJS/                   # Custom SPA router (2kB)
│   └── config/                    # Shared configurations
├── deployment/
│   ├── systemd/                   # Service configurations
│   ├── caddy/                     # Reverse proxy config
│   └── README.md                  # Complete deployment guide
├── pnpm-workspace.yaml            # Workspace configuration
└── package.json                   # Root dependencies & scripts
```

## Quick Start

**Prerequisites**: [Node.js 18+](https://nodejs.org/) and [pnpm 8+](https://pnpm.io/)

### Get Running in 4 Steps

```bash
# 1. Clone and install dependencies
git clone https://github.com/dunamismax/javascript.git
cd javascript && pnpm install

# 2. Configure environment variables
cp apps/todo-list/.env.example apps/todo-list/.env
cp apps/weather/.env.example apps/weather/.env
# Edit .env files with your MongoDB URI and OpenWeatherMap API key

# 3. Build applications for production
pnpm build

# 4. Start development servers
pnpm dev
```

**Access Applications:**

- **Todo List**: <http://localhost:3001>
- **Weather Dashboard**: <http://localhost:3000>

## Development Commands

```bash
# Development
pnpm dev                 # Start all apps in development mode
pnpm dev:todo           # Start only todo-list application
pnpm dev:weather        # Start only weather application

# Building
pnpm build              # Build all apps for production
pnpm build:dev          # Build with sourcemaps for debugging
pnpm clean              # Clean all built assets

# Code Quality
pnpm lint               # Lint all JavaScript files
pnpm lint:fix           # Auto-fix linting issues
pnpm format             # Format code with Prettier
pnpm format:check       # Check code formatting

# Production
pnpm start              # Start all apps in production mode
pnpm preview            # Build and preview production apps
```

## Key Features & Capabilities

### **Ultra-High Performance Architecture**

- **Fastify Backend** → 2-3x faster than Express with built-in validation
- **MongoDB Native Driver** → Direct database connection with connection pooling
- **esbuild Bundling** → 10-100x faster builds than traditional bundlers
- **Vanilla Frontend** → Zero framework overhead, maximum browser performance

### **Enterprise Security & Validation**

- **VineJS Validation** → Type-safe request validation with detailed error messages
- **Input Sanitization** → XSS protection and data integrity
- **Environment Isolation** → Secure configuration management
- **Security Headers** → OWASP-compliant security headers via Caddy

### **Modern Development Experience**

- **Hot Reload** → Instant development feedback with nodemon
- **Source Maps** → Debug-friendly development builds
- **Code Quality** → ESLint + Prettier with pre-configured rules
- **Monorepo Benefits** → Shared utilities and consistent patterns

### **Production-Ready Deployment**

- **systemd Services** → Robust process management and auto-restart
- **Caddy Reverse Proxy** → Automatic HTTPS, static asset optimization
- **Asset Optimization** → Minified CSS/JS with intelligent caching
- **Health Monitoring** → Built-in logging and status endpoints

## Applications Showcase

### **Todo List Application**

**Modern task management with enterprise features**

- **Full CRUD Operations** → Create, read, update, delete with validation
- **Advanced Organization** → Categories (Work, Personal, Shopping, Health, General)
- **Priority Management** → High, Medium, Low priority levels with visual indicators
- **Real-time Analytics** → Statistics dashboard with MongoDB aggregation
- **Smart Filtering** → Filter by category, priority, and completion status
- **MongoDB Backend** → Persistent storage with proper indexing
- **Data Validation** → VineJS schemas for all API endpoints

### **Weather Dashboard**

**Real-time weather data with professional UI**

- **Global Weather Data** → OpenWeatherMap API integration for any city
- **Secure API Management** → Server-side proxy for API key protection
- **Responsive Design** → Mobile-optimized interface with touch support
- **Settings Management** → Temperature units and user preferences
- **Error Handling** → Graceful degradation with user-friendly messages
- **Comprehensive Data** → Temperature, humidity, wind, pressure, visibility

## Production Deployment

**Complete production-ready deployment configurations included:**

### **systemd Process Management**

```bash
# Todo List Service
sudo systemctl enable todo-list.service
sudo systemctl start todo-list.service

# Weather App Service
sudo systemctl enable weather-app.service
sudo systemctl start weather-app.service
```

### **Caddy Reverse Proxy**

```bash
# Automatic HTTPS with Let's Encrypt
# Static asset serving with caching
# API routing to backend services
# Security headers and compression

sudo systemctl restart caddy
```

### **Example Production Setup**

```bash
# Build for production
pnpm build

# Deploy to server
sudo cp -r apps/todo-list /opt/javascript-apps/
sudo cp -r apps/weather /opt/javascript-apps/

# Install system services
sudo cp deployment/systemd/*.service /etc/systemd/system/
sudo systemctl daemon-reload

# Configure reverse proxy
sudo cp deployment/caddy/Caddyfile /etc/caddy/
sudo systemctl restart caddy
```

**Complete deployment guide**: See [`deployment/README.md`](deployment/README.md)

## Environment Configuration

### **Todo List Application**

```bash
# .env configuration
MONGODB_URI=mongodb://localhost:27017/todos
PORT=3001
NODE_ENV=production
```

### **Weather Application**

```bash
# .env configuration
OPENWEATHERMAP_API_KEY=your_api_key_here
PORT=3000
NODE_ENV=production
```

## Code Examples

### **Backend API with VineJS Validation**

```javascript
// VineJS schema validation
const todoSchema = vine.object({
  text: vine.string().trim().minLength(1),
  priority: vine.enum(['high', 'medium', 'low']).optional(),
  category: vine
    .enum(['general', 'work', 'personal', 'shopping', 'health'])
    .optional(),
});

// Fastify route with validation
fastify.post('/api/todos', async (request, reply) => {
  const data = await vine.validate({ schema: todoSchema, data: request.body });
  const result = await todosCollection.insertOne({
    ...data,
    completed: false,
    createdAt: new Date(),
  });
  return reply.status(201).send(result);
});
```

### **Frontend with Shared Utilities**

```javascript
// Clean API integration
import { ApiClient } from '@dunamismax/utils/api';
const api = new ApiClient('/api');
const todos = await api.get('/todos?category=work&priority=high');

// DOM utilities with XSS protection
import { $, escapeHtml } from '@dunamismax/utils/dom';
const element = $('#todoList');
element.innerHTML = escapeHtml(userInput);
```

### **MongoDB Operations**

```javascript
// Advanced aggregation for analytics
const stats = await todosCollection
  .aggregate([
    { $group: { _id: '$priority', count: { $sum: 1 } } },
    { $project: { priority: '$_id', count: 1, _id: 0 } },
  ])
  .toArray();

// Efficient filtering with indexes
const todos = await todosCollection
  .find({ category: 'work', completed: false })
  .sort({ createdAt: -1 })
  .toArray();
```

### **esbuild Configuration**

```javascript
// Lightning-fast bundling
await esbuild.build({
  entryPoints: ['public/js/main.js'],
  bundle: true,
  minify: !isDev,
  sourcemap: isDev,
  target: ['es2020'],
  format: 'esm',
  outfile: 'dist/js/main.min.js',
});
```

## Architecture Benefits

| Benefit                  | Description                                               |
| ------------------------ | --------------------------------------------------------- |
| **Performance**          | Vanilla frontend + Fastify backend = minimal overhead     |
| **Scalability**          | MongoDB + connection pooling + horizontal scaling ready   |
| **Developer Experience** | Hot reload, fast builds, modern tooling                   |
| **Security**             | Input validation, secure headers, environment isolation   |
| **Maintainability**      | Shared utilities, consistent patterns, monorepo structure |
| **Deployment**           | Production-ready with systemd + Caddy + monitoring        |

## Contributing

We welcome contributions! Here's how to get started:

1. **Fork** the repository and create your feature branch
2. **Follow** existing code patterns and architecture decisions
3. **Run** quality checks: `pnpm lint && pnpm format && pnpm build`
4. **Test** your changes in both development and production modes
5. **Submit** a pull request with a clear description

**Code Standards**: This project uses ESLint and Prettier with shared configurations from `@dunamismax/config`

## License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

<p align="center">
  <strong>Full-Stack Vanilla JavaScript Monorepo</strong><br>
  <sub>Built for performance • Designed for scale • Ready for production</sub>
</p>

<p align="center">
  <sub>Vanilla JS • Node.js • Fastify • MongoDB • pnpm • esbuild • VineJS • Production Ready</sub>
</p>

<p align="center">
  <img src="https://github.com/dunamismax/images/blob/main/js-evolution-wallpaper.jpg" alt="JavaScript Evolution" width="500" />
</p>

---

<p align="center">
  <em>Star this repo if you find it useful!</em>
</p>
