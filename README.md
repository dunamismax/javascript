<p align="center">
  <img src="https://github.com/dunamismax/images/blob/main/deno/deno-white-logo-main.jpeg" alt="Deno Main Logo" width="200" />
</p>

<p align="center">
  <a href="https://github.com/dunamismax/citrus-press">
    <img src="https://readme-typing-svg.demolab.com/?font=Fira+Code&size=24&pause=1000&color=00ADD8&center=true&vCenter=true&width=1000&lines=Citrus+Press+-+Deno+Fresh+Application;Island+Architecture+%2B+Zero+JS+by+Default;TypeScript+Native+%2B+Zero+Config+Setup;Deno+2+Runtime+%2B+Fresh;Valibot+JSR+Validation+%2B+Type+Safety;Preact+Islands+%2B+Tailwind+CSS;Deno+KV+Database+%2B+Zero+Setup;Web+Standard+APIs+Everywhere;Lightning+Fast+Performance;Production+Ready+%2B+Secure;Real-World+Applications;systemd+%2B+Caddy+%2B+HTTPS;Edge+Ready+Architecture;Developer+Experience+First;Complete+Modern+Stack;Single+Binary+Deployment;JSR+Package+Registry;Environment+Config+%2B+dotenv;Built-in+Toolchain;MIT+Licensed+Open+Source" alt="Typing SVG" />
  </a>
</p>

<p align="center">
  <a href="https://deno.com/"><img src="https://img.shields.io/badge/Deno-2.3+-00ADD8.svg?logo=deno" alt="Deno Version"></a>
  <a href="https://fresh.deno.dev/"><img src="https://img.shields.io/badge/Fresh-Framework-FDB462.svg" alt="Fresh Version"></a>
  <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-Native-3178C6.svg?logo=typescript" alt="TypeScript"></a>
  <a href="https://jsr.io/@valibot/valibot"><img src="https://img.shields.io/badge/Valibot-JSR-F7DF1E.svg" alt="Valibot JSR"></a>
  <a href="https://preactjs.com/"><img src="https://img.shields.io/badge/Preact-Islands-673AB8.svg?logo=preact" alt="Preact"></a>
  <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/Tailwind-CSS-06B6D4.svg?logo=tailwindcss" alt="Tailwind CSS"></a>
  <a href="https://deno.com/kv"><img src="https://img.shields.io/badge/Deno_KV-Database-00ADD8.svg" alt="Deno KV"></a>
  <a href="https://jsr.io/"><img src="https://img.shields.io/badge/Registry-JSR-F7DF1E.svg" alt="JSR Registry"></a>
  <a href="https://caddyserver.com/"><img src="https://img.shields.io/badge/Deploy-Caddy-1F88C0.svg" alt="Caddy"></a>
  <a href="https://www.linux.org/"><img src="https://img.shields.io/badge/Platform-Linux-FCC624.svg?logo=linux" alt="Linux"></a>
  <a href="https://systemd.io/"><img src="https://img.shields.io/badge/Process-systemd-000000.svg" alt="systemd"></a>
  <a href="https://docs.github.com/en/actions"><img src="https://img.shields.io/badge/CI%2FCD-GitHub_Actions-2088FF.svg?logo=github-actions" alt="GitHub Actions"></a>
  <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-green.svg" alt="MIT License"></a>
</p>

---

# Citrus Press - Deno Fresh Application

A production-ready TypeScript application built with **Deno 2** and **Fresh**, featuring island architecture, zero JavaScript by default, and lightning-fast performance. Experience the future of web development with native TypeScript, web standard APIs, and a modern edge-ready architecture that compiles to a single binary.

## Core Features

- **🍋 Fresh Framework**: Next-gen web framework with island architecture, Express-like API, and zero JS by default.
- **🦕 Deno 2 Runtime**: Secure, modern TypeScript runtime with a built-in toolchain and npm compatibility.
- **🏝️ Island Architecture**: Interactive Preact components are hydrated only where needed for optimal performance.
- **🔒 Native TypeScript**: First-class TypeScript support with zero configuration and strict type safety.
- **🗄️ Deno KV Database**: Built-in, zero-setup key-value database perfect for edge deployments.
- **🎨 Modern UI Stack**: Tailwind CSS with Preact signals for reactive, performant interfaces.
- **🚀 Real-World Examples**: Includes a Todo list with analytics and a weather dashboard to showcase Fresh capabilities.
- **🔧 Single Binary Deployment**: Compile the entire application to a standalone executable with `deno compile`.

## Project Structure

