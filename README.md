<p align="center">
  <img src="https://github.com/dunamismax/images/blob/main/javascript/Vanilla-JS-Logo.png" alt="Full-Stack Vanilla JavaScript Monorepo" width="200" />
</p>

<p align="center">
  <a href="https://github.com/dunamismax/javascript">
    <img src="https://readme-typing-svg.demolab.com/?font=Fira+Code&size=24&pause=1000&color=F7DF1E&center=true&vCenter=true&width=1000&lines=Full-Stack+Vanilla+JavaScript+Monorepo;flare-router+%2B+3.4kB+Lightning+Fast+SPA;Intelligent+Link+Prefetching+%2B+Zero+Config;Vanilla+HTML%2BCSS%2BJS+%2B+Node.js+%2B+Fastify;MongoDB+Native+Driver+%2B+VineJS+Validation;pnpm+Workspaces+%2B+esbuild+Bundling;Zero+Framework+Dependencies;Lightning+Fast+Performance;Production+Ready+%2B+Secure;Real-World+Applications;systemd+%2B+Caddy+%2B+HTTPS;Enterprise+Grade+Architecture;Maximum+Performance+Control;Modern+Development+Experience;Complete+Tech+Stack;4-Step+Development+Setup;Monorepo+Package+Architecture;Environment+Config+%2B+dotenv;GitHub+Actions+CI%2FCD+Pipeline;MIT+Licensed+Open+Source" alt="Typing SVG" />
  </a>
</p>

<p align="center">
  <a href="#-flare-router---the-heart-of-lightning-fast-navigation"><img src="https://img.shields.io/badge/flare_router-3.4kB-FF6B35.svg" alt="flare-router"></a>
  <a href="https://nodejs.org/"><img src="https://img.shields.io/badge/Node.js-18+-339933.svg?logo=node.js" alt="Node.js Version"></a>
  <a href="https://fastify.dev/"><img src="https://img.shields.io/badge/Fastify-4.29+-000000.svg?logo=fastify" alt="Fastify Version"></a>
  <a href="https://www.mongodb.com/"><img src="https://img.shields.io/badge/MongoDB-6.18+-47A248.svg?logo=mongodb" alt="MongoDB Version"></a>
  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><img src="https://img.shields.io/badge/Vanilla_JS-ES2020+-F7DF1E.svg?logo=javascript" alt="Vanilla JavaScript"></a>
  <a href="https://eslint.org/"><img src="https://img.shields.io/badge/Code_Quality-ESLint-4B32C3.svg?logo=eslint" alt="ESLint"></a>
  <a href="https://prettier.io/"><img src="https://img.shields.io/badge/Code_Format-Prettier-F7B93E.svg?logo=prettier" alt="Prettier"></a>
  <a href="https://pnpm.io/"><img src="https://img.shields.io/badge/Package_Manager-pnpm-F69220.svg?logo=pnpm" alt="pnpm"></a>
  <a href="https://caddyserver.com/"><img src="https://img.shields.io/badge/Deploy-Caddy-1F88C0.svg" alt="Caddy"></a>
  <a href="https://www.linux.org/"><img src="https://img.shields.io/badge/Platform-Linux-FCC624.svg?logo=linux" alt="Linux"></a>
  <a href="https://systemd.io/"><img src="https://img.shields.io/badge/Process-systemd-000000.svg" alt="systemd"></a>
  <a href="https://docs.github.com/en/actions"><img src="https://img.shields.io/badge/CI%2FCD-GitHub_Actions-2088FF.svg?logo=github-actions" alt="GitHub Actions"></a>
  <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-green.svg" alt="MIT License"></a>
</p>

---

# Full-Stack Vanilla JavaScript Monorepo

A production-ready JavaScript monorepo featuring **flare-router** - a blazingly fast 3.4kB SPA router with intelligent prefetching. Built with vanilla HTML, CSS, and JavaScript frontend, Node.js, Fastify, and MongoDB backend. Experience lightning-fast navigation that makes static sites feel like modern SPAs with zero configuration and maximum performance.

## Features

