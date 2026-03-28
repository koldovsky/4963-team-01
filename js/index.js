function init() {
  import("./products.js");
  import("./global.shopping-cart.js");
  import("./index.best-deals.js");
  import("./index.age-modal.js");
  import("./index.newsletter.js");
  import("./global.footer.js");
}

const totalPartials = document.querySelectorAll(
  '[hx-trigger="load"], [data-hx-trigger="load"]',
).length;
let loadedPartialsCount = 0;

document.body.addEventListener("htmx:afterOnLoad", () => {
  loadedPartialsCount++;
  if (loadedPartialsCount === totalPartials) init();
});

window.onload = function () {
  setTimeout(() => {
    document.getElementById("loader").style.opacity = "0";
    setTimeout(() => {
      document.getElementById("loader").style.display = "none";
    }, 1000);
  }, 2500);
};
