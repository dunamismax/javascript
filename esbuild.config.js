const esbuild = require('esbuild');
const path = require('path');

const createConfig = (appName, options = {}) => ({
  entryPoints: [path.join('apps', appName, 'src', 'main.js')],
  bundle: true,
  outdir: path.join('apps', appName, 'dist'),
  format: 'iife',
  platform: 'browser',
  target: 'es2020',
  sourcemap: true,
  minify: process.env.NODE_ENV === 'production',
  loader: {
    '.png': 'file',
    '.jpg': 'file',
    '.jpeg': 'file',
    '.svg': 'file',
    '.gif': 'file',
    '.css': 'css'
  },
  ...options
});

const buildApp = async (appName, watch = false) => {
  const config = createConfig(appName);
  
  if (watch) {
    const ctx = await esbuild.context(config);
    await ctx.watch();
    console.log(`Watching ${appName}...`);
    return ctx;
  } else {
    await esbuild.build(config);
    console.log(`Built ${appName} successfully`);
  }
};

module.exports = { createConfig, buildApp };