- **🔥 flare-router** - Lightning-fast 3.4kB router with intelligent prefetching, IntersectionObserver, and SPA-like navigation
- **⚡ Zero-Config Performance** - Instant page transitions, state preservation, and enhanced user experience
- **🏗️ Modern Full-Stack Architecture** with Fastify backend, MongoDB database, and VineJS validation
- **🎨 Vanilla Frontend Experience** with HTML, CSS, JavaScript, and zero framework overhead
- **📦 Shared Utilities** including API client, DOM helpers, storage management, and CSS design system
- **🚀 Real Applications** Todo list with analytics dashboard and weather app showcasing flare-router capabilities
- **🛠️ Development Tools** esbuild bundling, ESLint, Prettier, and pnpm workspaces for seamless development
- **🔒 Production Ready** systemd services, Caddy reverse proxy, environment configuration, and security best practices

## Project Structure

```sh
├── apps/
│   ├── todo-list/             # Full-stack todo app with MongoDB
│   └── weather/               # Weather dashboard with API integration
├── packages/
│   ├── flare-router/          # 🔥 3.4kB SPA router with intelligent prefetching
│   ├── utils/                 # API client, DOM helpers, storage utilities
│   ├── ui-components/         # CSS design system with dark/light themes
│   └── config/                # Shared ESLint, Prettier configurations
├── deployment/                # systemd services and Caddy configuration
└── Configuration files        # ESLint, Prettier, pnpm workspaces
```

---

<p align="center">
  <img src="https://github.com/dunamismax/images/blob/main/javascript/JavaScript-logo.png" alt="JavaScript" width="100" />
</p>

## Quick Start

