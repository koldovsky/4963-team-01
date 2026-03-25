function init() {
  import("./index.age-modal.js");
}

const totalPartials = document.querySelectorAll(
  '[hx-trigger="load"], [data-hx-trigger="load"]',
).length;
let loadedPartialsCount = 0;

document.body.addEventListener("htmx:afterOnLoad", () => {
  loadedPartialsCount++;
  if (loadedPartialsCount === totalPartials) init();
});

window.onload = function() {
    setTimeout(() => {
      document.getElementById("loader").style.opacity = "0";
      setTimeout(() => {
        document.getElementById("loader").style.display = "none";
      }, 1000);
    }, 2500);
};