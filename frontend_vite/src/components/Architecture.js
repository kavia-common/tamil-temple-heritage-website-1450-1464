/**
 * Architecture.js
 * Temple architecture elements section explaining key structural components.
 * Educational section with interactive accordion-style details.
 */

import { architectureElements } from '../data/temples.js';

// PUBLIC_INTERFACE
/**
 * Renders the architecture section with expandable architecture element cards.
 * @param {HTMLElement} container - The parent container to append the section to.
 * @returns {void}
 */
export function renderArchitecture(container) {
  const section = document.createElement('section');
  section.id = 'architecture';
  section.className = 'section architecture-section';
  section.innerHTML = `
    <div class="section__header">
      <span class="section__icon">🏛️</span>
      <h2 class="section__title">கோயில் கட்டடக்கலை</h2>
      <p class="section__subtitle">திராவிட கோயில் கட்டடக்கலையின் முக்கிய அம்சங்கள்</p>
      <div class="section__divider"></div>
    </div>
    <div class="architecture__grid">
      ${architectureElements.map((element, index) => `
        <div class="arch-card animate-on-scroll" data-arch-id="${element.id}" style="animation-delay: ${index * 0.1}s">
          <div class="arch-card__header" tabindex="0" role="button" aria-expanded="false">
            <div class="arch-card__icon">${element.icon}</div>
            <div class="arch-card__titles">
              <h3 class="arch-card__name">${element.name}</h3>
              <p class="arch-card__name-en">${element.nameEn}</p>
            </div>
            <span class="arch-card__toggle">▼</span>
          </div>
          <div class="arch-card__body">
            <p class="arch-card__desc">${element.description}</p>
            <div class="arch-card__details">
              <h4>📋 விரிவான தகவல்</h4>
              <p>${element.details}</p>
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  `;

  container.appendChild(section);
  initArchitectureInteractions();
}

/**
 * Initializes accordion-style expand/collapse for architecture cards.
 */
function initArchitectureInteractions() {
  const headers = document.querySelectorAll('.arch-card__header');

  headers.forEach(header => {
    const toggle = () => {
      const card = header.closest('.arch-card');
      const toggleIcon = header.querySelector('.arch-card__toggle');
      const isExpanded = card?.classList.contains('arch-card--expanded');

      // Close all
      document.querySelectorAll('.arch-card--expanded').forEach(openCard => {
        openCard.classList.remove('arch-card--expanded');
        const openToggle = openCard.querySelector('.arch-card__toggle');
        const openHeader = openCard.querySelector('.arch-card__header');
        if (openToggle) openToggle.textContent = '▼';
        if (openHeader) openHeader.setAttribute('aria-expanded', 'false');
      });

      // Open clicked (if it was closed)
      if (!isExpanded && card) {
        card.classList.add('arch-card--expanded');
        if (toggleIcon) toggleIcon.textContent = '▲';
        header.setAttribute('aria-expanded', 'true');
      }
    };

    header.addEventListener('click', toggle);
    header.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggle();
      }
    });
  });
}
