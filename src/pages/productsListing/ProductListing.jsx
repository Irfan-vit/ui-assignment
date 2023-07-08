import FilterBar from '../../components/filterBar/FilterBar'
import Footer from '../../components/footer/Footer'
import Jumbotron from '../../components/jumbotron/Jumbotron'
import NavBar from '../../components/navBar/NavBar'
import ProductsList from '../../components/products/ProducsList'
import UserUtilsBar from '../../components/userUtilsBar/UserUtilsBar'
import './productListing.css'
const ProductListing = () => {
  return (
    <>
      <UserUtilsBar />
      <NavBar />
      <Jumbotron />
      <div className="products-data">
        <FilterBar />
        <ProductsList />
      </div>
      <Footer />
    </>
  )
}
export default ProductListing
