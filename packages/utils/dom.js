/**
 * DOM manipulation utilities
 */

export const $ = (selector, context = document) => {
  return context.querySelector(selector);
};

export const $$ = (selector, context = document) => {
  return Array.from(context.querySelectorAll(selector));
};

export const createElement = (tag, attributes = {}, children = []) => {
  const element = document.createElement(tag);

  Object.entries(attributes).forEach(([key, value]) => {
    if (key === 'className') {
      element.className = value;
    } else if (key.startsWith('on') && typeof value === 'function') {
      element.addEventListener(key.slice(2).toLowerCase(), value);
    } else {
      element.setAttribute(key, value);
    }
  });

  children.forEach(child => {
    if (typeof child === 'string') {
      element.appendChild(document.createTextNode(child));
    } else if (child instanceof Node) {
      element.appendChild(child);
    }
  });

  return element;
};

export const show = element => {
  if (element) element.classList.remove('hidden');
};

export const hide = element => {
  if (element) element.classList.add('hidden');
};

export const toggle = (element, className = 'hidden') => {
  if (element) element.classList.toggle(className);
};

export const addClass = (element, className) => {
  if (element) element.classList.add(className);
};

export const removeClass = (element, className) => {
  if (element) element.classList.remove(className);
};

export const hasClass = (element, className) => {
  return element ? element.classList.contains(className) : false;
};

export const setAttributes = (element, attributes) => {
  if (!element) return;

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
};

export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

export const throttle = (func, limit) => {
  let lastFunc;
  let lastRan;
  return function (...args) {
    if (!lastRan) {
      func.apply(this, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(
        () => {
          if (Date.now() - lastRan >= limit) {
            func.apply(this, args);
            lastRan = Date.now();
          }
        },
        limit - (Date.now() - lastRan)
      );
    }
  };
};

export const escapeHtml = text => {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
};

export const unescapeHtml = html => {
  const div = document.createElement('div');
  div.innerHTML = html;
  return div.textContent || div.innerText || '';
};
