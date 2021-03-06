import RestoApiSource from '../database/resto-source'
import { createResto } from './resto-template'
import '../utils/custom-element'
import 'lazysizes'
import 'lazysizes/plugins/parent-fit/ls.parent-fit'

const myResto = {
  async render () {
    return `
    <hero-jumbotron></hero-jumbotron>
    <h3 class="center-title-2" id="content" tabindex="0">Explore Restaurant</h3>
    <loading-skeleton></loading-skeleton>
    `
  },

  async afterRender () {
    const restoApi = await RestoApiSource.getResto()
    const restoMain = document.querySelector('main')
    const restoCard = document.createElement('restaurant-card')
    restoCard.setAttribute('class', 'none')
    restoMain.append(restoCard)
    restoApi.forEach((resto) => {
      const restoList = document.createElement('restaurant-list')
      restoCard.append(restoList)
      restoList.innerHTML += createResto(resto)
    })
  }
}

export default myResto
