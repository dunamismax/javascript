const { buildApp } = require('../../esbuild.config.js');
const fs = require('fs');
const path = require('path');

// Copy HTML and assets
const copyAssets = () => {
  if (!fs.existsSync('dist')) {
    fs.mkdirSync('dist', { recursive: true });
  }
  
  fs.copyFileSync('src/client/index.html', 'dist/index.html');
  fs.copyFileSync('src/client/styles.css', 'dist/styles.css');
  
  if (fs.existsSync('src/client/assets')) {
    fs.cpSync('src/client/assets', 'dist/assets', { recursive: true });
  }
};

const createConfig = () => ({
  entryPoints: ['src/client/main.js'],
  bundle: true,
  outdir: 'dist',
  format: 'iife',
  platform: 'browser',
  target: 'es2020',
  sourcemap: true,
  minify: process.env.NODE_ENV === 'production'
});

const build = async () => {
  const esbuild = require('esbuild');
  const watch = process.argv.includes('--watch');
  
  copyAssets();
  
  const config = createConfig();
  
  if (watch) {
    const ctx = await esbuild.context(config);
    await ctx.watch();
    console.log('Watching todo-list...');
  } else {
    await esbuild.build(config);
    console.log('Built todo-list successfully');
  }
};

build().catch(console.error);