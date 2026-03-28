const cartPopup = document.querySelector(".cart-popup");

export function updateCartPopupUI(productCount) {
    cartPopup.querySelector(".cart-popup__count").textContent = productCount;

    if (productCount > 0) {
        cartPopup.classList.add("cart-popup--visible");
    } else {
        cartPopup.classList.remove("cart-popup--visible");
    }
}