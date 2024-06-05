const favouriteEl = document.querySelector('.favouriteEl span')

let favouriteProductsJson = localStorage.getItem(FAVOURITE);
let favouriteProducts = JSON.parse(favouriteProductsJson) || [];

function getFavouriteNumber() {
    favouriteEl.textContent = favouriteProducts.length;
}

getFavouriteNumber()