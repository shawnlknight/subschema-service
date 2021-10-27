import { getProductsInventory } from '../services/inventory'
import { Product } from '../typings/generated'

export const getProductsForCompany = (id: string): Product[] => {
  const products = getProductsInventory()
  return products.filter((product) => product.companyId === id)
}
