const AGE_VERIFICATION_STORAGE_KEY = "age-verification-choice";
const AGE_VERIFIED_VALUE = "verified";
const AGE_RESTRICTED_VALUE = "restricted";

const ageModal = document.getElementById("ageModal");
const ageYesButton = document.getElementById("ageYes");
const ageNoLink = document.getElementById("ageNo");

function openAgeModal() {
  ageModal?.classList.add("age-modal--open");
  document.body.classList.add("modal-open");
}

function closeAgeModal() {
  ageModal?.classList.remove("age-modal--open");
  document.body.classList.remove("modal-open");
}

if (ageModal) {
  const savedChoice = localStorage.getItem(AGE_VERIFICATION_STORAGE_KEY);

  if (savedChoice === AGE_VERIFIED_VALUE) {
    closeAgeModal();
  } else if (savedChoice === AGE_RESTRICTED_VALUE) {
    window.location.href = "underage.html";
  } else {
    openAgeModal();
  }

  ageYesButton?.addEventListener("click", function () {
    localStorage.setItem(AGE_VERIFICATION_STORAGE_KEY, AGE_VERIFIED_VALUE);
    closeAgeModal();
  });

  ageNoLink?.addEventListener("click", function () {
    localStorage.setItem(AGE_VERIFICATION_STORAGE_KEY, AGE_RESTRICTED_VALUE);
  });
}
