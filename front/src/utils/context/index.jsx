import { createContext, useState } from 'react'

export const ProductContext = createContext()

export const ProductProvider = ({ children }) => {
  let [quantity, setQuantity] = useState(0)

  return (
    <ProductContext.Provider value={{ quantity, setQuantity}}>
      {children}
    </ProductContext.Provider>
  )
}
