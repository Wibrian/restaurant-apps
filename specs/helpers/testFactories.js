import LikeButtonInitiator from '../../src/scripts/utils/like-button'
import FavouriteRestoIdb from '../../src/scripts/database/favourite-resto-db'

const createLikeButtonWithRestaurant = async (restaurants) => {
  await LikeButtonInitiator.init({
    likeButtonContainer: document.querySelector('#likeButton'),
    favouriteRestaurant: FavouriteRestoIdb,
    restaurants
  })
}

export { createLikeButtonWithRestaurant }
