import { getProductsInventory } from '../services/inventory'
import { Product } from '../typings/generated'

export const getProducts = (): Product[] => getProductsInventory()
