import { Product } from '../typings/generated'
import { getProducts } from '.'

export const getProductById = (id: number): Product => {
  const products = getProducts()
  return products.find((product) => product.id === id)
}
