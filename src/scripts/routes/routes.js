import favoriteRestoPage from '../pages/favorite-resto'
import detailResto from '../pages/detail-resto'
import myResto from '../pages/home-resto'

const routes = {
  '/': myResto,
  '/favorite': favoriteRestoPage,
  '/detail/:id': detailResto
}

export default routes
