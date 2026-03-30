/**
 * main.js
 * Main entry point for the Tamil Temple Heritage Website.
 * Imports and orchestrates all modular components to build the complete application.
 */

import './style.css';
import { renderNavbar } from './components/Navbar.js';
import { renderHero } from './components/Hero.js';
import { renderTemples } from './components/Temples.js';
import { renderFestivals } from './components/Festivals.js';
import { renderArchitecture } from './components/Architecture.js';
import { renderGallery } from './components/Gallery.js';
import { renderFooter } from './components/Footer.js';
import { initScrollAnimations, initParallaxEffect } from './utils/animations.js';

// PUBLIC_INTERFACE
/**
 * Initializes the Tamil Temple Heritage website.
 * Renders all sections in order and sets up scroll animations.
 * @returns {void}
 */
function initApp() {
  const app = document.querySelector('#app');
  if (!app) {
    console.error('App container #app not found');
    return;
  }

  // Clear any existing content (remove default Vite demo)
  app.innerHTML = '';

  // Render navigation bar (prepended to body)
  renderNavbar();

  // Render all page sections in order
  renderHero(app);
  renderTemples(app);
  renderFestivals(app);
  renderArchitecture(app);
  renderGallery(app);
  renderFooter(app);

  // Initialize animations after DOM is ready
  requestAnimationFrame(() => {
    initScrollAnimations();
    initParallaxEffect();
  });
}

// Start the application when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
