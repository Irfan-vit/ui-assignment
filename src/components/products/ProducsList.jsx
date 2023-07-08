import useProductsData from '../../queryHooks/useGetProducts'
import ProductCard from './ProductCard'
import './productsList.css'
const ProductsList = () => {
  const { getProductsQuery } = useProductsData()
  return (
    <>
      <div className="products-list">
        {getProductsQuery.data?.map((product) => (
          <ProductCard product={product} key={product._id} />
        ))}
      </div>
    </>
  )
}
export default ProductsList
