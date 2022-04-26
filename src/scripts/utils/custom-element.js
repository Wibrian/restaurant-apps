class RestoCard extends HTMLElement {}

class RestoList extends HTMLElement {}

class RestoFavorite extends HTMLElement {}

class RestoDetail extends HTMLElement {}

class AppBar extends HTMLElement {
  connectedCallback () {
    this.classList.add('navbar')
    this.render()
  }

  render () {
    this.innerHTML = `
      <div class="navbar-title">
        <header>
          <h1>Hunger Apps</h1>
        </header>
        <a class="skip-content" href="#content"> Skip to content </a>
        <button id="bar-menu" class="navbar-icon" aria-label="klik/Tab untuk menampilkan menu">☰</button>
      </div>
      <ul id="drawer" class="navbar-list">
        <li><a href="#/">Home</a></li>
        <li><a href="#/favorite">Favourite</a></li>
        <li><a href="https://github.com/Wibrian" target="_blank" rel="noopener">About Us</a></li>
      </ul>
    `
  }
}

class HeroJumbotron extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  render () {
    this.innerHTML = `
      <div class="jumbotron">
        <img class="hero-image" src="./images/heros/hero-image_2.jpg" alt="Gambar orang dengan hidangan makanan" />
        <h2 class="center-title" tabindex="0">Welcome to Hunger Apps</h2>
        <p class="center-subtitle">Bingung cari resotran? Coba cari disini..</p>
      </div>
    `
  }
}

class LoadingPage extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  render () {
    this.innerHTML = `
      <div class="loading-bar"><div></div><div></div><div></div></div>
    `
  }
}

class ErrorMessage extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  render () {
    this.innerHTML = `
        <div class="jumbotron">
            <img class="hero-image" src="./images/heros/hero-image_2.jpg" alt="Gambar orang dengan hidangan makanan" />
            <h2 class="center-title" tabindex="0">Welcome to Hunger Apps</h2>
            <p class="center-subtitle">Bingung cari resotran? Coba cari disini..</p>
        </div>
        <h3 class="center-title-2" id="content" tabindex="0">Explore Restaurant</h3>
        <div class="center">
            <i class="fa-solid fa-face-frown main-text-color-2"></i>
            <h3>Failed to Load Data</h3>
        </div>
    `
  }
}

customElements.define('hero-jumbotron', HeroJumbotron)
customElements.define('app-navbar', AppBar)
customElements.define('loading-page', LoadingPage)
customElements.define('error-message', ErrorMessage)
customElements.define('restaurant-detail', RestoDetail)
customElements.define('restaurant-card', RestoCard)
customElements.define('restaurant-list', RestoList)
customElements.define('restaurant-favourite', RestoFavorite)
