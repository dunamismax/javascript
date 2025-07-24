import * as esbuild from 'esbuild';
import {
  readFileSync,
  writeFileSync,
  mkdirSync,
  readdirSync,
  statSync,
  copyFileSync,
} from 'fs';
import { join, dirname, extname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const isDev = process.argv.includes('--dev');
const publicDir = join(__dirname, 'public');
const distDir = join(__dirname, 'dist');

// Ensure dist directory exists
mkdirSync(distDir, { recursive: true });
mkdirSync(join(distDir, 'css'), { recursive: true });
mkdirSync(join(distDir, 'js'), { recursive: true });

// Copy and process HTML files
function processHTMLFiles() {
  const htmlFiles = ['index.html', 'about.html', 'settings.html'];

  for (const htmlFile of htmlFiles) {
    const htmlPath = join(publicDir, htmlFile);
    const distHtmlPath = join(distDir, htmlFile);

    let html = readFileSync(htmlPath, 'utf8');

    // Update asset paths to use bundled versions  
    html = html.replace(/href="\/css\/styles\.css"/, 'href="css/styles.min.css"');
    html = html.replace(/src="\/js\/main\.js"/, 'src="js/main.min.js"');
    // FlareJS is now imported as ES module, no need to replace it

    writeFileSync(distHtmlPath, html, 'utf8');
    console.log(`✓ Processed ${htmlFile}`);
  }
}

// Bundle JavaScript files
async function bundleJS() {
  const jsFiles = [
    { input: 'js/main.js', output: 'js/main.min.js' },
  ];

  for (const { input, output } of jsFiles) {
    const inputPath = join(publicDir, input);
    const outputPath = join(distDir, output);

    try {
      await esbuild.build({
        entryPoints: [inputPath],
        bundle: true,
        minify: !isDev,
        sourcemap: isDev,
        target: ['es2020'],
        format: 'esm',
        outfile: outputPath,
        logLevel: 'info',
      });
      console.log(`✓ Bundled ${input} → ${output}`);
    } catch (error) {
      console.error(`✗ Failed to bundle ${input}:`, error);
    }
  }
}

// Process CSS files
async function processCSS() {
  const cssFile = join(publicDir, 'css/styles.css');
  const outputFile = join(distDir, 'css/styles.min.css');

  try {
    await esbuild.build({
      entryPoints: [cssFile],
      bundle: true,
      minify: !isDev,
      sourcemap: isDev,
      outfile: outputFile,
      logLevel: 'info',
    });
    console.log('✓ Processed CSS styles.css → styles.min.css');
  } catch (error) {
    console.error('✗ Failed to process CSS:', error);
  }
}

// Copy other static assets
function copyStaticAssets() {
  const staticFiles = [];

  // Find any other files that aren't JS, CSS, or HTML
  function findStaticFiles(dir, baseDir = dir) {
    const files = readdirSync(dir);

    for (const file of files) {
      const filePath = join(dir, file);
      const stat = statSync(filePath);

      if (stat.isDirectory() && !['js', 'css'].includes(file)) {
        findStaticFiles(filePath, baseDir);
      } else if (stat.isFile()) {
        const ext = extname(file);
        if (!['.js', '.css', '.html'].includes(ext)) {
          const relativePath = filePath.replace(baseDir + '/', '');
          staticFiles.push(relativePath);
        }
      }
    }
  }

  findStaticFiles(publicDir);

  for (const file of staticFiles) {
    const srcPath = join(publicDir, file);
    const destPath = join(distDir, file);

    // Ensure destination directory exists
    mkdirSync(dirname(destPath), { recursive: true });

    copyFileSync(srcPath, destPath);
    console.log(`✓ Copied ${file}`);
  }
}

// Main build function
async function build() {
  console.log('🚀 Building weather app...');
  console.log(`📦 Mode: ${isDev ? 'development' : 'production'}`);

  try {
    processHTMLFiles();
    await bundleJS();
    await processCSS();
    copyStaticAssets();

    console.log('✅ Build completed successfully!');
    console.log(`📁 Output directory: ${distDir}`);
  } catch (error) {
    console.error('❌ Build failed:', error);
    process.exit(1);
  }
}

build();
