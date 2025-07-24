# Deployment Configuration

This directory contains production deployment configurations for the JavaScript monorepo applications.

## Tech Stack

### Core Foundation

- **HTML**: Standard markup for web content structure
- **Vanilla JavaScript (ES Modules)**: Frontend and backend development language
- **CSS**: Styling and layout
- **Node.js**: JavaScript runtime for backend services
- **pnpm**: Fast, disk space-efficient package manager

### Backend Services

- **Fastify**: High-performance web framework
- **MongoDB**: Database with native Node.js driver
- **VineJS**: Data validation library
- **dotenv**: Environment variable management

### Build & Development

- **esbuild**: Fast bundler and minifier
- **Prettier**: Code formatting
- **ESLint**: Code linting and quality
- **pnpm scripts**: Task automation

### Production Deployment

- **systemd**: Process management for Node.js services
- **Caddy**: Web server and reverse proxy with automatic HTTPS
- **MongoDB**: Production database

## Deployment Structure

```
/opt/javascript-apps/
├── todo-list/
│   ├── server.js           # Fastify backend
│   ├── dist/               # Built frontend assets
│   ├── .env                # Environment configuration
│   └── node_modules/       # Dependencies
├── weather/
│   ├── server.js           # Fastify backend
│   ├── dist/               # Built frontend assets
│   ├── .env                # Environment configuration
│   └── node_modules/       # Dependencies
```

## systemd Services

### Todo List Application

- **Service**: `todo-list.service`
- **Port**: 3001
- **Database**: MongoDB
- **Dependencies**: mongod.service

### Weather Application

- **Service**: `weather-app.service`
- **Port**: 3000
- **External API**: OpenWeatherMap

## Caddy Configuration

The Caddyfile provides:

1. **Static Asset Serving**: CSS and JS files served directly
2. **API Reverse Proxy**: Routes `/api/*` to backend services
3. **SPA Support**: Fallback to index.html for client-side routing
4. **Automatic HTTPS**: SSL certificates managed by Caddy
5. **Security Headers**: Content security and XSS protection
6. **Compression**: Gzip encoding for better performance
7. **Logging**: Access and error logs

## Deployment Steps

### 1. Install Dependencies

```bash
# Install Node.js (using NodeSource repository)
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install pnpm
npm install -g pnpm

# Install MongoDB
sudo apt-get install -y mongodb

# Install Caddy
sudo apt install -y debian-keyring debian-archive-keyring apt-transport-https
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' | sudo gpg --dearmor -o /usr/share/keyrings/caddy-stable-archive-keyring.gpg
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt' | sudo tee /etc/apt/sources.list.d/caddy-stable.list
sudo apt update
sudo apt install caddy
```

### 2. Deploy Applications

```bash
# Create application directory
sudo mkdir -p /opt/javascript-apps

# Copy and build applications
sudo cp -r apps/todo-list /opt/javascript-apps/
sudo cp -r apps/weather /opt/javascript-apps/

# Install dependencies and build
cd /opt/javascript-apps/todo-list
sudo pnpm install --production
sudo pnpm build

cd /opt/javascript-apps/weather
sudo pnpm install --production
sudo pnpm build

# Set correct permissions
sudo chown -R www-data:www-data /opt/javascript-apps
```

### 3. Configure Environment

```bash
# Copy environment files
sudo cp apps/todo-list/.env.example /opt/javascript-apps/todo-list/.env
sudo cp apps/weather/.env.example /opt/javascript-apps/weather/.env

# Edit configuration files
sudo nano /opt/javascript-apps/todo-list/.env
sudo nano /opt/javascript-apps/weather/.env
```

### 4. Install systemd Services

```bash
# Copy service files
sudo cp deployment/systemd/*.service /etc/systemd/system/

# Reload systemd and enable services
sudo systemctl daemon-reload
sudo systemctl enable todo-list.service
sudo systemctl enable weather-app.service

# Start services
sudo systemctl start todo-list.service
sudo systemctl start weather-app.service

# Check status
sudo systemctl status todo-list.service
sudo systemctl status weather-app.service
```

### 5. Configure Caddy

```bash
# Backup default Caddyfile
sudo mv /etc/caddy/Caddyfile /etc/caddy/Caddyfile.backup

# Copy new configuration
sudo cp deployment/caddy/Caddyfile /etc/caddy/Caddyfile

# Update domain names in Caddyfile
sudo nano /etc/caddy/Caddyfile

# Test configuration
sudo caddy validate --config /etc/caddy/Caddyfile

# Restart Caddy
sudo systemctl restart caddy
sudo systemctl enable caddy
```

## Environment Variables

### Todo List Application (.env)

```
MONGODB_URI=mongodb://localhost:27017/todos
PORT=3001
NODE_ENV=production
```

### Weather Application (.env)

```
OPENWEATHERMAP_API_KEY=your_actual_api_key
PORT=3000
NODE_ENV=production
```

## Monitoring and Logs

### Service Logs

```bash
# View service logs
sudo journalctl -u todo-list.service -f
sudo journalctl -u weather-app.service -f

# View Caddy logs
sudo journalctl -u caddy -f
tail -f /var/log/caddy/todo-app.log
tail -f /var/log/caddy/weather-app.log
```

### Health Checks

```bash
# Check service status
sudo systemctl status todo-list.service weather-app.service caddy

# Test endpoints
curl http://localhost:3001/api/todos
curl http://localhost:3000/api/weather/london
```

## Security Considerations

1. **systemd Security**: Services run with restricted permissions
2. **Environment Variables**: Sensitive data in protected .env files
3. **HTTP Headers**: Security headers configured in Caddy
4. **HTTPS**: Automatic SSL certificate management
5. **Process Isolation**: Each service runs in its own systemd unit

## Performance Optimizations

1. **Static Assets**: Served directly by Caddy
2. **Compression**: Gzip encoding enabled
3. **Asset Bundling**: esbuild minification and bundling
4. **Caching Headers**: Appropriate cache control for static assets
5. **Connection Pooling**: MongoDB native driver with connection pooling

## Backup Strategy

1. **MongoDB**: Regular database backups using mongodump
2. **Application Code**: Version controlled in Git
3. **Configuration**: Environment files backed up separately
4. **Logs**: Rotated and archived using logrotate
