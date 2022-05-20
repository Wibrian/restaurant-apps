import FavouriteRestoIdb from '../database/favourite-resto-db'
import { createResto } from './resto-template'
import 'lazysizes'
import 'lazysizes/plugins/parent-fit/ls.parent-fit'

const favoriteRestoPage = {
  async render () {
    return `
        <div class="jumbotron">
            <img class="hero-image" src="./images/heros/hero-image_2.jpg" alt="Gambar orang dengan hidangan makanan" />
            <h2 class="center-title" tabindex="0">Welcome to Hunger Apps</h2>
            <p class="center-subtitle">Bingung cari resotran? Coba cari disini..</p>
        </div>
        <h3 class="center-title-2" id="content" tabindex="0">Favorite Restaurant</h3>
        <loading-page></loading-page>
      `
  },

  async afterRender () {
    const resto = await FavouriteRestoIdb.getAllResto()
    console.log(resto)
    const restoMain = document.querySelector('main')
    const restoFavourite = document.createElement('restaurant-favourite')
    restoMain.append(restoFavourite)
    if (resto.length === 0) {
      const restoNotFound = document.createElement('no-favourite')
      restoFavourite.append(restoNotFound)
    } else {
      resto.forEach((resto) => {
        const restoList = document.createElement('restaurant-list')
        restoFavourite.append(restoList)
        restoList.innerHTML += createResto(resto)
      })
    }
  }
}

export default favoriteRestoPage
