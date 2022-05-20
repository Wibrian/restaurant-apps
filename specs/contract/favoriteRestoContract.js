/* eslint-disable no-undef */
const itActsAsFavouriteRestaurant = (favouriteRestaurant) => {
  it('should return the restaurant place that has been added', async () => {
    favouriteRestaurant.putResto({ id: 1 })
    favouriteRestaurant.putResto({ id: 2 })

    expect(await favouriteRestaurant.getResto(1)).toEqual({ id: 1 })
    expect(await favouriteRestaurant.getResto(2)).toEqual({ id: 2 })
    expect(await favouriteRestaurant.getResto(3)).toEqual(undefined)
  })

  it('should refuse a restaurant place from being added if it does not have the correct property', async () => {
    favouriteRestaurant.putResto({ aProperty: 'property' })

    expect(await favouriteRestaurant.getAllResto()).toEqual([])
  })

  it('can return all of the restaurant place that have been added', async () => {
    favouriteRestaurant.putResto({ id: 1 })
    favouriteRestaurant.putResto({ id: 2 })

    expect(await favouriteRestaurant.getAllResto()).toEqual([{ id: 1 }, { id: 2 }])
  })

  it('should remove favorite restaurant place', async () => {
    favouriteRestaurant.putResto({ id: 1 })
    favouriteRestaurant.putResto({ id: 2 })
    favouriteRestaurant.putResto({ id: 3 })

    await favouriteRestaurant.deleteResto(1)

    expect(await favouriteRestaurant.getAllResto()).toEqual([{ id: 2 }, { id: 3 }])
  })

  it('should handle request to remove a restaurant place even though the restaurant place has not been added', async () => {
    favouriteRestaurant.putResto({ id: 1 })
    favouriteRestaurant.putResto({ id: 2 })
    favouriteRestaurant.putResto({ id: 3 })

    await favouriteRestaurant.deleteResto(4)

    expect(await favouriteRestaurant.getAllResto()).toEqual([{ id: 1 }, { id: 2 }, { id: 3 }])
  })
}

export { itActsAsFavouriteRestaurant }
