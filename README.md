# JavaScript Development Monorepo

A modern JavaScript development environment featuring vanilla JavaScript, Node.js, Express.js, and EJS. This monorepo provides a cohesive technology stack for building high-performance, maintainable web applications with minimal abstractions and maximum control.

## Tech Stack

**Core Foundation:**
- **Node.js (v18+)** - JavaScript runtime with event-driven, non-blocking I/O
- **Vanilla JavaScript (ES Modules)** - Modern JavaScript features without framework overhead
- **npm** - Package management and dependency handling

**Application Layer:**
- **Express.js** - Minimal web application framework for Node.js
- **EJS** - Server-side templating for dynamic HTML generation
- **Plain CSS** - Well-structured styling with BEM methodology
- **Vanilla DOM Manipulation** - Direct browser API usage for interactivity

**Data & Configuration:**
- **File System Content** - Local content management with Node.js fs module
- **fetch API** - Standard web API for network requests
- **Environment Variables** - Secure configuration via process.env

**Quality & Deployment:**
- **npm Scripts** - Automated development lifecycle management
- **Prettier** - Opinionated code formatting
- **ESLint** - Static analysis and code quality enforcement

## Project Structure

```
/
├── .github/workflows/     # GitHub Actions CI/CD
├── apps/                  # Deployable applications
├── packages/              # Shared code libraries
├── scripts/               # Automation and operational scripts
├── .eslintrc.json        # ESLint configuration
├── .prettierrc.json      # Prettier configuration
├── package.json          # Root workspace configuration
└── README.md
```

## Quick Start

```bash
# Clone the repository
git clone https://github.com/dunamismax/javascript.git
cd javascript

# Install dependencies
npm install

# Start development environment
npm run dev
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
     "name": "@your-namespace/your-app-name",
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

## Development Commands

**Global Commands:**
```bash
npm run dev          # Start all applications in development mode
npm run lint         # Run ESLint across all workspaces
npm run format       # Format code with Prettier
npm test             # Run tests across all workspaces
```

**Application-Specific Commands:**
```bash
npm run [app-name]:dev    # Start specific app in development
npm run [app-name]:start  # Start specific app in production
```

## Shared Libraries

### Creating Shared Packages

1. **Create Package Directory**
   ```bash
   mkdir packages/your-package-name
   cd packages/your-package-name
   npm init -y
   ```

2. **Configure as Internal Package**
   ```json
   {
     "name": "@your-namespace/your-package-name",
     "main": "index.js",
     "type": "module"
   }
   ```

3. **Use in Applications**
   ```json
   {
     "dependencies": {
       "@your-namespace/your-package-name": "*"
     }
   }
   ```

### Available Shared Utilities

- **UI Components** (`packages/ui-components/`) - Reusable HTML/CSS/JS components
- **Utils** (`packages/utils/`) - Common utility functions and helpers
- **Config** (`packages/config/`) - Shared configurations for tools and services

## Code Quality

**ESLint Configuration** (`.eslintrc.json`)
- Enforces modern JavaScript standards
- Prevents common bugs and anti-patterns
- Maintains consistent code style

**Prettier Configuration** (`.prettierrc.json`)
- Automatic code formatting
- Consistent style across all projects
- Integration with development workflow

## Environment Configuration

Create `.env` files in individual applications:

```bash
# apps/your-app/env
NODE_ENV=development
PORT=3000
DATABASE_URL=sqlite:./database.db
API_KEY=your_api_key_here
```

Load with dotenv in your application:
```javascript
import dotenv from 'dotenv';
dotenv.config();

const port = process.env.PORT || 3000;
```

## Production Deployment

**Build Process:**
```bash
npm run build        # Build all applications for production
```

**Deployment Stack:**
- **Linux Server** - Ubuntu/Debian hosting environment
- **systemd** - Process management and service monitoring
- **Caddy** - Reverse proxy with automatic HTTPS

**Example systemd Service:**
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

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run quality checks: `npm run lint && npm run format`
5. Submit a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**JavaScript Development Monorepo** - A professional environment for building modern web applications with vanilla JavaScript, Node.js, and Express.js.