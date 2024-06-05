function getRating(rating) {
    let res = "";
    let star_count = 0;
    let full_star = parseInt(rating);
    let rest_star = rating - full_star;

    star_count = full_star;
    res = Array(full_star).fill('<img src="images/svg/star-full.svg" alt="" />').join("");
    if (0.25 <= rest_star && rest_star <= 0.5) {
        star_count++;
        res += '<img src="images/svg/star-half.svg" alt="" />'
    }
    if (0.5 < rest_star) {
        star_count++;
        res += '<img src="images/svg/star-full.svg" alt="" />'
    }
    free_star = 5 - star_count;
    res += Array(free_star).fill('<img src="images/svg/star.svg" alt="" />').join("");
    return res;
}


function getProductCard({
    id, name, category, description, price, rating, discount, images }, which) {
    let isFavourite = favouriteProducts.find((el) => el.id === id)
    return `
        <div class="product-card">
            <div class="product-card-top">
              <img src=${images[0]} alt="" />
              <button onclick="addToFavourite(${id} , '${which}')" class="like-btn"> 
              ${isFavourite ?
            '<img src="../images/svg/heart-fill.svg" alt="">'
            :
            '<img src="../images/svg/heart-icon.svg" alt="">'}         
              </button >
            </div >
            <h4>${name} - ${price} ₽ <span class="discount">${discount}%</span></h4>
            <div class="description-wrapper">
                <p>${description}</p>
                <div class="stars-wrapper">
                    ${getRating(rating)}
                </div>
            </div>
            <button class="addToCart">В корзину</button>
        </div >
    `
}


// AddToFavourite

function addToFavourite(id, which) {
    let checkFavourite = favouriteProducts.find((el) => el.id === id)
    let product = products.find((el) => el.id === id)

    if (checkFavourite) {
        favouriteProducts = favouriteProducts.filter((el) => el.id !== id)
    } else {
        favouriteProducts.push(product)
    }

    localStorage.setItem(FAVOURITE, JSON.stringify(favouriteProducts));

    if (which === 'all') {
        getProducts();
    } else if (which === 'favourite') {
        getFavouriteProducts();
    }

    getFavouriteNumber()
} 