const favouriteElements = document.querySelector('.favourite-products')


function getFavouriteProducts() {
    favouriteElements.innerHTML = ""
    if (favouriteProducts.length !== 0) {
        favouriteProducts.forEach(pr => {
            favouriteElements.innerHTML += getProductCard(pr, 'favourite')
        });
    } else {
        favouriteElements.innerHTML = "<h2 class='alert'>You Dont have favourite products <span>!!!</span></h2>"
    }
}

getFavouriteProducts()