const { buildApp } = require('../../esbuild.config.js');
const fs = require('fs');
const path = require('path');

// Copy HTML and assets
const copyAssets = () => {
  if (!fs.existsSync('dist')) {
    fs.mkdirSync('dist', { recursive: true });
  }
  
  fs.copyFileSync('src/index.html', 'dist/index.html');
  fs.copyFileSync('src/styles.css', 'dist/styles.css');
  
  if (fs.existsSync('src/assets')) {
    fs.cpSync('src/assets', 'dist/assets', { recursive: true });
  }
};

const build = async () => {
  const watch = process.argv.includes('--watch');
  copyAssets();
  await buildApp('weather', watch);
};

build().catch(console.error);