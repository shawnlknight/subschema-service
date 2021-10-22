import { getProductsInventory } from '../services/inventory'
import { Product } from '../typings/generated'

export const getProductsForCompany = (id: number): Product[] => {
  const products = getProductsInventory()
  return products.filter((product) => product.companyId === id)
}
