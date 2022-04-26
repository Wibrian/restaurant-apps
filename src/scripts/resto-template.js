import CONFIG from './globals/config'

const createResto = (resto) => `
        <div class="card-image">
            <img src="${CONFIG.BASE_IMAGE_LARGE}${resto.pictureId}" alt="Gambar resotan di Kota, ${resto.city}" />
            <p>Kota, <strong>${resto.city}</strong></p>
        </div>
        <section class="description">
            <p><b>Rating:</b> <i class="fa-solid fa-star yellow"></i> ${resto.rating}</p>
            <h4 tabindex="0"><a class="cta" href="#/detail/${resto.id}">${resto.name}</a></h4>
            <p>${resto.description}</p>
        </section>
`

const createDetailResto = (resto) => `
        <div class="image">
            <img src="${CONFIG.BASE_IMAGE_LARGE}${resto.pictureId}" alt="Gambar detail resto Kota ${resto.city}">
            <div>Kota, <strong>${resto.city}</strong></div>
        </div>
        <div class="detail">
            <section>
                <div class="detail-title">
                    <h4>${resto.name}</h4>
                    <div id="likeButton"></div>
                </div>
                <p tabindex="0"><i class="fa-solid fa-map-location-dot main-color"></i>${resto.address}</p>
                <p tabindex="0"><i class="fa-solid fa-burger main-color"></i><b>Menu Makanan</b>
                    <ul>
                        ${resto.menus.foods.map((food) => (`<li>${food.name}</li>`)).join('')}
                    </ul>
                </p>
                <p tabindex="0"><i class="fa-solid fa-beer-mug-empty main-color"></i><b>Menu Minuman</b>
                    <ul>
                        ${resto.menus.drinks.map((drink) => (`<li>${drink.name}</li>`)).join('')}
                    </ul>
                </p>
                <p tabindex="0"><i class="fa-solid fa-file-lines main-color"></i> <b>Deskripsi</b></p>
                <p class="menu-description" tabindex="0">${resto.description}</p>
                <p tabindex="0"><i class="fa-solid fa-user-group main-color"></i><b>Customers Review</b></p>
                <div class="review-container">
                    ${resto.customerReviews.map((reviews) => (`
                        <div class="review" tabindex="0">
                            <p class="review-name"><i class="fa-solid fa-user-large main-text-color"></i><strong>${reviews.name}</strong></p>
                            <p class="date">${reviews.date}</p>
                            <p class="desc">${reviews.review}</p>
                        </div>
                    `)).join('')}
                </div>
            </section>  
        </div>
`

const createLikeButton = () => `
    <button id="like-button" class="like-button" aria-label="like this restaurant"><i class="fa-solid fa-heart white" aria-hidden="true"></i></button>
`

const createLikedButton = () => `
    <button id="like-button" class="like-button" aria-label="like this restaurant"><i class="fa-solid fa-heart red" aria-hidden="true"></i></button>
`

export { createResto, createDetailResto, createLikeButton, createLikedButton }
