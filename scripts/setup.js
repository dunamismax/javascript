#!/usr/bin/env node

import { execSync } from 'child_process';
import { existsSync, writeFileSync } from 'fs';
import path from 'path';

console.log('🚀 Setting up JavaScript Development Monorepo...\n');

// Check Node.js version
const nodeVersion = process.version;
const majorVersion = parseInt(nodeVersion.slice(1).split('.')[0]);

if (majorVersion < 18) {
  console.error('❌ Node.js 18+ is required. Current version:', nodeVersion);
  process.exit(1);
}

console.log('✅ Node.js version check passed:', nodeVersion);

// Install dependencies
console.log('\n📦 Installing dependencies...');
try {
  execSync('npm install', { stdio: 'inherit' });
  console.log('✅ Dependencies installed successfully');
} catch (error) {
  console.error('❌ Failed to install dependencies:', error.message);
  process.exit(1);
}

// Create example .env files
const apps = ['weather', 'todo-list'];
apps.forEach(app => {
  const envPath = path.join('apps', app, '.env.example');
  if (!existsSync(envPath)) {
    let envContent = '';
    
    if (app === 'weather') {
      envContent = `# Weather App Configuration
NODE_ENV=development
PORT=3000
OPENWEATHERMAP_API_KEY=your_api_key_here`;
    } else if (app === 'todo-list') {
      envContent = `# Todo List App Configuration
NODE_ENV=development
PORT=3001
DATABASE_PATH=./database/todos.db`;
    }
    
    writeFileSync(envPath, envContent);
    console.log(`✅ Created ${envPath}`);
  }
});

console.log('\n🎉 Setup complete! Next steps:');
console.log('1. Copy .env.example files to .env in each app directory');
console.log('2. Configure your API keys and settings');
console.log('3. Run "npm run dev" to start development');
console.log('\nHappy coding! 🚀');