```sh
├── routes/                    # Fresh file-based routing
│   ├── index.tsx             # Home page
│   ├── todos/                # Todo application routes
│   ├── weather/              # Weather dashboard routes
│   ├── api/                  # API endpoints
│   ├── _app.tsx              # App wrapper component
│   ├── _404.tsx              # 404 error page
│   └── _middleware.ts        # Request middleware
├── islands/                  # Interactive client-side components
│   ├── TodoApp.tsx           # Todo list island
│   └── WeatherApp.tsx        # Weather dashboard island
├── lib/                      # Shared utilities and types
│   ├── types.ts              # TypeScript interfaces and Valibot schemas
│   ├── db.ts                 # Deno KV database layer
│   └── utils.ts              # Utility functions
├── static/                   # Static assets
├── deno.json                 # Deno configuration and dependencies
├── fresh.config.ts           # Fresh framework configuration
├── main.ts                   # Application entry point
└── dev.ts                    # Development server
```

---

<p align="center">
  <img src="https://github.com/dunamismax/images/blob/main/deno/deno-toolbox.jpeg" alt="Deno Toolbox" width="200" />
</p>

## Quick Start

**Prerequisites:** [Deno 2.0+](https://deno.land/manual/getting_started/installation)

### Get Running in 4 Steps

```bash
# 1. Clone and navigate
git clone https://github.com/dunamismax/citrus-press.git
cd citrus-press

# 2. Configure environment (add your OpenWeatherMap API key)
cp .env.example .env
# Edit .env with your API configuration

# 3. Start development server
deno task start

# 4. Open your browser
# Main page: http://localhost:8000
# Todo List: http://localhost:8000/todos
# Weather App: http://localhost:8000/weather
```

**That's it!** No npm install, no build step, no configuration. Deno handles everything.

## Why Citrus Press?

Citrus Press is built on Fresh, a cutting-edge web framework that combines the best of server-side rendering with selective client-side interactivity through its revolutionary **island architecture**. Unlike traditional frameworks that ship large JavaScript bundles, Fresh ships **zero JavaScript by default**. This means instant page loads, excellent Core Web Vitals, and a superior user experience.

| Metric              | Traditional SPA | Fresh Islands       |
| ------------------- | --------------- | ------------------- |
| Initial Bundle Size | 300KB+          | 0KB (HTML/CSS only) |
| Time to Interactive | 2-5 seconds     | Instant             |
| Hydration Overhead  | Full page       | Islands only        |

This project leverages the full power of the Deno ecosystem for a seamless developer experience, from the built-in toolchain to the modern JSR package registry.

## Tech Stack

- **Framework**: 🍋 Fresh
- **Runtime**: 🦕 Deno 2
- **UI**: 🏝️ Preact Islands & 🎨 Tailwind CSS
- **Database**: 🗄️ Deno KV
- **Packages**: 📦 JSR & 🔍 Valibot
- **Tooling**: ⚙️ Deno Built-in (Format, Lint, Test, Bundle)

## Development Scripts

```bash
# Start development server with hot reload
deno task start

# Build for production
deno task build

# Compile to standalone binary
deno task compile

# Run all code quality checks
deno task check
```

<p align="center">
  <img src="https://github.com/dunamismax/images/blob/main/deno/deno-mage.jpeg" alt="Deno Mage" width="200" />
</p>

## Environment & Deployment

### Environment Setup (`.env`)

```bash
# Required: OpenWeatherMap API key for weather functionality
OPENWEATHERMAP_API_KEY=your_api_key_here

# Optional: Server configuration
PORT=8000
```

### Production Deployment

Compile to a single, dependency-free binary and deploy anywhere.

```bash
# Compile to standalone executable
deno task compile

# Run the deployed application
./bin/citrus-press
```

## Applications

This repository includes two example applications:

- **📝 Todo List**: A full CRUD application with advanced filtering, real-time analytics, and priority management, all powered by Deno KV and Fresh islands.
- **🌤️ Weather Dashboard**: A responsive dashboard using the OpenWeatherMap API, featuring local storage for preferences and beautiful data visualizations.

## Author

<img src="https://gravatar.com/nachounabashed3164d5c433" alt="dunamismax" width="80" style="border-radius: 50%;" />

**dunamismax** - Creator and maintainer of Citrus Press and advocate for modern
web development with Deno and Fresh.

## License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE)
file for details.

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
  <strong>Citrus Press - Deno Fresh Application</strong><br>
  <sub>🍋 Fresh • 🦕 Deno 2 • 🏝️ Islands Architecture • ⚡ TypeScript Native • 🚀 Edge Ready</sub>
</p>

<p align="center">
  <img src="https://github.com/dunamismax/images/blob/main/deno/deno-evolution.jpeg" alt="Deno Evolution" width="500" />
</p>
