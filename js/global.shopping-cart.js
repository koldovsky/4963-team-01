// Main cart module.
// Use addToCart(productID, count) function if you want to interaction with it.
// See products.js for the list of product id's.

import { getProductById } from "./products.js";
import { updateCartPopupUI } from "./global.cart-popup.js";

const cart = []; // Stores product ids of products added to the cart

/**
 * Adds a product to the shopping cart and updates the cart UI accordingly.
 *
 * @param {number} productID - The ID of the product to add to the cart. See all Ids in products.js.
 * @param {number} [count=1] - The quantity of the product to add. Default is 1.
 * @returns {boolean} True if the product was successfully added, false otherwise.
 */
export function addToCart(productID, count = 1) {
  const product = getProductById(productID);
  if (product) {
    product.count = count;

    // Check if the same product is alredy in the cart and just increment count thats the case
    for (const productInCart of cart) {
      if (productInCart.id === product.id) {
        productInCart.count += product.count;
        updateCartUI();
        return true;
      }
    }

    cart.push(product);
    updateCartUI();
    return true;
  } else {
    console.error(`Product with ID ${productID} not found.`);
    return false;
  }
}

function removeProductFromCart(productId) {
  const productIndex = cart.findIndex((p) => p.id === productId);
  if (productIndex !== -1) {
    cart.splice(productIndex, 1);
    updateCartUI();
  }
}

export function openCart() {
  changeVisibility(true);
}

export function closeCart() {
  changeVisibility(false);
}

function changeVisibility(toggle) {
  const cartModal = document.querySelector(".cart");
  if (toggle) {
    cartModal.classList.add("cart--visible");
    document.body.classList.add("no-scroll");
  } else {
    cartModal.classList.remove("cart--visible");
    document.body.classList.remove("no-scroll");
  }
}

const TEMPLATE = document.querySelector("#cart-item-template");
const productList = document.querySelector(".cart__items-list");
const cartTotal = document.querySelector(".cart__total-value");
const cartCloseButton = document.querySelector(".cart__close-button");
const cartBackground = document.querySelector(".cart");

/**
 * Rebuilds the full cart DOM from scratch.
 *
 * NOTE: I know that this approach is **inefficient** because it clears and recreates
 * every cart item element each time it runs, even if only one product changed.
 * But I'll leave it like this, for now at least...
 */
function updateCartUI() {
  productList.innerHTML = "";

  let totalProducts = 0;
  let totalPrice = 0;
  cart.forEach((product) => {
    productList.appendChild(productToHTML(product));
    totalProducts += product.count;
    totalPrice += product.price * product.count;
  });

  updateCartPopupUI(totalProducts);
  cartTotal.textContent = totalPrice.toFixed(2) + "USD";
}

function productToHTML(product) {
  const productElement = TEMPLATE.content.cloneNode(true).querySelector("li");
  productElement.querySelector(".cart__item-image").src = product.image;
  productElement.querySelector(".cart__item-image").alt =
    `${product.name} preview`;
  productElement.querySelector(".cart__item-info__name").textContent =
    `${product.name} (${product.id})`;
  productElement.querySelector(".cart__item-info__price").textContent =
    `${product.price.toFixed(2) * product.count}USD`;
  productElement.querySelector(".cart__item-info__qty").value = product.count;
  productElement.dataset.productId = product.id; // Set data-product-id for future reference (e.g., removal)

  addProductListeners(productElement, product);
  return productElement;
}

// Event listerners
function addProductListeners(productElement, product) {
  const buttonIncrement = productElement.querySelector(
    ".cart__item-info-qty__button--increment",
  );
  const buttonDecrement = productElement.querySelector(
    ".cart__item-info-qty__button--decrement",
  );
  const cart__itemRemoveButton = productElement.querySelector(".cart__item-remove");
  const cart__itemInfoQty = productElement.querySelector(".cart__item-info__qty");

  buttonIncrement.addEventListener("click", () => {
    if (product) {
      product.count++;
      updateCartUI();
    }
  });

  buttonDecrement.addEventListener("click", () => {
    if (product) {
      if (product.count > 1) {
        product.count--;
      } else {
        removeProductFromCart(product.id);
      }
      updateCartUI();
    }
  });

  cart__itemRemoveButton.addEventListener("click", () => {
    removeProductFromCart(product.id);
  });

  cart__itemInfoQty.addEventListener("change", (event) => {
    const newCount = parseInt(event.target.value);
    if (isNaN(newCount) || newCount < 1) {
      event.target.value = product.count; // Reset to previous valid count
      return;
    }
    product.count = newCount;
    updateCartUI();
  });
}

cartCloseButton.addEventListener("click", closeCart);
cartBackground.addEventListener("click", (event) => {
  if (event.target === cartBackground) {
    closeCart();
  }
});