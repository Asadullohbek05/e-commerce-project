const AllProducts = document.querySelector('.all-products-cards')
const searchInput = document.querySelector('#search')

let search = ""


function getProducts() {
    AllProducts.innerHTML = ""
    let searchProducts = products.filter((product) =>
        product.name.toLowerCase().includes(search) ||
        product.description.toLowerCase().includes(search)
    )
    searchProducts.forEach((product) => {
        let card = getProductCard(product, 'all')
        AllProducts.innerHTML += card;
    });
}

getProducts()

searchInput.addEventListener('keyup', function () {
    search = this.value.trim().toLowerCase()
    getProducts()
})


