import FETCH_API_RESTO from './globals/fetch-api'

class RestoApiSource {
  static async getResto () {
    const response = await fetch(FETCH_API_RESTO.HOME)
    const responseJson = await response.json()
    const getrestaurant = responseJson.restaurants
    return getrestaurant
  }

  static async getDetailResto (id) {
    const response = await fetch(FETCH_API_RESTO.DETAIL(id))
    const responseJson = await response.json()
    const getDetailRestaurant = responseJson.restaurant
    return getDetailRestaurant
  }
}

export default RestoApiSource
