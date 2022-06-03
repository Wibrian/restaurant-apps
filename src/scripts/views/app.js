import DrawerInitiator from '../utils/drawer'
import UrlParser from '../routes/url-parser'
import routes from '../routes/routes'
import '../utils/custom-element'

class App {
  constructor ({ button, drawer, content }) {
    this._button = button
    this._drawer = drawer
    this._content = content

    this._initialAppShell()
    this._afterLoading()
  }

  _initialAppShell () {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content
    })
  }

  _afterLoading () {
    setTimeout(() => {
      try {
        document.querySelector('loading-skeleton').classList.add('none')
        document.querySelector('restaurant-card').removeAttribute('class')
        document.querySelector('restaurant-favourite').removeAttribute('class')
      } catch (error) {
        console.log('Attribute Class Removed')
      }
    }, 1000)
  }

  async renderPage () {
    try {
      const url = UrlParser.parseActiveUrlWithCombiner()
      const page = routes[url]
      this._content.innerHTML = await page.render()
      await page.afterRender()
    } catch (error) {
      console.log(error)
      this._content.innerHTML = '<error-message></error-message>'
    } finally {
      this._afterLoading()
    }
  }
}

export default App
