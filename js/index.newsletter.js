const form = document.getElementById("newsletter-form");
const modal = document.getElementById("newsletterModal");
const closeBtn = document.getElementById("newsletterCloseBtn");
const okBtn = document.getElementById("newsletterOkBtn");
const iconSvg = document.getElementById("newsletterModalIcon");
const titleEl = document.getElementById("newsletterModalTitle");
const messageEl = document.getElementById("newsletterModalMessage");

function openModal(isSuccess = true) {
    if (isSuccess) {
        titleEl.textContent = "Thank you!";
        messageEl.textContent = "We will contact you shortly.";
        // Success checkmark icon
        iconSvg.innerHTML = '<circle cx="50" cy="50" r="48" /><path d="M 35 50 L 45 60 L 65 35" />';
    } else {
        titleEl.textContent = "Sorry!";
        messageEl.textContent = "Something went wrong, please try again later.";
        // Error X icon
        iconSvg.innerHTML = '<circle cx="50" cy="50" r="48" /><path d="M 35 35 L 65 65 M 65 35 L 35 65" />';
    }
    modal.classList.add("newsletter-modal--open");
}

function closeModal() {
    modal.classList.remove("newsletter-modal--open");
}

async function handleSubmit(event) {
    event.preventDefault();
    const response = await fetch(event.target.action, {
        method: form.method,
        body: new FormData(event.target),
        headers: {
            Accept: "application/json",
        },
    });
    if (response.ok) {
        form.reset();
        openModal(true);
    } else {
        openModal(false);
    }
}

closeBtn.addEventListener("click", closeModal);
okBtn.addEventListener("click", closeModal);
modal.addEventListener("click", (e) => {
    if (e.target === modal || e.target.classList.contains("newsletter-modal__backdrop")) {
        closeModal();
    }
});

form.addEventListener("submit", handleSubmit);