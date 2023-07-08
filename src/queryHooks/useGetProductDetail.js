import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
const useProductDetailData = (productId) => {
  const getProductDetailApi = async ({ queryKey }) => {
    const id = queryKey[1]
    const res = await axios.get(`/api/products/${id}`)
    return res.data.product
  }
  const getProductDetailQuery = useQuery(
    ['getProductDetail', productId],
    getProductDetailApi,
    {
      enabled: !!productId,
    },
  )
  return { getProductDetailQuery }
}

export default useProductDetailData
