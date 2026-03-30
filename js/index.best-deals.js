// Settings
const TRANSITION_TIME = 0.4; // 0.4s transition time
const TWO_SLIDES_BREAKPOINT = "765px";
const THREE_SLIDES_BREAKPOINT = "990px";
// --------

import { addToCart } from "./global.shopping-cart.js";

const track = document.querySelector(".best-deals__carousel-track");
const nextBtn = document.querySelector(".best-deals__carousel__button-next");
const prevBtn = document.querySelector(".best-deals__carousel__button-prev");
const uniqueItems = document.querySelectorAll(
  ".best-deals__carousel-track__item",
);
const controlDotsContainer = document.querySelector(
  ".best-deals__carousel-controls",
);
const dots = controlDotsContainer.querySelectorAll(
  ".best-deals__carousel-controls__button",
);
const addToCartButtons = document.querySelectorAll(
  ".best-deals__carousel-track__item__button",
);

let cloneIndexMap = null; // Maps indices with clones included to actual wine indicies.
let items = [...uniqueItems];
let currentIndex = 0;
let currentSlidesShown = 0;
let isAnimating = false;

makeClones();
setInitialPosition();
updateActiveDot();

function getSlidesToShow() {
  if (matchMedia(`(min-width: ${THREE_SLIDES_BREAKPOINT})`).matches) {
    currentSlidesShown = 3;
    return 3;
  }
  if (matchMedia(`(min-width: ${TWO_SLIDES_BREAKPOINT})`).matches) {
    currentSlidesShown = 2;
    return 2;
  }

  currentSlidesShown = 1;
  return 1;
}

function makeClones() {
  const slidesToShow = getSlidesToShow();

  // Remove old clones
  track.querySelectorAll(".best-deals__clone").forEach((c) => c.remove());
  items = [...uniqueItems];

  // Clone first slidesToShow slides at the end
  for (let i = 0; i < slidesToShow; i++) {
    const clone = items[i].cloneNode(true);
    clone.classList.add("best-deals__clone");
    track.appendChild(clone);
  }

  // Clone last slidesToShow slides at the start
  for (let i = items.length - 1; i >= items.length - slidesToShow; i--) {
    const clone = items[i].cloneNode(true);
    clone.classList.add("best-deals__clone");
    track.insertBefore(clone, track.firstChild);
  }

  // Recalculating items and indices after cloning
  items = [...track.querySelectorAll(".best-deals__carousel-track__item")];
  currentIndex = slidesToShow;
  cloneIndexMap = items.map((slide) => Number(slide.dataset.index));
}

function setInitialPosition() {
  const slidesToShow = getSlidesToShow();
  const itemWidth = items[0].offsetWidth;
  track.style.transition = "none";
  track.offsetHeight; // Force reflow
  track.style.transform = `translateX(-${itemWidth * slidesToShow}px)`;
}

function updateActiveDot() {
  if (!cloneIndexMap) return;
  const logicalIndex = cloneIndexMap[currentIndex];
  if (dots[logicalIndex]) {
    dots.forEach((dot) => dot.classList.remove("active"));
    dots[logicalIndex].classList.add("active");
  }
}

function updateCarousel() {
  const itemWidth = items[0].offsetWidth;
  track.style.transition = `transform ${TRANSITION_TIME}s ease`;
  track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
  updateActiveDot();
}

nextBtn.addEventListener("click", () => {
  if (isAnimating) return;

  isAnimating = true;
  currentIndex++;
  updateCarousel();
});

prevBtn.addEventListener("click", () => {
  if (isAnimating) return;

  isAnimating = true;
  currentIndex--;
  updateCarousel();
});

addToCartButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const parent = button.closest(".best-deals__carousel-track__item");
    if (!parent) return;

    const index = parent.dataset.productId; // Reads data-product-id

    addToCart(Number(index));
  });
});

track.addEventListener("transitionend", () => {
  const slidesToShow = getSlidesToShow();
  const itemWidth = items[0].offsetWidth;

  // If the end is reached - teleport to the start, no animation.
  if (currentIndex >= items.length - slidesToShow) {
    track.style.transition = "none";
    currentIndex = slidesToShow;
    track.offsetHeight; // Force reflow
    track.style.transform = `translateX(-${itemWidth * currentIndex}px)`;
  }

  // If the start is reached - teleport to the end, no animation.
  if (currentIndex === 0) {
    track.style.transition = "none";
    currentIndex = items.length - slidesToShow * 2;
    track.offsetHeight; // Force reflow
    track.style.transform = `translateX(-${itemWidth * currentIndex}px)`;
  }

  isAnimating = false;
});

window.addEventListener("resize", () => {
  // Check if layout was changed and only then recalculate clones
  if (currentSlidesShown !== getSlidesToShow()) {
    makeClones();
  }

  setInitialPosition();
});

controlDotsContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("best-deals__carousel-controls__button")) {
    const index = Number(e.target.dataset.index);
    const slidesToShow = getSlidesToShow();

    // Dont scroll if you are on a clone, that is the "same" slide
    // TODO: Better approach, find nearst correct slide (or clone of that slide)
    const currentLogicalIndex = cloneIndexMap[currentIndex];
    if (index === currentLogicalIndex) {
      return;
    }

    currentIndex = index + slidesToShow;
    updateCarousel();
  }
});
