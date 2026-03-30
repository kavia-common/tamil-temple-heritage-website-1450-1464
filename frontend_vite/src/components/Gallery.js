/**
 * Gallery.js
 * Image gallery section with category filtering and lightbox viewer.
 * Displays temple photography in a responsive masonry-style grid.
 */

import { galleryImages } from '../data/temples.js';

// PUBLIC_INTERFACE
/**
 * Renders the gallery section with category filters and lightbox support.
 * @param {HTMLElement} container - The parent container to append the section to.
 * @returns {void}
 */
export function renderGallery(container) {
  // Extract unique categories
  const categories = ['அனைத்தும்', ...new Set(galleryImages.map(img => img.category))];

  const section = document.createElement('section');
  section.id = 'gallery';
  section.className = 'section gallery-section';
  section.innerHTML = `
    <div class="section__header">
      <span class="section__icon">🖼️</span>
      <h2 class="section__title">படத்தொகுப்பு</h2>
      <p class="section__subtitle">தமிழ்நாடு கோயில்களின் அழகிய காட்சிகள்</p>
      <div class="section__divider"></div>
    </div>
    <div class="gallery__filters">
      ${categories.map((cat, i) => `
        <button class="gallery__filter-btn ${i === 0 ? 'gallery__filter-btn--active' : ''}" data-category="${cat}">
          ${cat}
        </button>
      `).join('')}
    </div>
    <div class="gallery__grid" id="gallery-grid">
      ${galleryImages.map((img, index) => `
        <div class="gallery__item animate-on-scroll" data-category="${img.category}" style="animation-delay: ${index * 0.05}s">
          <img src="${img.src}" alt="${img.alt}" class="gallery__image" loading="lazy" />
          <div class="gallery__item-overlay">
            <span class="gallery__item-text">${img.alt}</span>
            <span class="gallery__item-cat">${img.category}</span>
          </div>
        </div>
      `).join('')}
    </div>
    <!-- Lightbox -->
    <div class="lightbox" id="lightbox" role="dialog" aria-hidden="true">
      <div class="lightbox__backdrop" id="lightbox-backdrop"></div>
      <button class="lightbox__close" id="lightbox-close" aria-label="மூடு">✕</button>
      <button class="lightbox__nav lightbox__nav--prev" id="lightbox-prev" aria-label="முந்தைய">❮</button>
      <button class="lightbox__nav lightbox__nav--next" id="lightbox-next" aria-label="அடுத்த">❯</button>
      <div class="lightbox__content">
        <img src="" alt="" class="lightbox__image" id="lightbox-image" />
        <p class="lightbox__caption" id="lightbox-caption"></p>
      </div>
    </div>
  `;

  container.appendChild(section);
  initGalleryInteractions();
}

/**
 * Initializes gallery filter buttons and lightbox image viewer interactions.
 */
function initGalleryInteractions() {
  const filterBtns = document.querySelectorAll('.gallery__filter-btn');
  const items = document.querySelectorAll('.gallery__item');
  const lightbox = document.getElementById('lightbox');
  const lightboxImage = document.getElementById('lightbox-image');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxClose = document.getElementById('lightbox-close');
  const lightboxBackdrop = document.getElementById('lightbox-backdrop');
  const lightboxPrev = document.getElementById('lightbox-prev');
  const lightboxNext = document.getElementById('lightbox-next');

  let currentIndex = 0;

  // Filter functionality
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.getAttribute('data-category');

      // Update active button
      filterBtns.forEach(b => b.classList.remove('gallery__filter-btn--active'));
      btn.classList.add('gallery__filter-btn--active');

      // Filter items
      items.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        if (category === 'அனைத்தும்' || itemCategory === category) {
          item.style.display = '';
          item.classList.add('gallery__item--visible');
        } else {
          item.style.display = 'none';
          item.classList.remove('gallery__item--visible');
        }
      });
    });
  });

  // Lightbox open
  items.forEach((item, index) => {
    item.addEventListener('click', () => {
      const img = item.querySelector('.gallery__image');
      if (img && lightbox && lightboxImage && lightboxCaption) {
        currentIndex = index;
        lightboxImage.src = img.src;
        lightboxImage.alt = img.alt;
        lightboxCaption.textContent = img.alt;
        lightbox.classList.add('lightbox--open');
        lightbox.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  // Lightbox close
  const closeLightbox = () => {
    if (lightbox) {
      lightbox.classList.remove('lightbox--open');
      lightbox.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  };

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxBackdrop) lightboxBackdrop.addEventListener('click', closeLightbox);

  // Lightbox navigation
  const showImage = (index) => {
    const allItems = document.querySelectorAll('.gallery__item:not([style*="display: none"])');
    if (allItems.length === 0) return;

    // Wrap around
    if (index < 0) index = allItems.length - 1;
    if (index >= allItems.length) index = 0;
    currentIndex = index;

    const img = allItems[index]?.querySelector('.gallery__image');
    if (img && lightboxImage && lightboxCaption) {
      lightboxImage.src = img.src;
      lightboxImage.alt = img.alt;
      lightboxCaption.textContent = img.alt;
    }
  };

  if (lightboxPrev) lightboxPrev.addEventListener('click', () => showImage(currentIndex - 1));
  if (lightboxNext) lightboxNext.addEventListener('click', () => showImage(currentIndex + 1));

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!lightbox?.classList.contains('lightbox--open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') showImage(currentIndex - 1);
    if (e.key === 'ArrowRight') showImage(currentIndex + 1);
  });
}
