import { Company, Product } from '../../typings/generated'
import { companies, products } from '../../mockData/inventory'

/**
 *
 * The following functions could be calls to an external service
 * that return different types of inventory data.
 */
export const getProductsInventory = (): Product[] => products

export const getCompaniesData = (): Company[] => companies