**Prerequisites:** [Node.js 18+](https://nodejs.org/) and [pnpm 8+](https://pnpm.io/)

### Get Running in 4 Steps

```bash
# 1. Clone and install
git clone https://github.com/dunamismax/javascript.git
cd javascript && pnpm install

# 2. Configure environment (add your MongoDB URI and OpenWeatherMap API key)
cp apps/todo-list/.env.example apps/todo-list/.env
cp apps/weather/.env.example apps/weather/.env
# Edit .env files with your configuration

# 3. Build applications for production
pnpm build

# 4. Start development servers
pnpm dev
```

**Access:** Todo List at `http://localhost:3001`, Weather Dashboard at `http://localhost:3000`

## 🔥 flare-router - The Heart of Lightning-Fast Navigation

flare-router is the custom-built 3.4kB router that powers both applications in this monorepo, transforming static websites into blazingly fast Single Page Applications. Experience the future of web navigation with zero configuration.

### ✨ Key Features

- **🎯 Zero Configuration** - Works out of the box with any static site
- **⚡ Lightning Fast** - Only 3.4kB gzipped, faster than traditional frameworks
- **🧠 Intelligent Prefetching** - Uses IntersectionObserver to prefetch visible links automatically
- **🔄 State Preservation** - JavaScript state persists between page navigations
- **📱 SPA Experience** - Instant page transitions without full reloads
- **🎨 Framework Agnostic** - Drop-in solution for any website architecture
- **🔧 Developer Friendly** - Built-in progress tracking and event system

### 🚀 flare-router in Action

```javascript
// Simple setup - just import and initialize
import flare from '@dunamismax/flare-router';
const router = flare({ prefetch: 'visible', log: true });

// That's it! Your site now feels blazingly fast
// - Links are prefetched when they become visible
// - Page transitions are instant
// - JavaScript state is preserved
// - Users get a modern SPA experience
```

### 🎯 Why flare-router?

Traditional frameworks add hundreds of KB and complex abstractions. flare-router gives you the performance benefits of SPAs with vanilla simplicity:

- **Next.js**: ~300KB+ bundle size vs **flare-router**: 3.4kB
- **React Router**: Requires React ecosystem vs **flare-router**: Works with any HTML
- **Vue Router**: Framework coupling vs **flare-router**: Framework agnostic
- **Traditional MPAs**: Full page reloads vs **flare-router**: Instant transitions

### 📊 Performance Comparison

| Metric           | Traditional MPA    | flare-router Enhanced |
| ---------------- | ------------------ | --------------------- |
| Page Load Time   | 500-2000ms         | 50-200ms              |
| Navigation Speed | Full reload        | Instant               |
| JavaScript State | Lost on navigation | Preserved             |
| User Experience  | Page flickers      | Smooth transitions    |
| Bundle Size      | N/A                | 3.4kB                 |
| Configuration    | N/A                | Zero config           |

## Tech Stack

**🔥 flare-router:** 3.4kB zero-config SPA router with intelligent prefetching and IntersectionObserver
**Core:** Node.js 18+, Vanilla JavaScript ES Modules, Fastify, MongoDB Native Driver
**Frontend:** Vanilla HTML, CSS with design system, JavaScript DOM manipulation, lightning-fast navigation
**Shared:** VineJS validation, API client utilities, storage management, CSS custom properties
**Tools:** esbuild bundling, ESLint, Prettier, pnpm workspaces, environment management
**Deployment:** Linux, systemd process management, Caddy reverse proxy with automatic HTTPS

## Architecture

**Monorepo Structure:** pnpm workspaces with shared packages and independent applications

- **🔥 `@dunamismax/flare-router`** - Lightning-fast 3.4kB router with intelligent prefetching, zero configuration, and SPA-like navigation
- **🛠️ `@dunamismax/utils`** - API client, DOM helpers, storage utilities, performance tools
- **🎨 `@dunamismax/ui-components`** - CSS design system with dark/light themes and comprehensive variables
- **⚙️ `@dunamismax/config`** - Shared ESLint, Prettier, and development configurations
- **📝 Todo List App** - Full CRUD operations with MongoDB, VineJS validation, analytics dashboard, and flare-router navigation
- **🌤️ Weather App** - OpenWeatherMap integration with server-side API proxy, responsive design, and instant navigation

## Development Scripts

```bash
# Development
pnpm dev               # Start all applications in development mode
pnpm dev:todo         # Start only todo-list application
pnpm dev:weather      # Start only weather application

# Building
pnpm build            # Build all applications for production
pnpm build:dev        # Build with sourcemaps for debugging
pnpm clean            # Clean all built assets

# Code Quality
pnpm lint             # Lint all JavaScript files with ESLint
pnpm lint:fix         # Auto-fix linting issues
pnpm format           # Format code with Prettier
pnpm format:check     # Check code formatting

# Production
pnpm start            # Start all applications in production mode
```

<p align="center">
  <img src="https://github.com/dunamismax/images/blob/main/javascript/js-evolution-wallpaper.jpg" alt="JavaScript Evolution" width="450" />
</p>

## Key Features

**🔥 flare-router Performance:** 3.4kB router with intelligent prefetching makes static sites feel like blazingly fast SPAs
**⚡ Ultra-High Performance:** Fastify backend (2-3x faster than Express), MongoDB native driver, esbuild bundling (10-100x faster), vanilla frontend with zero framework overhead

**Enterprise Security:** VineJS validation with detailed error messages, input sanitization and XSS protection, environment isolation, OWASP-compliant security headers

**Modern Development:** Hot reload with nodemon, source maps for debugging, ESLint + Prettier integration, monorepo benefits with shared utilities

**Production Deployment:** systemd services with auto-restart, Caddy reverse proxy with automatic HTTPS, asset optimization with intelligent caching, health monitoring and logging

## Environment Setup

**Todo List Application** (`.env`):

```bash
MONGODB_URI=mongodb://localhost:27017/todos
PORT=3001
NODE_ENV=production
```

**Weather Application** (`.env`):

```bash
OPENWEATHERMAP_API_KEY=your_api_key_here
PORT=3000
NODE_ENV=production
```

## Production Deployment

**Quick Deploy:**

```bash
pnpm build    # Build applications for production
pnpm start    # Start in production mode
```

**Self-Hosting:** Use systemd services and Caddy reverse proxy for production deployment on Linux servers. Complete configurations included for process management, automatic HTTPS, and security headers.

## Code Examples

**Backend API with VineJS Validation:**

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

**Frontend with Shared Utilities:**

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

**🔥 flare-router - Lightning Fast SPA Navigation:**

```javascript
// Zero-config setup - just import and go!
import flare from '@dunamismax/flare-router';
const router = flare({
  prefetch: 'visible', // Intelligent prefetching with IntersectionObserver
  log: true, // Debug mode for development
});

// Programmatic navigation
router.go('/analytics'); // Instant navigation
router.back(); // Browser back
router.forward(); // Browser forward

// Event-driven architecture
window.addEventListener('flare:router:fetch', showLoadingSpinner);
window.addEventListener('flare:router:fetch-progress', updateProgressBar);
window.addEventListener('flare:router:end', hideLoadingSpinner);

// State preservation - JavaScript stays alive between page navigations!
// Perfect for maintaining user input, scroll position, and application state
```

**MongoDB Operations:**

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

**esbuild Configuration:**

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

## Applications

**📝 Todo List Application:**

- Full CRUD operations with MongoDB backend and VineJS validation
- Advanced filtering by category, priority, and completion status
- Real-time analytics dashboard with statistics and charts
- Priority management (High, Medium, Low) with visual indicators
- Category organization (Work, Personal, Shopping, Health, General)
- **🔥 flare-router Integration:** Lightning-fast navigation between tasks, analytics, and about pages

**🌤️ Weather Dashboard:**

- OpenWeatherMap API integration with server-side proxy for security
- Responsive design optimized for mobile and desktop
- Settings management for temperature units and preferences
- Comprehensive weather data including humidity, wind, pressure, visibility
- Error handling with graceful degradation and user-friendly messages
- **🔥 flare-router Integration:** Instant transitions between dashboard, settings, and about pages with intelligent prefetching

## Contributing

1. Fork and create feature branch
2. Make changes following existing patterns and architecture
3. Run `pnpm lint && pnpm format && pnpm build`
4. Test changes in both development and production modes
5. Submit pull request with clear description

**Code Style:** Uses ESLint and Prettier with shared configurations from `@dunamismax/config`

## Author

<img src="https://gravatar.com/nachounabashed3164d5c433" alt="dunamismax" width="80" style="border-radius: 50%;" />

**dunamismax** - Creator and maintainer of this full-stack JavaScript monorepo and the flare-router.

## License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

<p align="center">
  <a href="https://www.buymeacoffee.com/dunamismax">
    <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" >
  </a>
</p>

<p align="center">
  <a href="https://twitter.com/dunamismax" target="_blank"><img src="https://img.shields.io/badge/Twitter-%231DA1F2.svg?&style=for-the-badge&logo=twitter&logoColor=white" alt="Twitter"></a>
  <a href="https://bsky.app/profile/dunamismax.bsky.social" target="_blank"><img src="https://img.shields.io/badge/Bluesky-blue?style=for-the-badge&logo=bluesky&logoColor=white" alt="Bluesky"></a>
  <a href="https://reddit.com/user/dunamismax" target="_blank"><img src="https://img.shields.io/badge/Reddit-%23FF4500.svg?&style=for-the-badge&logo=reddit&logoColor=white" alt="Reddit"></a>
  <a href="https://discord.com/users/dunamismax" target="_blank"><img src="https://img.shields.io/badge/Discord-dunamismax-7289DA.svg?style=for-the-badge&logo=discord&logoColor=white" alt="Discord"></a>
  <a href="https://signal.me/#p/+dunamismax.66" target="_blank"><img src="https://img.shields.io/badge/Signal-dunamismax.66-3A76F0.svg?style=for-the-badge&logo=signal&logoColor=white" alt="Signal"></a>
</p>

---

<p align="center">
  <strong>Full-Stack Vanilla JavaScript Monorepo with flare-router</strong><br>
  <sub>🔥 flare-router 3.4kB Router • Vanilla JS • Node.js • Fastify • MongoDB • Lightning-Fast SPA Navigation</sub>
</p>

<p align="center">
  <img src="https://github.com/dunamismax/images/blob/main/javascript/js-coffee-particles.jpg" alt="JavaScript Coffee" width="450" />
</p>
