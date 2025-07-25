<p align="center">
  <img src="https://github.com/dunamismax/images/blob/main/citrus-press/Deno-Fresh-Logo.png" alt="Citrus Press - Deno Fresh Application" width="200" />
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

A production-ready TypeScript application built with **Deno 2** and **Fresh**
featuring island architecture, zero JavaScript by default, and
lightning-fast performance. Experience the future of web development with native
TypeScript, web standard APIs, and a modern edge-ready architecture that
compiles to a single binary.

## Features

- **🍋 Fresh** - Next-generation web framework with island
  architecture, Express-like API, and zero JavaScript by default
- **🦕 Deno 2 Runtime** - Secure, modern JavaScript/TypeScript runtime with
  built-in toolchain and npm compatibility
- **🏝️ Island Architecture** - Interactive Preact components hydrated only where
  needed for optimal performance
- **🔒 TypeScript Native** - First-class TypeScript support with zero
  configuration and strict type safety
- **⚡ Web Standard APIs** - Built on web standards for maximum compatibility
  and future-proofing
- **🗄️ Deno KV Database** - Built-in key-value database with zero setup, perfect
  for edge deployment
- **🎨 Modern UI Stack** - Tailwind CSS with Preact signals for reactive,
  performant interfaces
- **📦 JSR Integration** - JavaScript Registry for modern, TypeScript-first
  package management
- **🚀 Real Applications** - Todo list with analytics and weather dashboard
  showcasing Fresh capabilities
- **🔧 Single Binary Deploy** - Compile to standalone executable with
  `deno compile` for easy deployment

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
  <img src="https://github.com/dunamismax/images/blob/main/citrus-press/Deno-logo.png" alt="Deno" width="100" />
</p>

## Quick Start

