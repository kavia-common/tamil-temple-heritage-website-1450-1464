/**
 * Temples.js
 * Temple listing section with interactive cards and detail modal.
 * Displays featured Tamil temples in a responsive card grid layout.
 */

import { temples } from '../data/temples.js';

// PUBLIC_INTERFACE
/**
 * Renders the temples section with a grid of temple cards.
 * Each card shows temple info and opens a detail modal on click.
 * @param {HTMLElement} container - The parent container to append the section to.
 * @returns {void}
 */
export function renderTemples(container) {
  const section = document.createElement('section');
  section.id = 'temples';
  section.className = 'section temples-section';
  section.innerHTML = `
    <div class="section__header">
      <span class="section__icon">🛕</span>
      <h2 class="section__title">புகழ்பெற்ற கோயில்கள்</h2>
      <p class="section__subtitle">தமிழ்நாட்டின் மிகச்சிறந்த புராதன கோயில்கள்</p>
      <div class="section__divider"></div>
    </div>
    <div class="temples__grid">
      ${temples.map(temple => `
        <article class="temple-card" data-temple-id="${temple.id}" tabindex="0" role="button" aria-label="${temple.name} பற்றி மேலும் அறிய">
          <div class="temple-card__image-wrapper">
            <img src="${temple.image}" alt="${temple.name}" class="temple-card__image" loading="lazy" />
            <div class="temple-card__badge">${temple.location}</div>
          </div>
          <div class="temple-card__content">
            <h3 class="temple-card__name">${temple.name}</h3>
            <p class="temple-card__name-en">${temple.nameEn}</p>
            <p class="temple-card__deity">🙏 ${temple.deity}</p>
            <p class="temple-card__desc">${temple.description.substring(0, 100)}...</p>
            <div class="temple-card__footer">
              <span class="temple-card__year">📅 ${temple.yearBuilt}</span>
              <span class="temple-card__more">மேலும் →</span>
            </div>
          </div>
        </article>
      `).join('')}
    </div>
    <!-- Temple Detail Modal -->
    <div class="temple-modal" id="temple-modal" role="dialog" aria-modal="true" aria-hidden="true">
      <div class="temple-modal__backdrop" id="modal-backdrop"></div>
      <div class="temple-modal__content" id="modal-content">
        <button class="temple-modal__close" id="modal-close" aria-label="மூடு">✕</button>
        <div id="modal-body"></div>
      </div>
    </div>
  `;

  container.appendChild(section);
  initTempleInteractions();
}

/**
 * Initializes temple card click interactions and modal functionality.
 */
function initTempleInteractions() {
  const cards = document.querySelectorAll('.temple-card');
  const modal = document.getElementById('temple-modal');
  const modalBody = document.getElementById('modal-body');
  const modalClose = document.getElementById('modal-close');
  const modalBackdrop = document.getElementById('modal-backdrop');

  cards.forEach(card => {
    const openModal = () => {
      const templeId = parseInt(card.getAttribute('data-temple-id'), 10);
      const temple = temples.find(t => t.id === templeId);
      if (temple && modalBody && modal) {
        modalBody.innerHTML = `
          <div class="temple-detail">
            <img src="${temple.image}" alt="${temple.name}" class="temple-detail__image" loading="lazy" />
            <h2 class="temple-detail__name">${temple.name}</h2>
            <p class="temple-detail__name-en">${temple.nameEn}</p>
            <div class="temple-detail__meta">
              <span>📍 ${temple.location}</span>
              <span>🙏 ${temple.deity}</span>
              <span>📅 ${temple.yearBuilt}</span>
            </div>
            <div class="temple-detail__section">
              <h3>📜 விளக்கம்</h3>
              <p>${temple.description}</p>
            </div>
            <div class="temple-detail__section">
              <h3>📖 வரலாறு</h3>
              <p>${temple.history}</p>
            </div>
            <div class="temple-detail__section">
              <h3>🏛️ கட்டடக்கலை</h3>
              <p>${temple.architecture}</p>
            </div>
            <div class="temple-detail__section">
              <h3>🏮 முக்கிய திருவிழா</h3>
              <p>${temple.festival}</p>
            </div>
          </div>
        `;
        modal.classList.add('temple-modal--open');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
      }
    };

    card.addEventListener('click', openModal);
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openModal();
      }
    });
  });

  // Close modal
  const closeModal = () => {
    if (modal) {
      modal.classList.remove('temple-modal--open');
      modal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  };

  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
}
