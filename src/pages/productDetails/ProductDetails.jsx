import Footer from '../../components/footer/Footer'
import NavBar from '../../components/navBar/NavBar'
import ProductDetail from '../../components/products/ProductDetail'
import UserUtilsBar from '../../components/userUtilsBar/UserUtilsBar'

const ProductDetails = () => {
  return (
    <>
      <UserUtilsBar />
      <NavBar />
      <div>
        <ProductDetail />
      </div>
      <Footer />
    </>
  )
}
export default ProductDetails
