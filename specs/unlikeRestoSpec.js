/* eslint-disable no-undef */
import * as TestFactories from './helpers/testFactories'
import FavouriteRestoIdb from '../src/scripts/database/favourite-resto-db'

const addLikeButtonContainer = () => {
  document.body.innerHTML = '<div id="likeButton"></div>'
}

describe('Unliking A Restaurant', () => {
  beforeEach(async () => {
    addLikeButtonContainer()
    await FavouriteRestoIdb.putResto({ id: 1 })
  })

  afterEach(async () => {
    await FavouriteRestoIdb.deleteResto(1)
  })

  it('should display unlike widget when the restaurant place has been liked', async () => {
    await TestFactories.createLikeButtonWithRestaurant({ id: 1 })

    expect(document.querySelector('[aria-label="unlike this restaurant"]')).toBeTruthy()
  })

  it('should display unlike widget when the restaurant place has been liked', async () => {
    await TestFactories.createLikeButtonWithRestaurant({ id: 1 })

    expect(document.querySelector('[aria-label="like this restaurant"]')).toBeFalsy()
  })

  it('Should be able to remove liked restaurant place from the list', async () => {
    await TestFactories.createLikeButtonWithRestaurant({ id: 1 })

    document.querySelector('[aria-label="unlike this restaurant"]').dispatchEvent(new Event('click'))

    expect(await FavouriteRestoIdb.getAllResto()).toEqual([])
  })

  it('should not throw error if the unliked restaurant place is not in the list', async () => {
    await TestFactories.createLikeButtonWithRestaurant({ id: 1 })

    await FavouriteRestoIdb.deleteResto(1)

    document.querySelector('[aria-label="unlike this restaurant"]').dispatchEvent(new Event('click'))

    expect(await FavouriteRestoIdb.getAllResto()).toEqual([])
  })
})
