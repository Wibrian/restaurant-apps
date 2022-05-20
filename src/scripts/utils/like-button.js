// import FavouriteRestoIdb from '../database/favourite-resto-db'
import { createLikeButton, createLikedButton } from '../pages/resto-template'

const LikeButtonInitiator = {
  async init ({ likeButtonContainer, favouriteRestaurant, restaurants }) {
    this._likeButtonContainer = likeButtonContainer
    this._restaurants = restaurants
    this._favouriteRestaurant = favouriteRestaurant

    await this._renderButton()
  },

  async _renderButton () {
    const { id } = this._restaurants

    if (await this._isRestoExist(id)) {
      this._renderLiked()
    } else {
      this._renderLike()
    }
  },

  async _isRestoExist (id) {
    const restaurants = await this._favouriteRestaurant.getResto(id)
    return !!restaurants
  },

  _renderLike () {
    this._likeButtonContainer.innerHTML = createLikeButton()

    const likeButton = document.querySelector('#like-button')
    likeButton.addEventListener('click', async () => {
      await this._favouriteRestaurant.putResto(this._restaurants)
      this._renderButton()
    })
  },

  _renderLiked () {
    this._likeButtonContainer.innerHTML = createLikedButton()

    const likeButton = document.querySelector('#like-button')
    likeButton.addEventListener('click', async () => {
      await this._favouriteRestaurant.deleteResto(this._restaurants.id)
      this._renderButton()
    })
  }
}

export default LikeButtonInitiator
