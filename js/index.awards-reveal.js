export function initAwardsReveal() {
  const awardItems = document.querySelectorAll('.award-item');

  // 1. Логіка появи при скролі (вже є)
  const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('award-item--visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // 2. Логіка кліку (Акордеон)
  awardItems.forEach((item) => {
    observer.observe(item);

    item.addEventListener('click', () => {
      // Якщо хочемо, щоб одночасно була відкрита лише одна нагорода:
      const activeItem = document.querySelector('.award-item--active');
      if (activeItem && activeItem !== item) {
        activeItem.classList.remove('award-item--active');
      }

      // Перемикаємо клас для поточного елемента
      item.classList.toggle('award-item--active');
    });
  });
}

initAwardsReveal();
