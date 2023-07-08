import './App.css'
import { Routes, Route } from 'react-router-dom'
import ProductListing from './pages/productsListing/ProductListing'
import ProductDetails from './pages/productDetails/ProductDetails'
import Description from './pages/productDetails/components/Description'
import Reviews from './pages/productDetails/components/Reviews'
import Videos from './pages/productDetails/components/Videos'
import Comments from './pages/productDetails/components/Comments'
import Home from './pages/home/Home'
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<ProductListing />} />
        <Route path="/product/:productId" element={<ProductDetails />}>
          <Route path="description" element={<Description />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="videos" element={<Videos />} />
          <Route path="comments" element={<Comments />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
