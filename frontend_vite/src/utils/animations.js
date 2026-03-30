/**
 * animations.js
 * Scroll-based animation utilities using Intersection Observer.
 * Provides smooth reveal animations as elements enter the viewport.
 */

// PUBLIC_INTERFACE
/**
 * Initializes the Intersection Observer for scroll-triggered animations.
 * Watches elements with the 'animate-on-scroll' class and triggers
 * the 'animate-on-scroll--visible' class when they enter the viewport.
 * @returns {void}
 */
export function initScrollAnimations() {
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -50px 0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-on-scroll--visible');
        // Optional: unobserve after animation to improve performance
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all animatable elements
  const animateElements = document.querySelectorAll('.animate-on-scroll');
  animateElements.forEach(el => observer.observe(el));

  // Also observe hero stats and other fade-up elements
  const fadeUpElements = document.querySelectorAll('.animate-fade-up');
  fadeUpElements.forEach(el => observer.observe(el));
}

// PUBLIC_INTERFACE
/**
 * Adds a parallax scroll effect to the hero section background.
 * @returns {void}
 */
export function initParallaxEffect() {
  const hero = document.querySelector('.hero');
  if (!hero) return;

  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const rate = scrolled * 0.3;
    hero.style.backgroundPositionY = `${rate}px`;
  }, { passive: true });
}
