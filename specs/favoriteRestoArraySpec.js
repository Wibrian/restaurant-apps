/* eslint-disable no-prototype-builtins */
/* eslint-disable no-undef */
import { itActsAsFavouriteRestaurant } from './contract/favoriteRestoContract'

let favouriteRestaurant = []

const FavouriteRestoArray = {
  getResto (id) {
    if (!id) {
      return
    }
    return favouriteRestaurant.find((restaurants) => restaurants.id === id)
  },

  getAllResto () {
    return favouriteRestaurant
  },

  putResto (restaurants) {
    if (!restaurants.hasOwnProperty('id')) {
      return
    }

    if (this.getResto(restaurants.id)) {
      return
    }

    favouriteRestaurant.push(restaurants)
  },

  deleteResto (id) {
    favouriteRestaurant = favouriteRestaurant.filter((restaurants) => restaurants.id !== id)
  }
}

describe('Favourite Restaurant Place Array Contract Test Implementation', () => {
  afterEach(() => {
    favouriteRestaurant = []
  })

  itActsAsFavouriteRestaurant(FavouriteRestoArray)
})
