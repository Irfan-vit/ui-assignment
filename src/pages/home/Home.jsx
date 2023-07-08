import Footer from '../../components/footer/Footer'
import NavBar from '../../components/navBar/NavBar'
import UserUtilsBar from '../../components/userUtilsBar/UserUtilsBar'
import { Link, useParams, NavLink, Outlet } from 'react-router-dom'
import './hero.css'
const Home = () => {
  return (
    <>
      <UserUtilsBar />
      <NavBar />
      <div className="hero-image">
        <div className="hero-text">
          <h1>THE MISO VIRTUOSO</h1>
          {/* <p>Best Japanese Food</p> */}
          <Link to="/product">
            <button>Shop Now</button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  )
}
export default Home
