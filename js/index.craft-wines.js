import { addToCart, openCart } from "./global.shopping-cart.js";

const buttons = document.querySelectorAll(".craft-wines-menu__button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const item = button.closest(".craft-wines-menu__item");
    const productId = parseInt(item.dataset.id);

    addToCart(productId, 1);
  });
});
