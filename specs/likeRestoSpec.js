/* eslint-disable no-undef */
import * as TestFactories from './helpers/testFactories'
import FavouriteRestoIdb from '../src/scripts/database/favourite-resto-db'

describe('Liking A Restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButton"></div>'
  }

  beforeEach(() => {
    addLikeButtonContainer()
  })

  it('should show the like button when the restaurant place has not been liked before', async () => {
    await TestFactories.createLikeButtonWithRestaurant({ id: 1 })

    expect(document.querySelector('[aria-label="like this restaurant"]')).toBeTruthy()
  })

  it('should not show the unlike button when the restaurant place has not been liked before', async () => {
    await TestFactories.createLikeButtonWithRestaurant({ id: 1 })

    expect(document.querySelector('[aria-label="unlike this restaurant"]')).toBeFalsy()
  })

  it('should be able to like the restaurant place', async () => {
    await TestFactories.createLikeButtonWithRestaurant({ id: 1 })

    document.querySelector('#like-button').dispatchEvent(new Event('click'))
    const restaurant = await FavouriteRestoIdb.getResto(1)

    expect(restaurant).toEqual({ id: 1 })

    FavouriteRestoIdb.deleteResto(1)
  })

  it('should not add a restaurant place when its already liked', async () => {
    await TestFactories.createLikeButtonWithRestaurant({ id: 1 })

    await FavouriteRestoIdb.putResto({ id: 1 })
    document.querySelector('#like-button').dispatchEvent(new Event('click'))
    expect(await FavouriteRestoIdb.getAllResto()).toEqual([{ id: 1 }])

    FavouriteRestoIdb.deleteResto(1)
  })

  it('should not add a restaurant place when it has no id', async () => {
    await TestFactories.createLikeButtonWithRestaurant([])

    document.querySelector('#like-button').dispatchEvent(new Event('click'))

    expect(await FavouriteRestoIdb.getAllResto()).toEqual([])
  })
})
