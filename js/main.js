const favouriteEl = document.querySelector('.favouriteEl span')
const MenufavouriteEl = document.querySelector('.menu-favouriteEl span')


let favouriteProductsJson = localStorage.getItem(FAVOURITE);
let favouriteProducts = JSON.parse(favouriteProductsJson) || [];

function getFavouriteNumber() {
    favouriteEl.textContent = favouriteProducts.length;
    MenufavouriteEl.textContent = favouriteProducts.length;
}

getFavouriteNumber()

const cartEl = document.querySelector('.cartEl span')
const menuCartEl = document.querySelector('.menu-cartEl span')


let cartProductsJson = localStorage.getItem(CART);
let cartProducts = JSON.parse(cartProductsJson) || [];


function getCartNumber() {
    cartEl.textContent = cartProducts.length;
    menuCartEl.textContent = cartProducts.length;
}

getCartNumber()