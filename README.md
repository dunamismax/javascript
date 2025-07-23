<p align="center">
  <img src="https://github.com/dunamismax/images/blob/main/Vanilla-JS-Logo.png" alt="JavaScript Development Monorepo" width="200" />
</p>

<p align="center">
  <a href="https://github.com/dunamismax/javascript">
    <img src="https://readme-typing-svg.demolab.com/?font=Fira+Code&size=24&pause=1000&color=F7DF1E&center=true&vCenter=true&width=1000&lines=Modern+JavaScript+Development+Monorepo;Vanilla+JS+%2B+Node.js+%2B+Express.js;Shared+Utilities+%2B+API+Client;EJS+Templates+%2B+Server-Side+Rendering;SQLite+Database+%2B+REST+APIs;CSS+Design+System+%2B+Dark+Theme;npm+Workspaces+%2B+ES+Modules;ESLint+%2B+Prettier+%2B+Code+Quality;Weather+Dashboard+%2B+Todo+Manager;Secure+API+Key+Management;Production+Deployment+Ready;Zero+Framework+Overhead;Maximum+Performance+Control;TypeScript+Optional+JSDoc;Linux+%2B+systemd+%2B+Caddy;4-Step+Development+Setup;Real-World+Application+Examples;Monorepo+Package+Architecture;File+System+%2B+Environment+Config;GitHub+Actions+CI%2FCD+Pipeline;MIT+Licensed+Open+Source" alt="Typing SVG" />
  </a>
</p>

<p align="center">
  <a href="https://nodejs.org/"><img src="https://img.shields.io/badge/Node.js-18+-339933.svg?logo=node.js" alt="Node.js Version"></a>
  <a href="https://expressjs.com/"><img src="https://img.shields.io/badge/Express.js-4.18+-000000.svg?logo=express" alt="Express.js Version"></a>
  <a href="https://ejs.co/"><img src="https://img.shields.io/badge/Templates-EJS-B4CA65.svg" alt="EJS Templates"></a>
  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><img src="https://img.shields.io/badge/Vanilla_JS-ES2020+-F7DF1E.svg?logo=javascript" alt="Vanilla JS"></a>
  <a href="https://eslint.org/"><img src="https://img.shields.io/badge/Code_Quality-ESLint-4B32C3.svg?logo=eslint" alt="ESLint"></a>
  <a href="https://prettier.io/"><img src="https://img.shields.io/badge/Code_Format-Prettier-F7B93E.svg?logo=prettier" alt="Prettier"></a>
  <a href="https://www.npmjs.com/"><img src="https://img.shields.io/badge/Package_Manager-npm-CB3837.svg?logo=npm" alt="npm"></a>
  <a href="https://caddyserver.com/"><img src="https://img.shields.io/badge/Deploy-Caddy-1F88C0.svg" alt="Caddy"></a>
  <a href="https://www.linux.org/"><img src="https://img.shields.io/badge/Platform-Linux-FCC624.svg?logo=linux" alt="Linux"></a>
  <a href="https://systemd.io/"><img src="https://img.shields.io/badge/Process-systemd-000000.svg" alt="systemd"></a>
  <a href="https://docs.github.com/en/actions"><img src="https://img.shields.io/badge/CI%2FCD-GitHub_Actions-2088FF.svg?logo=github-actions" alt="GitHub Actions"></a>
  <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-green.svg" alt="MIT License"></a>
</p>

---

# JavaScript Development Monorepo

A production-ready JavaScript monorepo featuring vanilla JavaScript, Node.js, and Express.js with shared utilities, API clients, and a comprehensive design system. Build high-performance web applications with minimal dependencies and maximum control.

## Features

- **Modern JavaScript** with ES Modules and shared utility packages
- **Express.js APIs** with SQLite database and secure server-side routing
- **Shared Components** including API client, DOM utilities, and CSS design system
- **Real Applications** weather dashboard and todo manager with full CRUD operations
- **Development Tools** ESLint, Prettier, and npm workspaces for seamless development
- **Production Ready** environment configuration, deployment scripts, and security best practices

## Project Structure

```sh
├── apps/
│   ├── weather/               # Weather dashboard with OpenWeatherMap API
│   └── todo-list/             # Full-stack todo app with SQLite
├── packages/
│   ├── utils/                 # API client, DOM helpers, storage utilities
│   ├── ui-components/         # CSS design system with dark/light themes
│   └── config/                # Shared ESLint, Prettier, Node.js configs
├── scripts/setup.js           # Automated environment setup
└── Configuration files        # ESLint, Prettier, package.json
```

