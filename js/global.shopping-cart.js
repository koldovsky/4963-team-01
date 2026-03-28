// DO NOT USE FOR NOW, THIS FUNCTION IS NOT FULLY IMPLEMENTED AND MAY CAUSE ERRORS.

import { getProductById } from "./products";

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
// const clone = template.content.cloneNode(true); How to clone

function updateCartUI() {
  productList.innerHTML = "";
  cart.forEach((productID) => {
    productList.appendChild(productToHTML(getProductById(productID)));
  });
}

/*
    Product object structure example:
    {
        id: 0,
        name: "Cabernet",
        price: 17.00,
        image: "img/wines-best-deals/cabernet.jpg"
    },
*/
function productToHTML(product) {
  const productElement = TEMPLATE.content.cloneNode(true);
  productElement.querySelector(".cart__item-image").src = product.image;
  productElement.querySelector(".cart__item-image").alt = `${product.name} preview`;
  productElement.querySelector(".cart__item-info__name").textContent = `${product.name} (${product.id})`;
  productElement.querySelector(".cart__item-info__price").textContent = `${product.price.toFixed(2)}USD`;

  return productElement;
}
