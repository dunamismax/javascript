<p align="center">
  <img src="https://github.com/dunamismax/images/blob/main/Vanilla-JS-Logo.png" alt="JavaScript Development Monorepo" width="200" />
</p>

<p align="center">
  <a href="https://github.com/dunamismax/javascript">
    <img src="https://readme-typing-svg.demolab.com/?font=Fira+Code&size=24&pause=1000&color=F7DF1E&center=true&vCenter=true&width=1000&lines=Modern+JavaScript+Development+Stack;Vanilla+JS+%2B+Node.js+Runtime;Express.js+%2B+EJS+Templates;Plain+CSS+%2B+DOM+Manipulation;File+System+%2B+Environment+Config;npm+Workspaces+%2B+Monorepo;ESLint+%2B+Prettier+Quality;Linux+%2B+Caddy+Deployment;Minimal+Dependencies+%2B+Maximum+Control;4-Step+Development+Setup;Zero+Framework+Overhead;Production-Ready+Structure;Hot+Module+Replacement;TypeScript+Optional+JSDoc;Database+Integration+Ready" alt="Typing SVG" />
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

A modern JavaScript development environment featuring vanilla JavaScript, Node.js, Express.js, and EJS. This monorepo provides a cohesive technology stack for building high-performance, maintainable web applications with minimal abstractions and maximum control.

## Features

- **Vanilla JavaScript** with ES Modules and modern browser APIs
- **Express.js Framework** for robust server-side applications
- **EJS Templating** for dynamic server-rendered HTML
- **Plain CSS** with BEM methodology for maintainable styles
- **npm Workspaces** for efficient monorepo package management
- **Shared Packages** for UI components, utilities, and configurations
- **File System Content** with Markdown parsing support
- **Environment Variables** for secure configuration management
- **Production Deployment** with Linux, systemd, and Caddy
- **GitHub Actions** for automated CI/CD workflows

## Project Structure

```sh
├── apps/
│   ├── weather/               # Weather dashboard application
│   └── todo-list/             # Todo list application
├── packages/
│   ├── utils/                 # Shared utility functions
│   ├── ui-components/         # Shared UI components and styles
│   └── config/                # Shared tool configurations
├── .github/workflows/         # GitHub Actions CI/CD
├── scripts/                   # Automation and setup scripts
├── .eslintrc.json            # ESLint configuration
├── .prettierrc.json          # Prettier configuration
└── package.json              # Root workspace configuration
```

---

<p align="center">
  <img src="https://github.com/dunamismax/images/blob/main/JavaScript-logo.png" alt="JavaScript" width="100" />
</p>

## Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- [npm](https://www.npmjs.com/) (v9+)
- Text editor with JavaScript support

### Get Up and Running in 4 Steps

1. **Clone and install:**

   ```bash
   git clone https://github.com/dunamismax/javascript.git
   cd javascript
   npm install
   ```

2. **Run setup script:**

   ```bash
   node scripts/setup.js
   ```

3. **Configure environment variables:**

   ```bash
   # Copy example files and configure
   cp apps/weather/.env.example apps/weather/.env
   cp apps/todo-list/.env.example apps/todo-list/.env
   # Edit .env files with your API keys and settings
   ```

4. **Start development servers:**

   ```bash
   npm run dev
   ```

> **Note:** Applications will be available at their respective ports. Check each app's package.json for specific port configurations.

## Tech Stack

### Core Foundation

- **Node.js (v18+)** - JavaScript runtime with event-driven, non-blocking I/O
- **Vanilla JavaScript (ES Modules)** - Modern JavaScript features without framework overhead
- **npm** - Package management and dependency handling

### Application Layer

- **Express.js** - Minimal web application framework for Node.js
- **EJS** - Server-side templating for dynamic HTML generation
- **Plain CSS** - Well-structured styling with BEM methodology
- **Vanilla DOM Manipulation** - Direct browser API usage for interactivity

### Data & Configuration

- **File System Content** - Local content management with Node.js fs module
- **fetch API** - Standard web API for network requests
- **Environment Variables** - Secure configuration via process.env

### Quality & Deployment

- **npm Scripts** - Automated development lifecycle management
- **Prettier** - Opinionated code formatting
- **ESLint** - Static analysis and code quality enforcement

<p align="center">
  <img src="https://github.com/dunamismax/images/blob/main/js-evolution-wallpaper.jpg" alt="JavaScript Evolution" width="600" />
</p>

## Architecture

### Frontend Applications

- **Framework:** Vanilla JavaScript with ES Modules
- **Templating:** EJS for server-side rendering
- **Styling:** Plain CSS with BEM methodology
- **Interactivity:** Native DOM APIs and modern JavaScript
- **Build:** Express.js static file serving
- **Type Safety:** Optional JSDoc annotations

