import { createContext, useContext, useState } from 'react'
const ProductContext = createContext()

const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState(null)
  return (
    <ProductContext.Provider value={{ product, setProduct }}>
      {children}
    </ProductContext.Provider>
  )
}

const useProduct = () => useContext(ProductContext)

export { ProductProvider, useProduct }
