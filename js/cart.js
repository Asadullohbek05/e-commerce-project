const cartElements = document.querySelector('#cart-products')

function getCartCard({ name, description, image }) {
    return `<span>CartProduct</span>`
}

if (cartProducts.length !== 0) {
    cartProducts.map((pr) => {
        cartElements.innerHTML += getCartCard(pr);
    });
} else {
    cartElements.innerHTML = "<h2 class='alert'>You Dont have cart products <span>!!!</span></h2>"
}


