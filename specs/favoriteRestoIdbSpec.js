/* eslint-disable no-undef */
import { itActsAsFavouriteRestaurant } from './contract/favoriteRestoContract'
import FavouriteRestoIdb from '../src/scripts/database/favourite-resto-db'

describe('Favourite Restaurant Index_db Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavouriteRestoIdb.getAllResto()).forEach(async (restaurants) => {
      await FavouriteRestoIdb.deleteResto(restaurants.id)
    })
  })

  itActsAsFavouriteRestaurant(FavouriteRestoIdb)
})
