function initVarietiesAnimation() {
  const section = document.querySelector('.varieties');
  if (!section) return;

  const revealItems = section.querySelectorAll(
    '.varieties__title, .varieties__subtitle, .varieties__illustration, .varieties__description, .redwines__title, .whitewines__title, .varieties ul li'
  );

  if (!revealItems.length) return;

  if (window.innerWidth <= 768) {
    revealItems.forEach((item) => {
      item.classList.add('varieties__fade-in--visible');
    });
    return;
  }

  revealItems.forEach((item) => {
    item.classList.add('varieties__fade-in');
  });

  const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -80px 0px',
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      revealItems.forEach((item, index) => {
        window.setTimeout(() => {
          item.classList.add('varieties__fade-in--visible');
        }, index * 90);
      });

      obs.unobserve(entry.target);
    });
  }, observerOptions);

  observer.observe(section);
}

initVarietiesAnimation();