/**
 * Navbar.js
 * Responsive navigation bar component with mobile hamburger menu.
 * Features a temple-themed design with Tamil text navigation items.
 */

import { navItems } from '../data/temples.js';

// PUBLIC_INTERFACE
/**
 * Creates and renders the navigation bar with mobile hamburger menu support.
 * Handles scroll-based styling and smooth section navigation.
 * @returns {void}
 */
export function renderNavbar() {
  const nav = document.createElement('nav');
  nav.id = 'main-nav';
  nav.className = 'navbar';
  nav.innerHTML = `
    <div class="navbar__container">
      <a href="#home" class="navbar__logo" aria-label="முகப்பு">
        <span class="navbar__logo-icon">🕉️</span>
        <span class="navbar__logo-text">கோயில் பாரம்பரியம்</span>
      </a>
      <button class="navbar__hamburger" id="hamburger-btn" aria-label="மெனு திறக்க" aria-expanded="false">
        <span class="navbar__hamburger-line"></span>
        <span class="navbar__hamburger-line"></span>
        <span class="navbar__hamburger-line"></span>
      </button>
      <ul class="navbar__menu" id="nav-menu" role="menubar">
        ${navItems.map(item => `
          <li class="navbar__menu-item" role="none">
            <a href="#${item.id}" class="navbar__link" role="menuitem" data-section="${item.id}">
              <span class="navbar__link-icon">${item.icon}</span>
              <span class="navbar__link-text">${item.label}</span>
            </a>
          </li>
        `).join('')}
      </ul>
    </div>
  `;

  document.body.prepend(nav);
  initNavbarInteractions();
}

/**
 * Initializes navbar interactions: hamburger toggle, scroll behavior, and active link tracking.
 */
function initNavbarInteractions() {
  const hamburger = document.getElementById('hamburger-btn');
  const menu = document.getElementById('nav-menu');
  const navbar = document.getElementById('main-nav');
  const links = document.querySelectorAll('.navbar__link');

  // Toggle mobile menu
  if (hamburger && menu) {
    hamburger.addEventListener('click', () => {
      const isOpen = menu.classList.toggle('navbar__menu--open');
      hamburger.classList.toggle('navbar__hamburger--active');
      hamburger.setAttribute('aria-expanded', isOpen.toString());
    });
  }

  // Close menu on link click (mobile)
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('data-section');
      const target = document.getElementById(targetId);

      if (menu) {
        menu.classList.remove('navbar__menu--open');
      }
      if (hamburger) {
        hamburger.classList.remove('navbar__hamburger--active');
        hamburger.setAttribute('aria-expanded', 'false');
      }

      if (target) {
        const navHeight = navbar ? navbar.offsetHeight : 0;
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - navHeight;
        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
      }
    });
  });

  // Scroll-based navbar styling
  window.addEventListener('scroll', () => {
    if (navbar) {
      if (window.scrollY > 50) {
        navbar.classList.add('navbar--scrolled');
      } else {
        navbar.classList.remove('navbar--scrolled');
      }
    }
    updateActiveLink();
  });
}

/**
 * Updates the active navigation link based on the current scroll position.
 */
function updateActiveLink() {
  const sections = document.querySelectorAll('section[id]');
  const links = document.querySelectorAll('.navbar__link');
  const navbar = document.getElementById('main-nav');
  const navHeight = navbar ? navbar.offsetHeight : 0;

  let currentSection = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - navHeight - 100;
    if (window.scrollY >= sectionTop) {
      currentSection = section.getAttribute('id');
    }
  });

  links.forEach(link => {
    link.classList.remove('navbar__link--active');
    if (link.getAttribute('data-section') === currentSection) {
      link.classList.add('navbar__link--active');
    }
  });
}
