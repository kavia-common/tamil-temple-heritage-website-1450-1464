/**
 * Hero.js
 * Hero section component with animated Tamil temple imagery and stats.
 * Features a full-screen hero with overlay, decorative mandala, and statistics counter.
 */

import { siteContent } from '../data/temples.js';

// PUBLIC_INTERFACE
/**
 * Renders the hero section with background image, overlay text, and animated statistics.
 * @param {HTMLElement} container - The parent container to append the hero section to.
 * @returns {void}
 */
export function renderHero(container) {
  const section = document.createElement('section');
  section.id = 'home';
  section.className = 'hero';
  section.innerHTML = `
    <div class="hero__overlay"></div>
    <div class="hero__mandala"></div>
    <div class="hero__content">
      <div class="hero__lamp hero__lamp--left">🪔</div>
      <div class="hero__lamp hero__lamp--right">🪔</div>
      <h1 class="hero__title animate-fade-up">${siteContent.title}</h1>
      <p class="hero__subtitle animate-fade-up delay-1">${siteContent.subtitle}</p>
      <p class="hero__tagline animate-fade-up delay-2">${siteContent.heroTagline}</p>
      <p class="hero__description animate-fade-up delay-3">${siteContent.heroDescription}</p>
      <a href="#temples" class="hero__cta animate-fade-up delay-4">
        கோயில்களை காணுங்கள் 🛕
      </a>
    </div>
    <div class="hero__stats">
      ${siteContent.stats.map(stat => `
        <div class="hero__stat animate-fade-up">
          <span class="hero__stat-value" data-target="${stat.value}">${stat.value}</span>
          <span class="hero__stat-label">${stat.label}</span>
        </div>
      `).join('')}
    </div>
    <div class="hero__scroll-indicator">
      <span class="hero__scroll-arrow">⬇</span>
    </div>
  `;

  container.appendChild(section);

  // CTA smooth scroll
  const cta = section.querySelector('.hero__cta');
  if (cta) {
    cta.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.getElementById('temples');
      if (target) {
        const navHeight = document.getElementById('main-nav')?.offsetHeight || 0;
        window.scrollTo({ top: target.offsetTop - navHeight, behavior: 'smooth' });
      }
    });
  }
}
