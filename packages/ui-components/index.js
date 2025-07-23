// UI Components Package Entry Point
// Exports CSS custom properties and utility classes for shared design system

export { default as resetStyles } from './styles/reset.css';
export { default as variableStyles } from './styles/variables.css';

// Re-export all CSS for easy importing
export const styles = {
  reset: './styles/reset.css',
  variables: './styles/variables.css'
};

// Utility function to load all styles
export function loadStyles() {
  const resetLink = document.createElement('link');
  resetLink.rel = 'stylesheet';
  resetLink.href = '/node_modules/@dunamismax/ui-components/styles/reset.css';
  document.head.appendChild(resetLink);

  const variablesLink = document.createElement('link');
  variablesLink.rel = 'stylesheet';
  variablesLink.href = '/node_modules/@dunamismax/ui-components/styles/variables.css';
  document.head.appendChild(variablesLink);
}