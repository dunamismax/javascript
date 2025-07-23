// Shared Node.js Configuration
export default {
  // Common Node.js settings
  engines: {
    node: '>=18.0.0',
    npm: '>=9.0.0'
  },
  
  // Standard package.json fields
  type: 'module',
  
  // Common scripts
  scripts: {
    dev: 'nodemon server.js',
    start: 'node server.js',
    lint: 'eslint . --ext .js,.mjs',
    'lint:fix': 'eslint . --ext .js,.mjs --fix',
    format: 'prettier --write .',
    'format:check': 'prettier --check .'
  },
  
  // Common dev dependencies
  devDependencies: {
    nodemon: '^3.0.3',
    eslint: '^8.57.0',
    prettier: '^3.2.5'
  }
};