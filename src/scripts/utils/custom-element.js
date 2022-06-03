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
        <picture>
          <source media="(max-width: 716px)" srcset="./images/heros/hero-image_2-small.jpg" />
          <img class="hero-image" src="./images/heros/hero-image_2-large.jpg" alt="Gambar orang dengan hidangan makanan" />
        </picture>
        <h2 class="center-title" tabindex="0">Welcome to Hunger Apps</h2>
        <p class="center-subtitle">Bingung cari resotran? Coba cari disini..</p>
      </div>
    `
  }
}

class LoadingSkeleton extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  render () {
    this.innerHTML = `
      <div class="skeleton-container">
        <div class="card-image skeleton">
            <img class="lazyload" data-src="" alt="" />
            <p>Kota, <strong></strong></p>
        </div>
        <section class="description skeleton">
            <p><b>Rating:</b> <i class="fa-solid fa-star yellow"></i></p>
            <h4 class="my-resto-title" tabindex="0"><a class="cta" href="#"></a></h4>
            <p>onload</p>
        </section>
      </div>
      <div class="skeleton-container">
        <div class="card-image skeleton">
            <img class="lazyload" data-src="" alt="" />
            <p>Kota, <strong></strong></p>
        </div>
        <section class="description skeleton">
            <p><b>Rating:</b> <i class="fa-solid fa-star yellow"></i></p>
            <h4 class="my-resto-title" tabindex="0"><a class="cta" href="#"></a></h4>
            <p>onload</p>
        </section>
      </div>
      <div class="skeleton-container">
        <div class="card-image skeleton">
            <img class="lazyload" data-src="" alt="" />
            <p>Kota, <strong></strong></p>
        </div>
        <section class="description skeleton">
            <p><b>Rating:</b> <i class="fa-solid fa-star yellow"></i></p>
            <h4 class="my-resto-title" tabindex="0"><a class="cta" href="#"></a></h4>
            <p>onload</p>
        </section>
      </div>
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
            <picture>
              <source media="(max-width: 716px)" srcset="./images/heros/hero-image_2-small.jpg" />
              <img class="hero-image" src="./images/heros/hero-image_2-large.jpg" alt="Gambar orang dengan hidangan makanan" />
            </picture>
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

class RestoFavoriteNotFound extends HTMLElement {
  connectedCallback () {
    this.render()
  }

  render () {
    this.innerHTML = `
      <h4 class="no-favourite-title">Anda Belum Memiliki Restoran Favorit</h4>
    `
  }
}

customElements.define('hero-jumbotron', HeroJumbotron)
customElements.define('app-navbar', AppBar)
customElements.define('loading-skeleton', LoadingSkeleton)
customElements.define('error-message', ErrorMessage)
customElements.define('restaurant-detail', RestoDetail)
customElements.define('restaurant-card', RestoCard)
customElements.define('restaurant-list', RestoList)
customElements.define('restaurant-favourite', RestoFavorite)
customElements.define('no-favourite', RestoFavoriteNotFound)
