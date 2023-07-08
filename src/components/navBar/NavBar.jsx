import './navBar.css'
import abc from '../../assets/img/logo.avif'
const NavBar = () => {
  return (
    <>
      <header className="nav-header">
        <a href="#side-toggle" className="toggle-menu">
          <span className="material-symbols-outlined">menu</span>
        </a>
        <section className="side-toggle" id="side-toggle">
          <a href="#" className="toggle-close">
            <span className="material-symbols-outlined">close</span>
          </a>
          <ul className="nav-links mobile">
            <li>
              <div className="shop">
                <button className="shop-toggle">
                  <span>Shop</span>
                  <span className="material-symbols-outlined">expand_more</span>
                </button>
                <ul className="shop-links">
                  <li>shop all</li>
                  <li>categories</li>
                </ul>
              </div>
            </li>
            <li>
              <button>Our Story</button>
            </li>
            <li>
              <button>Recipes</button>
            </li>
            <li>
              <button>Contact</button>
            </li>
          </ul>
          <a href="#">close</a>
        </section>
        <a href="#" className="back-drop"></a>
        <nav className="nav-bar">
          <div className="logo-img-container">
            <img src={abc} alt="" />
          </div>
          <div className="nav-pages">
            <ul className="nav-links">
              <li>
                <div className="shop">
                  <button className="shop-toggle">
                    <span>Shop</span>
                    <span className="material-symbols-outlined">
                      expand_more
                    </span>
                  </button>
                  <ul className="shop-links">
                    <li>shop all</li>
                    <li>categories</li>
                  </ul>
                </div>
              </li>
              <li>
                <button>Our Story</button>
              </li>
              <li>
                <button>Recipes</button>
              </li>
              <li>
                <button>Contact</button>
              </li>
            </ul>
          </div>
          <div className="nav-icons">
            <ul className="nav-links">
              <li>
                <a href="#search-toggle">
                  <span className="material-symbols-outlined">search</span>
                </a>
              </li>
              <li>
                <a href="">
                  <span className="material-symbols-outlined">favorite</span>
                </a>
              </li>
              <li>
                <a href="">
                  <span className="material-symbols-outlined">
                    shopping_bag
                  </span>
                </a>
              </li>
            </ul>
            <section className="search-toggle" id="search-toggle">
              <h1>hello</h1>
              <a href="#">close</a>
            </section>
            <a href="#" className="back-drop-search"></a>
          </div>
        </nav>
      </header>
    </>
  )
}
export default NavBar
