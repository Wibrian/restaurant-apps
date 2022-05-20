import UrlParser from '../routes/url-parser'
import RestoApiSource from '..//database/resto-source'
import { createDetailResto } from './resto-template'
import LikeButtonInitiator from '../utils/like-button'
import FavouriteRestoIdb from '../database/favourite-resto-db'
import 'lazysizes'
import 'lazysizes/plugins/parent-fit/ls.parent-fit'

const detailResto = {
  async render () {
    return `
        <div class="jumbotron">
            <img class="hero-image" src="./images/heros/hero-image_2.jpg" alt="Gambar orang dengan hidangan makanan" />
            <h2 class="center-title" tabindex="0">Welcome to Hunger Apps</h2>
            <p class="center-subtitle">Bingung cari resotran? Coba cari disini..</p>
        </div>
        <h3 class="center-title-2" id="content" tabindex="0">Detail Restaurant</h3>
        <loading-page></loading-page>
      `
  },

  async afterRender () {
    const url = UrlParser.parseActiveUrlWithoutCombiner()
    const resto = await RestoApiSource.getDetailResto(url.id)
    console.log(resto)
    const restoMain = document.querySelector('main')
    const restoDetail = document.createElement('restaurant-detail')
    restoMain.append(restoDetail)
    restoDetail.innerHTML = createDetailResto(resto)

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButton'),
      favouriteRestaurant: FavouriteRestoIdb,
      restaurants: {
        id: resto.id,
        name: resto.name,
        description: resto.description,
        pictureId: resto.pictureId,
        city: resto.city,
        rating: resto.rating
      }
    })
  }
}

export default detailResto
