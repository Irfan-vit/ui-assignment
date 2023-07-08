import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
const useProductsData = () => {
  const getProductsApi = async () => {
    const res = await axios.get('/api/products')
    return res.data.products
  }
  const getProductsQuery = useQuery(['getProducts'], getProductsApi)
  return { getProductsQuery }
}

export default useProductsData
