import RestoApiSource from '../resto-source'
import { createResto } from '../resto-template'
import '../utils/custom-element'

const myResto = {
  async render () {
    return `
    <hero-jumbotron></hero-jumbotron>
    <h3 class="center-title-2" id="content" tabindex="0">Explore Restaurant</h3>
    <loading-page></loading-page>
    `
  },

  async afterRender () {
    const restoApi = await RestoApiSource.getResto()
    const restoMain = document.querySelector('main')
    const restoCard = document.createElement('restaurant-card')
    restoMain.append(restoCard)
    restoApi.forEach((resto) => {
      const restoList = document.createElement('restaurant-list')
      restoCard.append(restoList)
      restoList.innerHTML += createResto(resto)
    })
  }
}

export default myResto
