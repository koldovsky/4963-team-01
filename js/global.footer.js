const lightbox = document.querySelector('.footer__lightbox');

const image = lightbox.querySelector('.footer__lightbox-image--current');
const nextImage = lightbox.querySelector('.footer__lightbox-image--next');
const prevBtn = lightbox.querySelector('.footer__lightbox-nav--prev');
const nextBtn = lightbox.querySelector('.footer__lightbox-nav--next');
let thumbnails = [];
let currentIndex = -1;
let isAnimating = false;

function updateThumbnails() {
    thumbnails = Array.from(document.querySelectorAll('.footer__instagram-item'));
}

function setImage(index, direction = 'none') {
    if (index < 0 || index >= thumbnails.length || isAnimating) return;
    isAnimating = true;
    currentIndex = index;
    const thumb = thumbnails[index];
    const newSrc = thumb.src;
    const newAlt = thumb.alt || '';

    if (direction === 'next') {
        nextImage.style.transition = 'none';
        nextImage.src = newSrc;
        nextImage.alt = newAlt;
        nextImage.style.transform = 'translate(-50%, -50%) translateX(100%)';
        nextImage.style.opacity = '1';
        setTimeout(() => {
            nextImage.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            image.style.transform = 'translate(-50%, -50%) translateX(-100%)';
            nextImage.style.transform = 'translate(-50%, -50%)';
            setTimeout(() => {
                image.style.opacity = '0';
            }, 200);
        }, 10);
        setTimeout(() => {
            image.src = nextImage.src;
            image.alt = nextImage.alt;
            image.style.transition = 'none';
            image.style.transform = 'translate(-50%, -50%)';
            image.style.opacity = '1';
            nextImage.style.transition = 'none';
            nextImage.style.opacity = '0';
            nextImage.style.transform = 'translate(-50%, -50%) translateX(100%)';
            setTimeout(() => {
                image.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
                nextImage.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            }, 10);
            isAnimating = false;
        }, 500);
    } else if (direction === 'prev') {
        nextImage.style.transition = 'none';
        nextImage.src = newSrc;
        nextImage.alt = newAlt;
        nextImage.style.transform = 'translate(-50%, -50%) translateX(-100%)';
        nextImage.style.opacity = '1';
        setTimeout(() => {
            nextImage.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            image.style.transform = 'translate(-50%, -50%) translateX(100%)';
            nextImage.style.transform = 'translate(-50%, -50%)';
            setTimeout(() => {
                image.style.opacity = '0';
            }, 200);
        }, 10);
        setTimeout(() => {
            image.src = nextImage.src;
            image.alt = nextImage.alt;
            image.style.transition = 'none';
            image.style.transform = 'translate(-50%, -50%)';
            image.style.opacity = '1';
            nextImage.style.transition = 'none';
            nextImage.style.opacity = '0';
            nextImage.style.transform = 'translate(-50%, -50%) translateX(-100%)';
            setTimeout(() => {
                image.style.transition = 'transform 0.5s ease, opacity 0.5s ease';
                nextImage.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            }, 10);
            isAnimating = false;
        }, 500);
    } else {
        // initial open
        image.src = newSrc;
        image.alt = newAlt;
        image.style.transform = 'translate(-50%, -50%)';
        isAnimating = false;
    }
}

function open(index) {
    updateThumbnails();
    setImage(index);
    lightbox.setAttribute('aria-hidden', 'false');
    lightbox.classList.add('footer__lightbox--open');
}

function close() {
    lightbox.setAttribute('aria-hidden', 'true');
    lightbox.classList.remove('footer__lightbox--open');
}

function showNext() {
    const nextIndex = (currentIndex + 1) % thumbnails.length;
    setImage(nextIndex, 'next');
}

function showPrev() {
    const prevIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
    setImage(prevIndex, 'prev');
}

document.addEventListener('click', (event) => {
    const thumb = event.target.closest('.footer__instagram-item');
    if (!thumb) return;
    updateThumbnails();
    const idx = thumbnails.indexOf(thumb);
    if (idx === -1) return;
    event.preventDefault();
    open(idx);
});

lightbox.addEventListener('click', (event) => {
    if (event.target !== image && event.target !== nextBtn && event.target !== prevBtn) {
        close();
    }
});

nextBtn.addEventListener('click', showNext);
prevBtn.addEventListener('click', showPrev);

document.addEventListener('keydown', (event) => {
    if (lightbox.getAttribute('aria-hidden') !== 'false') return;
    if (event.key === 'Escape') close();
    if (event.key === 'ArrowRight') showNext();
    if (event.key === 'ArrowLeft') showPrev();
});