### Backend Services

- **Runtime:** Node.js with Express.js framework
- **Authentication:** Environment-based configuration
- **Database:** File system or external API integration
- **Validation:** Native JavaScript validation patterns
- **Routing:** Express.js routing with middleware support

### Shared Packages

- **Utils:** Reusable JavaScript utility functions
- **UI Components:** Shared HTML/CSS/JS component patterns
- **Config:** Development tool configurations

## Available Scripts

### Root Level

```bash
npm install       # Install all dependencies
npm run dev       # Start all development servers
npm run start     # Start all applications in production mode
npm run build     # Build all applications
npm test          # Run tests across all workspaces
npm run lint      # Lint all JavaScript files
npm run lint:fix  # Fix auto-fixable linting issues
npm run format    # Format all files with Prettier
npm run format:check # Check formatting without making changes
```

### Individual Applications

```bash
# Weather Application
npm run weather:dev    # Development server
npm run weather:start  # Production server

# Todo List Application
npm run todo:dev       # Development server
npm run todo:start     # Production server
```

### Quality Checks

```bash
npm run lint           # Run ESLint across all files
npm run format         # Format code with Prettier
npm run format:check   # Check if code is properly formatted
```

## Adding New Applications

To add a new application to the monorepo:

1. **Create Application Directory**

   ```bash
   mkdir apps/your-app-name
   cd apps/your-app-name
   ```

2. **Initialize Package**

   ```bash
   npm init -y
   ```

3. **Set Up Basic Structure**

   ```
   apps/your-app-name/
   ├── package.json
   ├── server.js           # Express.js server
   ├── views/             # EJS templates
   │   ├── index.ejs
   │   └── partials/
   ├── public/            # Static assets
   │   ├── css/
   │   ├── js/
   │   └── images/
   └── routes/            # Express routes
   ```

4. **Configure Package.json**

   ```json
   {
     "name": "@dunamismax/your-app-name",
     "scripts": {
       "dev": "nodemon server.js",
       "start": "node server.js"
     },
     "dependencies": {
       "express": "*",
       "ejs": "*"
     }
   }
   ```

5. **Add Workspace Scripts**
   Update root `package.json` scripts section:

   ```json
   "scripts": {
     "your-app:dev": "npm run dev -w apps/your-app-name",
     "your-app:start": "npm run start -w apps/your-app-name"
   }
   ```

## Environment Variables

### Weather Application (.env)

```bash
NODE_ENV=development
PORT=3000
OPENWEATHERMAP_API_KEY=your_api_key_here
```

### Todo List Application (.env)

```bash
NODE_ENV=development
PORT=3001
DATABASE_PATH=./database/todos.db
```

## Production Deployment

### Development Setup

```bash
# Install dependencies
npm install

# Start all applications
npm run dev
```

### Production Deployment

1. **Set up production environment:**

   ```bash
   # Configure production environment variables
   NODE_ENV=production
   # Set appropriate ports and API keys
   ```

2. **Build applications:**

   ```bash
   npm run build
   ```

3. **Self-hosting with Linux and systemd:**

   Create systemd service files for each application:

   ```ini
   [Unit]
   Description=Your App Name
   After=network.target

   [Service]
   Type=simple
   User=www-data
   WorkingDirectory=/path/to/your/app
   ExecStart=/usr/bin/node server.js
   Restart=always
   Environment=NODE_ENV=production

   [Install]
   WantedBy=multi-user.target
   ```

4. **Configure Caddy reverse proxy:**

   ```
   your-domain.com {
     reverse_proxy localhost:3000
   }
   ```

## Usage Examples

### Creating Express.js Routes

```javascript
// routes/api.js
import express from 'express';
const router = express.Router();

router.get('/data', async (req, res) => {
  try {
    const data = await fetchExternalData();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
```

### EJS Template Example

```html
<!-- views/index.ejs -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title><%= title %></title>
  <link rel="stylesheet" href="/css/styles.css">
</head>
<body>
  <h1>Welcome to <%= appName %></h1>
  <% if (user) { %>
    <p>Hello, <%= user.name %>!</p>
  <% } %>
  <script src="/js/main.js"></script>
</body>
</html>
```

### Shared Utility Usage

```javascript
// Using shared utilities
import { createApiClient } from '@dunamismax/utils/api';
import { $, show, hide } from '@dunamismax/utils/dom';

const api = createApiClient('http://localhost:3000/api');
const element = $('.my-element');
show(element);
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run quality checks: `npm run lint && npm run format`
5. Submit a pull request

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
  <img src="https://github.com/dunamismax/images/blob/main/js-coffee-particles.jpg" alt="JavaScript Coffee" width="600" />
</p>
