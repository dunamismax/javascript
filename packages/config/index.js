// Shared Configuration Package
// Exports common development tool configurations

export { default as eslintConfig } from './eslint.config.js';
export { default as prettierConfig } from './prettier.config.js';
export { default as nodeConfig } from './node.config.js';

// Re-export configs for easy access
export const configs = {
  eslint: './eslint.config.js',
  prettier: './prettier.config.js',
  node: './node.config.js'
};