**Prerequisites:**
[Deno 2.0+](https://deno.land/manual/getting_started/installation)

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

**That's it!** No npm install, no build step, no configuration. Deno handles
everything.

## 🍋 Fresh - The Heart of Modern Web Development

Fresh represents the cutting edge of web framework design, combining
the best of server-side rendering with selective client-side interactivity
through its revolutionary island architecture.

### ✨ Key Features

- **🏝️ Island Architecture** - Zero JavaScript by default, interactivity only
  where needed
- **⚡ Lightning Fast** - No hydration overhead, instant page loads, optimal
  performance
- **🔄 Express-like API** - Familiar middleware patterns with modern Fresh
  capabilities
- **🎯 Zero Configuration** - File-based routing, automatic code splitting,
  built-in optimization
- **🦕 Deno Native** - Leverages Deno's security model and web standard APIs
- **📱 Edge Ready** - Deploy anywhere with Deno Deploy or compile to single
  binary
- **🔧 Plugin System** - Extensible architecture for custom functionality

### 🚀 Fresh in Action

```typescript
// File-based routing - just create files in routes/
// routes/api/todos/index.ts
import { Handlers } from "fresh";
import * as v from "valibot";

export const handler: Handlers = {
  async GET(req) {
    // Web standard Request/Response APIs
    const todos = await db.getAllTodos();
    return Response.json({ success: true, data: todos });
  },

  async POST(req) {
    // Valibot validation with JSR
    const body = await req.json();
    const result = v.safeParse(CreateTodoSchema, body);

    if (!result.success) {
      return new Response(
        JSON.stringify({
          success: false,
          errors: result.issues,
        }),
        { status: 400 },
      );
    }

    const todo = await db.createTodo(result.output);
    return Response.json({ success: true, data: todo });
  },
};
```

### 🎯 Why Fresh?

Traditional frameworks ship massive JavaScript bundles. Fresh ships zero
JavaScript by default:

- **Next.js**: ~300KB+ runtime vs **Fresh**: 0KB default
- **React SPA**: Full hydration vs **Fresh**: Selective islands
- **Vue/Nuxt**: Framework coupling vs **Fresh**: Web standards
- **Traditional SSR**: All or nothing vs **Fresh**: Granular interactivity

### 📊 Performance Comparison

| Metric              | Traditional SPA | Fresh Islands       |
| ------------------- | --------------- | ------------------- |
| Initial Bundle Size | 300KB+          | 0KB (HTML/CSS only) |
| Time to Interactive | 2-5 seconds     | Instant             |
| Hydration Overhead  | Full page       | Islands only        |
| Core Web Vitals     | Poor-Good       | Excellent           |
| SEO Performance     | Requires SSR    | Native SSR          |
| Edge Compatibility  | Limited         | Native              |

## Tech Stack

**🍋 Fresh:** Next-generation web framework with island architecture
and Express-like API **🦕 Deno 2:** Secure TypeScript runtime with built-in
toolchain, web APIs, and npm compatibility\
**🏝️ Islands:** Preact components with selective hydration and signal-based
reactivity **🎨 Styling:** Tailwind CSS with utility-first design and responsive
components **🗄️ Database:** Deno KV for serverless-friendly persistent storage
with zero configuration **📦 Packages:** JSR registry for modern
TypeScript-first dependency management **🔍 Validation:** Valibot for modular,
type-safe schema validation with tree-shaking **⚙️ Tooling:** Built-in
formatter, linter, test runner, and bundler with Deno

## Architecture

**Island Architecture:** Fresh's revolutionary approach to web applications

- **🌊 Server-Side Foundation** - HTML and CSS delivered instantly with perfect
  SEO
- **🏝️ Interactive Islands** - Preact components hydrated only where
  interactivity is needed
- **📡 API Routes** - File-based API endpoints with web standard
  Request/Response
- **🎯 Selective Hydration** - JavaScript runs only for interactive components,
  not the entire page
- **⚡ Signals** - Reactive state management with Preact signals for efficient
  updates
- **🔄 Middleware** - Express-like middleware system for authentication,
  logging, and more
- **🗄️ Deno KV Integration** - Built-in database with edge-compatible
  persistence
- **📦 JSR Dependencies** - Modern package management with TypeScript-first
  modules

## Development Scripts

```bash
# Development
deno task start         # Start development server with hot reload
deno task dev           # Alternative development command
deno task preview       # Preview production build

# Building & Deployment  
deno task build         # Build for production
deno task compile       # Compile to standalone binary
deno task compile:docker # Compile for Linux deployment
deno task bundle        # Bundle for web distribution

# Code Quality
deno task check         # Run formatter, linter, and type checking
deno fmt                # Format code with built-in formatter
deno lint               # Lint code with built-in linter
deno test               # Run tests with built-in test runner

# Updates
deno task update        # Update Fresh to latest version
```

<p align="center">
  <img src="https://github.com/dunamismax/images/blob/main/citrus-press/fresh-islands-architecture.jpg" alt="Fresh Islands Architecture" width="450" />
</p>

## Key Features

**🍋 Fresh Performance:** Island architecture with zero JavaScript by
default makes pages load instantly **⚡ Deno 2 Runtime:** Built-in TypeScript,
web APIs, secure by default, npm compatibility, single binary deployment

**🔒 Security First:** Deno's permission system, secure by default runtime,
input validation with Valibot, XSS protection

**🦕 Developer Experience:** Zero configuration setup, hot reload development,
built-in toolchain, TypeScript native, web standard APIs

**🚀 Edge Deployment:** Deno Deploy integration, single binary compilation,
systemd services, Caddy reverse proxy with automatic HTTPS

## Environment Setup

**Application Configuration** (`.env`):

```bash
# Required: OpenWeatherMap API key for weather functionality
OPENWEATHERMAP_API_KEY=your_api_key_here

# Optional: Server configuration
PORT=8000
DENO_ENV=development

# Optional: Deno KV database path (auto-created if not specified)
# DENO_KV_PATH=./data/kv.db
```

## Production Deployment

**Single Binary Deployment:**

```bash
# Compile to standalone executable
deno task compile

# Deploy binary anywhere - no dependencies needed
./bin/citrus-press
```

**Docker Deployment:**

```bash
# Compile for Linux
deno task compile:docker

# Deploy with systemd service
sudo cp deployment/citrus-press.service /etc/systemd/system/
sudo systemctl enable --now citrus-press
```

**Edge Deployment:** Deploy instantly to Deno Deploy with git integration and
global edge distribution.

## Code Examples

**Island Component with Signals:**

```typescript
// islands/TodoApp.tsx - Interactive island component
import { signal } from "@preact/signals";
import { useEffect } from "preact/hooks";
import type { Todo } from "../lib/types.ts";

// Reactive state with signals
const todos = signal<Todo[]>([]);
const loading = signal(false);

export default function TodoApp({ initialTodos }: { initialTodos: Todo[] }) {
  // Initialize with server-side data
  useEffect(() => {
    todos.value = initialTodos;
  }, []);

  const addTodo = async (text: string) => {
    loading.value = true;

    const response = await fetch("/api/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text, status: "pending" }),
    });

    if (response.ok) {
      const result = await response.json();
      todos.value = [...todos.value, result.data];
    }

    loading.value = false;
  };

  // Reactive UI updates automatically with signals
  return (
    <div class="todo-app">
      {todos.value.map((todo) => (
        <div key={todo.id} class="todo-item">
          {todo.text}
        </div>
      ))}
      {loading.value && <div>Loading...</div>}
    </div>
  );
}
```

**API Routes with Valibot Validation:**

```typescript
// routes/api/todos/index.ts - Type-safe API endpoint
import { Handlers } from "fresh";
import * as v from "valibot";
import { getDatabase } from "../../../lib/db.ts";

// Valibot schema with JSR
const CreateTodoSchema = v.object({
  text: v.pipe(v.string(), v.minLength(1), v.maxLength(500)),
  priority: v.optional(v.picklist(["Low", "Medium", "High"])),
  category: v.optional(v.picklist(["Work", "Personal", "Shopping"])),
});

export const handler: Handlers = {
  async GET(req) {
    // Web standard URL parsing
    const url = new URL(req.url);
    const category = url.searchParams.get("category") || "all";

    const db = await getDatabase();
    const todos = await db.getFilteredTodos({ category });

    return Response.json({ success: true, data: todos });
  },

  async POST(req) {
    // Valibot validation with detailed error messages
    const body = await req.json();
    const result = v.safeParse(CreateTodoSchema, body);

    if (!result.success) {
      return new Response(
        JSON.stringify({
          success: false,
          errors: result.issues.map((issue) => ({
            field: issue.path?.[0],
            message: issue.message,
          })),
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        },
      );
    }

    const db = await getDatabase();
    const todo = await db.createTodo(result.output);

    return Response.json({ success: true, data: todo }, { status: 201 });
  },
};
```

**Deno KV Database Operations:**

```typescript
// lib/db.ts - Type-safe database layer
import type { CreateTodo, Todo } from "./types.ts";

export class TodoDatabase {
  constructor(private kv: Deno.Kv) {}

  async getAllTodos(): Promise<Todo[]> {
    const todos: Todo[] = [];

    // Deno KV list operation with prefix
    const entries = this.kv.list<Todo>({ prefix: ["todos"] });

    for await (const entry of entries) {
      todos.push(entry.value);
    }

    // Sort by creation date
    return todos.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }

  async createTodo(data: CreateTodo): Promise<Todo> {
    const id = crypto.randomUUID();
    const now = new Date();

    const todo: Todo = {
      id,
      ...data,
      status: "pending",
      createdAt: now,
      updatedAt: now,
    };

    // Atomic operation with Deno KV
    await this.kv.set(["todos", id], todo);
    return todo;
  }

  async updateTodo(id: string, updates: Partial<Todo>): Promise<Todo | null> {
    // Atomic read-modify-write with Deno KV
    const result = await this.kv.get<Todo>(["todos", id]);
    if (!result.value) return null;

    const updated = {
      ...result.value,
      ...updates,
      updatedAt: new Date(),
    };

    await this.kv.set(["todos", id], updated);
    return updated;
  }
}

// Global database instance
let db: TodoDatabase | null = null;

export async function getDatabase(): Promise<TodoDatabase> {
  if (!db) {
    const kv = await Deno.openKv();
    db = new TodoDatabase(kv);
  }
  return db;
}
```

**Middleware with Web Standards:**

```typescript
// routes/_middleware.ts - Request middleware
import { MiddlewareHandlerContext } from "fresh";

export async function handler(
  req: Request,
  ctx: MiddlewareHandlerContext,
) {
  // Rate limiting with in-memory store
  const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

  const ip = req.headers.get("x-forwarded-for") || "unknown";
  const now = Date.now();
  const current = rateLimitMap.get(ip);

  if (!current || now > current.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + 60000 });
  } else if (current.count >= 100) {
    return new Response("Rate limit exceeded", { status: 429 });
  } else {
    current.count++;
  }

  // Continue to next handler
  const response = await ctx.next();

  // Add security headers
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("X-XSS-Protection", "1; mode=block");

  return response;
}
```

## Applications

**📝 Todo List Application:**

- Full CRUD operations with Deno KV backend and Valibot validation
- Advanced filtering by category, priority, and completion status
- Real-time analytics dashboard with statistics and interactive charts
- Priority management with visual indicators and drag-and-drop sorting
- Category organization with color coding and smart grouping
- **🍋 Fresh Islands:** Interactive todo list with server-side rendering and
  selective hydration

**🌤️ Weather Dashboard:**

- OpenWeatherMap API integration with server-side proxy for security
- Responsive design optimized for mobile, tablet, and desktop
- Local storage for user preferences and search history
- Comprehensive weather data with beautiful visualizations
- Error handling with graceful degradation and retry mechanisms
- **🍋 Fresh Islands:** Interactive weather widgets with real-time updates and
  smooth animations

## Contributing

1. Fork the repository and create a feature branch
2. Make changes following TypeScript and Fresh conventions
3. Run `deno task check` to ensure code quality
4. Test changes in both development and production modes
5. Submit pull request with clear description and examples

**Code Style:** Uses Deno's built-in formatter and linter with strict TypeScript
configuration.

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
  <img src="https://github.com/dunamismax/images/blob/main/citrus-press/deno-fresh-citrus.jpg" alt="Deno Fresh Citrus" width="450" />
</p>