---

<p align="center">
  <img src="https://github.com/dunamismax/images/blob/main/JavaScript-logo.png" alt="JavaScript" width="100" />
</p>

## Quick Start

**Prerequisites:** [Node.js 18+](https://nodejs.org/) and [npm 9+](https://www.npmjs.com/)

### Get Running in 4 Steps

```bash
# 1. Clone and install
git clone https://github.com/dunamismax/javascript.git
cd javascript && npm install

# 2. Run setup script
node scripts/setup.js

# 3. Configure environment (add your OpenWeatherMap API key)
cp apps/weather/.env.example apps/weather/.env
# Edit apps/weather/.env with your API key

# 4. Start development servers
npm run dev
```

**Access:** Weather app at `http://localhost:3000`, Todo app at `http://localhost:3001`

## Tech Stack

**Core:** Node.js 18+, Vanilla JavaScript ES Modules, Express.js, SQLite
**Frontend:** EJS templates, CSS design system, shared DOM utilities
**Shared:** API client, storage utilities, configuration packages
**Tools:** ESLint, Prettier, npm workspaces, environment management
**Deployment:** Linux, systemd, Caddy reverse proxy

<p align="center">
  <img src="https://github.com/dunamismax/images/blob/main/js-evolution-wallpaper.jpg" alt="JavaScript Evolution" width="450" />
</p>

## Architecture

**Monorepo Structure:** npm workspaces with shared packages and independent applications

- **`@dunamismax/utils`** - API client, DOM helpers, storage utilities, performance tools
- **`@dunamismax/ui-components`** - CSS design system with dark/light themes
- **`@dunamismax/config`** - Shared ESLint, Prettier, and Node.js configurations
- **Weather App** - OpenWeatherMap integration with server-side API proxy
- **Todo App** - Full CRUD operations with SQLite database and REST API

## Development Scripts

```bash
# Development
npm run dev           # Start all applications in development mode
npm install           # Install all workspace dependencies

# Code Quality
npm run lint          # Lint all JavaScript files with ESLint
npm run lint:fix      # Auto-fix linting issues
npm run format        # Format code with Prettier
npm run format:check  # Check code formatting

# Production
npm run start         # Start all applications in production mode
```

## Key Features

**Shared API Client:** Centralized HTTP client with error handling and JSON support
**DOM Utilities:** jQuery-style selectors and DOM manipulation helpers
**CSS Design System:** Comprehensive theme with dark/light mode support
**Security:** Server-side API key management and HTML escaping
**Database:** SQLite integration with full CRUD operations
**Development:** Hot reload, code formatting, and quality checks

## Environment Setup

**Weather App** (`apps/weather/.env`):

```bash
OPENWEATHERMAP_API_KEY=your_api_key_here
PORT=3000
```

**Todo App** runs on port 3001 with local SQLite database (no additional config required)

## Production Deployment

**Quick Deploy:**

```bash
npm run start  # Production mode
```

**Self-Hosting:** Use systemd services and Caddy reverse proxy for production deployment on Linux servers. Applications are configured for environment-based settings and secure API key management.

## Code Examples

**Using Shared API Client:**

```javascript
import { ApiClient } from '@dunamismax/utils/api.js';
const api = new ApiClient('/api');
const todos = await api.get('/todos');
```

**DOM Utilities:**

```javascript
import { $, escapeHtml } from '@dunamismax/utils/dom.js';
const element = $('#myElement');
element.innerHTML = escapeHtml(userInput);
```

**CSS Design System:**

```css
/* Use shared CSS custom properties */
color: var(--color-primary);
background: var(--color-surface);
padding: var(--spacing-md);
```

## Contributing

1. Fork and create feature branch
2. Make changes following existing patterns
3. Run `npm run lint && npm run format`
4. Submit pull request

**Code Style:** Uses ESLint and Prettier with shared configurations from `@dunamismax/config`

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
  <strong>JavaScript Development Monorepo</strong><br>
  <sub>Vanilla JS • Node.js • Express.js • EJS • Plain CSS • npm Workspaces • Linux • Self-Hosted</sub>
</p>

<p align="center">
  <img src="https://github.com/dunamismax/images/blob/main/js-coffee-particles.jpg" alt="JavaScript Coffee" width="450" />
</p>
