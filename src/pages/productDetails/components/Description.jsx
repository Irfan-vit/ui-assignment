import { useParams } from 'react-router-dom'
import useProductDetailData from '../../../queryHooks/useGetProductDetail'
import './description.css'
const Description = () => {
  const { productId } = useParams()
  const { getProductDetailQuery } = useProductDetailData(productId)
  console.log(getProductDetailQuery.data)
  return (
    <>
      <div className="product-descripion">
        <p>{getProductDetailQuery.data?.description.about}</p>
        <p>
          Heat LEVEL: {getProductDetailQuery.data?.description.ingredients[0]}
        </p>
        <p>
          INGREDIENTS : {getProductDetailQuery.data?.description.ingredients[1]}
        </p>
        <p>{getProductDetailQuery.data?.description.ingredients[2]}</p>
        <p>{getProductDetailQuery.data?.description.ingredients[3]}</p>
      </div>
    </>
  )
}
export default Description
