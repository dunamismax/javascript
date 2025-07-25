# Deno Fresh Application

A modern full-stack application built with **Deno 2** and **Fresh 1.7.3**,
featuring a Todo List and Weather Dashboard with TypeScript, Tailwind CSS, and
Deno KV.

## 🚀 Features

### 📝 Todo List Application

- **CRUD Operations** with Deno KV for persistent storage
- **Task Management** with priorities (High, Medium, Low) and categories
- **Advanced Filtering** by category, priority, and status
- **Real-time Analytics** dashboard with completion statistics
- **Responsive Design** with Tailwind CSS

### 🌤️ Weather Dashboard

- **Real-time Weather Data** from OpenWeatherMap API
- **US ZIP Code Validation** with Zod schema validation
- **Search History** stored in localStorage
- **Rate Limiting** and comprehensive error handling
- **Detailed Weather Metrics** including humidity, wind, pressure, and
  visibility

## 🛠️ Tech Stack

- **[Deno 2](https://deno.land/)** - Secure, modern runtime for JavaScript and
  TypeScript
- **[Fresh 1.7.3](https://fresh.deno.dev/)** - Next-generation web framework
  with island architecture
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe development
  throughout
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Deno KV](https://deno.com/kv)** - Built-in key-value database with zero
  setup
- **[Zod](https://zod.dev/)** - TypeScript-first schema validation
- **[Preact](https://preactjs.com/)** - Fast 3kB alternative to React

## 🏃‍♂️ Quick Start

### Prerequisites

- [Deno 2.0+](https://deno.land/manual/getting_started/installation)
- [OpenWeatherMap API Key](https://openweathermap.org/api) (free)

### Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/dunamismax/javascript.git
   cd javascript
   ```

2. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env and add your OpenWeatherMap API key
   ```

3. **Start the development server**
   ```bash
   deno task start
   ```

4. **Open your browser**
   - Main page: http://localhost:8000
   - Todo List: http://localhost:8000/todos
   - Weather App: http://localhost:8000/weather

## 📖 Available Commands

```bash
# Development
deno task start          # Start development server with hot reload
deno task build          # Build for production
deno task preview        # Preview production build

# Code Quality
deno task check          # Run formatter, linter, and type checking
deno fmt                 # Format code
deno lint                # Lint code
deno check **/*.ts       # Type check

# Fresh specific
deno task manifest       # Update route manifest
deno task update         # Update Fresh to latest version
```

## 🏗️ Project Structure

```
javascript/
├── lib/                    # Shared utilities and types
│   ├── types.ts           # TypeScript interfaces and Zod schemas
│   ├── db.ts              # Deno KV database layer
│   └── utils.ts           # Utility functions and helpers
├── routes/                # Fresh file-based routing
│   ├── index.tsx          # Home page
│   ├── todos/             # Todo list routes
│   │   └── index.tsx      # Todo list page
│   ├── weather/           # Weather app routes
│   │   └── index.tsx      # Weather app page
│   └── api/               # API endpoints
│       ├── todos/         # Todo CRUD operations
│       └── weather.ts     # Weather data fetching
├── islands/               # Interactive client-side components
│   ├── TodoApp.tsx        # Todo list application
│   └── WeatherApp.tsx     # Weather dashboard
├── components/            # Reusable server-side components
├── static/               # Static assets
├── deno.json             # Deno configuration and dependencies
├── fresh.config.ts       # Fresh framework configuration
├── tailwind.config.ts    # Tailwind CSS configuration
└── .env.example          # Environment variables template
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file with the following variables:

```bash
# Required: OpenWeatherMap API key
OPENWEATHERMAP_API_KEY=your_api_key_here

# Optional: Server port (default: 8000)
PORT=8000

# Optional: Environment mode
DENO_ENV=development
```

### Deno KV Database

The todo list uses Deno KV for persistent storage. No additional setup
required - the database file is created automatically when you first run the
application.

## 🌐 API Endpoints

### Todo List API

- `GET /api/todos` - Get all todos (with filtering)
- `POST /api/todos` - Create a new todo
- `GET /api/todos/:id` - Get a specific todo
- `PUT /api/todos/:id` - Update a todo
- `DELETE /api/todos/:id` - Delete a todo
- `GET /api/todos/analytics` - Get todo analytics

### Weather API

- `GET /api/weather?zipCode=12345` - Get weather data for a ZIP code

## 🔒 Security Features

- **Rate Limiting** on all API endpoints
- **Input Validation** with Zod schemas
- **XSS Protection** with HTML escaping
- **Environment Variable Validation** with runtime checks
- **Error Handling** with sanitized error messages

## 🚀 Deployment

### Deno Deploy (Recommended)

1. **Push to GitHub** (if not already done)
2. **Connect to Deno Deploy**
   - Go to [dash.deno.com](https://dash.deno.com)
   - Create new project from GitHub repository
   - Set environment variables in dashboard
3. **Deploy automatically** on every push to main branch

### Self-Hosting

1. **Build the application**
   ```bash
   deno task build
   ```

2. **Run in production mode**
   ```bash
   deno task preview
   ```

3. **Use a process manager** (recommended)
   ```bash
   # Example with systemd or PM2
   # Configure reverse proxy (Nginx/Caddy) for HTTPS
   ```

## 🧪 Development

### Adding New Features

1. **Create route files** in `routes/` directory
2. **Add API endpoints** in `routes/api/` directory
3. **Create interactive components** as islands in `islands/`
4. **Add types** to `lib/types.ts`
5. **Update database schema** if needed in `lib/db.ts`

### Code Style

- **TypeScript everywhere** - No JavaScript files
- **Functional components** with Preact
- **Tailwind CSS** for styling
- **Zod schemas** for validation
- **Error handling** at all levels

## 📝 Migration Notes

This application was converted from a Node.js + Vanilla JavaScript monorepo to
Deno 2 + Fresh + TypeScript:

### What Changed

- ✅ **Runtime**: Node.js → Deno 2
- ✅ **Framework**: Custom router → Fresh 1.7.3
- ✅ **Language**: JavaScript → TypeScript
- ✅ **Database**: MongoDB → Deno KV
- ✅ **Validation**: VineJS → Zod
- ✅ **Bundling**: esbuild → Fresh built-in
- ✅ **CSS**: Custom CSS → Tailwind CSS
- ✅ **Package Manager**: pnpm → Deno native

### What's Improved

- 🚀 **Zero configuration** setup
- 🔒 **Built-in security** features
- ⚡ **Island architecture** for optimal performance
- 🎯 **Type safety** throughout the application
- 🌐 **Web standard APIs** everywhere
- 📦 **Single executable** deployment option

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE)
file for details.

## 👨‍💻 Original Author

- **dunamismax** - [GitHub](https://github.com/dunamismax) |
  [Email](mailto:dunamismax@tutamail.com)
- Enhanced and converted to modern Deno 2 + Fresh tech stack

---

<p align="center">
  <strong>Built with Deno 2 🦕 Fresh 1.7.3 🍋 TypeScript ⚡</strong><br>
  <sub>Modern • Fast • Secure • Type-Safe</sub>
</p>
