// DO NOT USE FOR NOW, THIS FUNCTION IS NOT FULLY IMPLEMENTED AND MAY CAUSE ERRORS.

import { getProductById } from "./products.js";
import { updateCartPopupUI } from "./global.cart-popup.js";

const cart = []; // Stores product ids of products added to the cart

/**
 * DO NOT USE FOR NOW, THIS FUNCTION IS NOT FULLY IMPLEMENTED AND MAY CAUSE ERRORS.
 * 
 * Adds a product to the shopping cart and updates the cart UI accordingly.
 *
 * @param {number} productID - The ID of the product to add to the cart. See all Ids in products.js.
 * @returns {boolean} True if the product was successfully added, false otherwise.
 */
export function addToCart(productID) {
  const product = getProductById(productID);
  if (product) {
    cart.push(product);
    updateCartUI();
    return true;
  } else {
    console.error(`Product with ID ${productID} not found.`);
    return false;
  }
}

const TEMPLATE = document.querySelector("#cart-item-template");
const productList = document.querySelector(".cart__items-list");

function updateCartUI() {
  productList.innerHTML = "";
  cart.forEach((product) => {
    productList.appendChild(productToHTML(product));
  });

  updateCartPopupUI(cart.length); // Will later be updated to reflect actual quantity of products, not just count of unique products.
}

function productToHTML(product) {
  const productElement = TEMPLATE.content.cloneNode(true).querySelector("li");
  productElement.querySelector(".cart__item-image").src = product.image;
  productElement.querySelector(".cart__item-image").alt = `${product.name} preview`;
  productElement.querySelector(".cart__item-info__name").textContent = `${product.name} (${product.id})`;
  productElement.querySelector(".cart__item-info__price").textContent = `${product.price.toFixed(2)}USD`;
  productElement.querySelector(".cart__item-info__qty").value = 1; // Hard coded quantity for now, as quantity management is not implemented yet.
  productElement.dataset.productId = product.id; // Set data-product-id for future reference (e.g., removal)

  console.log(productElement);
  return productElement;
}