// /* eslint-disable no-undef */
// import FavouriteRestaurantSearch from '../src/scripts/views/favourite-resto-search'

// describe('Searching Restaurant', () => {
//   beforeEach(() => {
//     document.body.innerHTML = `
//         <div id="restaurant-search-container">
//             <input id="query" type="text">
//             <div class="movie-result-container">
//                 <ul class="restaurant">
//                 </ul>
//             </div>
//         </div>
//         `
//   })

//   it('should be able to capture the query typed by the user', () => {
//     const presenter = new FavouriteRestaurantSearch()

//     const queryElement = document.getElementById('query')
//     queryElement.value = 'film a'
//     queryElement.dispatchEvent(new Event('change'))

//     expect(presenter.latestQuery).toEqual('film a')
//   })
// })
