import FavouriteRestoIdb from '../database/favourite-resto-db'
import { createLikeButton, createLikedButton } from '../resto-template'

const LikeButtonInitiator = {
  async init ({ likeButtonContainer, restaurants }) {
    this._likeButtonContainer = likeButtonContainer
    this._restaurants = restaurants

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
    const restaurants = await FavouriteRestoIdb.getResto(id)
    return !!restaurants
  },

  _renderLike () {
    this._likeButtonContainer.innerHTML = createLikeButton()

    const likeButton = document.querySelector('#likeButton')
    likeButton.addEventListener('click', async () => {
      await FavouriteRestoIdb.putResto(this._restaurants)
      this._renderButton()
    })
  },

  _renderLiked () {
    this._likeButtonContainer.innerHTML = createLikedButton()

    const likeButton = document.querySelector('#likeButton')
    likeButton.addEventListener('click', async () => {
      await FavouriteRestoIdb.deleteResto(this._restaurants.id)
      this._renderButton()
    })
  }
}

export default LikeButtonInitiator
