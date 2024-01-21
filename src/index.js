import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const pages = document.getElementById('pages');
const menu = document.getElementById('menu');

menu.addEventListener('click', () => {
  //   pages.classList.toggle('transition-none');
  //   pages.classList.toggle('transition-opacity');
  pages.classList.toggle('opacity-0');
  console.log('h');
});

const root = createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

console.log('n');
