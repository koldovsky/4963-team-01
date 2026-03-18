document.body.classList.add("modal-open");
document.getElementById("ageYes")?.addEventListener("click", function () {
  document.getElementById("ageModal")?.classList.remove("age-modal--open");
  document.body.classList.remove("modal-open");
});
