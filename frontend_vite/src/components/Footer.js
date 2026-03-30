/**
 * Footer.js
 * Footer component with Tamil quote and copyright information.
 * Includes decorative temple-themed design elements.
 */

import { siteContent } from '../data/temples.js';

// PUBLIC_INTERFACE
/**
 * Renders the footer section with decorative elements and copyright info.
 * @param {HTMLElement} container - The parent container to append the footer to.
 * @returns {void}
 */
export function renderFooter(container) {
  const footer = document.createElement('footer');
  footer.className = 'footer';
  footer.innerHTML = `
    <div class="footer__decoration">
      <span class="footer__lamp">🪔</span>
      <span class="footer__lamp">🪔</span>
      <span class="footer__lamp">🪔</span>
    </div>
    <div class="footer__content">
      <p class="footer__quote">${siteContent.footerQuote}</p>
      <div class="footer__divider"></div>
      <p class="footer__text">${siteContent.footerText}</p>
      <p class="footer__made-with">🙏 தமிழ் பாரம்பரியத்தைப் போற்றும் முயற்சி 🙏</p>
    </div>
  `;

  container.appendChild(footer);
}
