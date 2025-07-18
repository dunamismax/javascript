<p align="center">
  <img src="/images/js-evolution.jpeg" alt="js-webdev Logo" width="400" />
</p>

<p align="center">
  <a href="https://github.com/dunamismax/js-webdev">
    <img src="https://readme-typing-svg.demolab.com/?font=Fira+Code&size=24&pause=1000&color=F7DF1E&center=true&vCenter=true&width=800&lines=Pure+JavaScript+Learning+Monorepo;Vanilla+JS+%2B+Express.js+%2B+SQLite;Lightning-Fast+esbuild+Development;Modern+Web+Standards+Focus;Zero+Framework+Learning+Environment" alt="Typing SVG" />
  </a>
</p>

<p align="center">
  <a href="https://nodejs.org/"><img src="https://img.shields.io/badge/Node.js-18+-339933.svg?logo=node.js" alt="Node.js Version"></a>
  <a href="https://expressjs.com/"><img src="https://img.shields.io/badge/Express.js-4.18+-000000.svg?logo=express" alt="Express.js Version"></a>
  <a href="https://esbuild.github.io/"><img src="https://img.shields.io/badge/esbuild-0.19+-FFCF00.svg?logo=esbuild" alt="esbuild Version"></a>
  <a href="https://www.sqlite.org/"><img src="https://img.shields.io/badge/SQLite-3.0+-003B57.svg?logo=sqlite" alt="SQLite Version"></a>
  <a href="https://www.npmjs.com/"><img src="https://img.shields.io/badge/npm-9.0+-CB3837.svg?logo=npm" alt="npm Version"></a>
  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><img src="https://img.shields.io/badge/Vanilla_JS-ES2020+-F7DF1E.svg?logo=javascript" alt="Vanilla JS"></a>
  <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-green.svg" alt="MIT License"></a>
</p>

---

## The Ultimate Pure JavaScript Learning Monorepo

Modern web development learning environment built with vanilla JavaScript, Express.js, and SQLite. Perfect for understanding core web technologies without framework overhead.

### Tech Stack

- **Frontend**: Vanilla JavaScript + Modern CSS + Web APIs
- **Backend**: Express.js + Node.js + SQLite database
- **Build**: esbuild for lightning-fast development
- **Learning**: Pure web standards without abstractions

## Quick Start

```bash
git clone https://github.com/dunamismax/js-webdev.git
cd js-webdev
npm install && npm run dev
```

**Applications:**

- Weather App: <http://localhost:3000>
- Todo List Frontend: <http://localhost:3001>
- Todo List API: <http://localhost:3002>

## Applications

### 1. Weather App (Port 3000)

Dark-themed weather dashboard with OpenWeatherMap API integration

**Features:**

- Real-time weather data fetching
- Dark theme responsive UI
- City search functionality
- Detailed weather metrics display
- Modern CSS Grid/Flexbox layouts

**Setup:**

1. Get a free API key from [OpenWeatherMap](https://openweathermap.org/api)
2. Copy `apps/weather/.env.example` to `apps/weather/.env`
3. Add your API key: `OPENWEATHERMAP_API_KEY=your_key_here`

### 2. Todo List App (Ports 3001-3002)

Full-stack task management application demonstrating client-server architecture

**Features:**

- CRUD operations with SQLite persistence
- Priority levels and category organization
- Advanced filtering and statistics
- RESTful API design patterns
- Responsive frontend with vanilla JS

**API Endpoints:**

- `GET /api/todos` - Retrieve todos with optional filters
- `POST /api/todos` - Create new todo items
- `PUT /api/todos/:id` - Update existing todos
- `DELETE /api/todos/:id` - Remove todo items
- `GET /api/stats` - Get usage statistics

## Development Commands

```bash
npm run dev           # Start all applications
npm run build         # Build for production
npm run clean         # Clean build artifacts
```

### Individual Apps

```bash
npm run weather:dev    # Weather app development
npm run weather:build  # Weather app production build
npm run todo:dev       # Todo app (frontend + backend)
npm run todo:build     # Todo app production build
```

## Architecture

### Project Structure

```
js-webdev/
├── apps/
│   ├── weather/           # Weather dashboard
│   └── todo-list/         # Full-stack todo app
├── shared/
│   ├── utils/             # Reusable JavaScript utilities
│   └── styles/            # Common CSS variables & reset
├── packages/              # Shared server utilities
└── esbuild.config.js      # Build configuration
```

### Shared Utilities

**API Client (`shared/utils/api.js`)**

```javascript
import { createApiClient } from "../shared/utils/api.js";
const api = createApiClient("http://localhost:3002/api");
const todos = await api.get("/todos");
```

**DOM Helpers (`shared/utils/dom.js`)**

```javascript
import { $, $$, createElement, show, hide } from "../shared/utils/dom.js";
const element = $(".my-class");
show(element);
```

**Storage Management (`shared/utils/storage.js`)**

```javascript
import { localStorage, sessionStorage } from "../shared/utils/storage.js";
localStorage.set("key", { data: "value" });
```

## Learning Benefits

- **Pure JavaScript**: Master core language features without framework abstractions
- **Modern Web APIs**: Learn fetch, localStorage, DOM manipulation, and more
- **Full-Stack Understanding**: See how frontend and backend communicate
- **Build Tools**: Experience modern development workflow with esbuild
- **Database Integration**: Understand SQL and data persistence patterns

## Performance Benefits

- **Lightning builds**: esbuild compiles in milliseconds
- **Minimal bundles**: No framework overhead, just your code
- **Modern JavaScript**: ES2020+ features with browser compatibility
- **Hot reloading**: Instant feedback during development

## Contributing

Fork → Feature branch → Test → Pull request

## Support This Project

If you find this JavaScript Learning Monorepo valuable, consider supporting its development:

<p align="center">
  <a href="https://www.buymeacoffee.com/dunamismax" target="_blank">
    <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" />
  </a>
</p>

## Connect

<p align="center">
  <a href="https://twitter.com/dunamismax" target="_blank"><img src="https://img.shields.io/badge/Twitter-%231DA1F2.svg?&style=for-the-badge&logo=twitter&logoColor=white" alt="Twitter"></a>
  <a href="https://bsky.app/profile/dunamismax.bsky.social" target="_blank"><img src="https://img.shields.io/badge/Bluesky-blue?style=for-the-badge&logo=bluesky&logoColor=white" alt="Bluesky"></a>
  <a href="https://reddit.com/user/dunamismax" target="_blank"><img src="https://img.shields.io/badge/Reddit-%23FF4500.svg?&style=for-the-badge&logo=reddit&logoColor=white" alt="Reddit"></a>
  <a href="https://discord.com/users/dunamismax" target="_blank"><img src="https://img.shields.io/badge/Discord-dunamismax-7289DA.svg?style=for-the-badge&logo=discord&logoColor=white" alt="Discord"></a>
  <a href="https://signal.me/#p/+dunamismax.66" target="_blank"><img src="https://img.shields.io/badge/Signal-dunamismax.66-3A76F0.svg?style=for-the-badge&logo=signal&logoColor=white" alt="Signal"></a>
</p>

## License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

<p align="center">
  <img src="/images/js-yellow-crown.jpg" alt="JavaScript Yellow" width="400" />
</p>

<p align="center">
  <strong>The Ultimate Pure JavaScript Learning Monorepo</strong><br>
  <sub>Vanilla JS + Express.js + SQLite + esbuild + Modern Web Standards</sub><br>
  <sub>Perfect Learning Environment + Zero Framework Overhead + Real-World Patterns</sub>
</p>
