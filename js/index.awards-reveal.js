/**
 * Initializes the scroll-reveal animation for award items.
 * Uses IntersectionObserver for better performance compared to scroll listeners.
 */
export function initAwardsReveal() {
  const awardItems = document.querySelectorAll('.award-item');

  const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('award-item--visible');
        // Stop observing once the element is visible to save resources
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  awardItems.forEach((item) => {
    observer.observe(item);
  });
}

initAwardsReveal();
