/* eslint-disable no-undef */
const assert = require('assert')

Feature('Liking Restaurant')

Before(({ I }) => {
  I.amOnPage('/#/favorite')
})

Scenario('Show empty favourite Restaurant', ({ I }) => {
  I.seeElement('no-favourite')
  I.see('Anda Belum Memiliki Restoran Favorit', '.no-favourite-title')
})

Scenario('Favourite one Restaurant', async ({ I }) => {
  I.see('Anda Belum Memiliki Restoran Favorit', '.no-favourite-title')

  I.amOnPage('/#/')
  I.wait(3)

  I.seeElement('.my-resto-title a')

  const firstRestaurant = locate('.my-resto-title a').first()
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant)
  I.wait(1)
  I.click(firstRestaurant)

  I.wait(3)
  I.seeElement('#likeButton')
  I.click('#likeButton')

  I.amOnPage('/#/favorite')
  I.seeElement('restaurant-list')
  const likedRestaurantTitle = await I.grabTextFrom('.cta')

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle)
})

Scenario('Unfavourite one Restaurant', async ({ I }) => {
  I.amOnPage('/#/detail/rqdv5juczeskfw1e867')
  I.wait(2)

  I.seeElement('#likeButton')
  I.click('#likeButton')

  I.amOnPage('/#/favorite')
  I.seeElement('restaurant-list')
  const likedRestaurantTitle = await I.grabTextFrom('.cta')

  I.wait(3)
  I.seeElement('.my-resto-title a')

  const firstRestaurant = locate('.my-resto-title a').first()
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant)
  I.wait(1)
  I.click(firstRestaurant)

  I.wait(3)
  I.seeElement('#likeButton')
  I.click('#likeButton')

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle)
})
