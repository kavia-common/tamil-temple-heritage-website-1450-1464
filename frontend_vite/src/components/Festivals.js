/**
 * Festivals.js
 * Festival listing section showcasing major Tamil temple festivals.
 * Displays festivals in an interactive card format with rich details.
 */

import { festivals } from '../data/temples.js';

// PUBLIC_INTERFACE
/**
 * Renders the festivals section with decorative festival cards.
 * @param {HTMLElement} container - The parent container to append the section to.
 * @returns {void}
 */
export function renderFestivals(container) {
  const section = document.createElement('section');
  section.id = 'festivals';
  section.className = 'section festivals-section';
  section.innerHTML = `
    <div class="section__header">
      <span class="section__icon">🏮</span>
      <h2 class="section__title">திருவிழாக்கள்</h2>
      <p class="section__subtitle">தமிழ்நாட்டின் பிரசித்தமான கோயில் திருவிழாக்கள்</p>
      <div class="section__divider"></div>
    </div>
    <div class="festivals__grid">
      ${festivals.map((festival, index) => `
        <div class="festival-card animate-on-scroll" style="animation-delay: ${index * 0.1}s">
          <div class="festival-card__icon">${festival.icon}</div>
          <div class="festival-card__content">
            <h3 class="festival-card__name">${festival.name}</h3>
            <p class="festival-card__name-en">${festival.nameEn}</p>
            <div class="festival-card__meta">
              <span class="festival-card__month">📅 ${festival.month}</span>
              <span class="festival-card__duration">⏰ ${festival.duration}</span>
            </div>
            <p class="festival-card__temple">🛕 ${festival.temple}</p>
            <p class="festival-card__desc">${festival.description}</p>
          </div>
        </div>
      `).join('')}
    </div>
  `;

  container.appendChild(section);
}
