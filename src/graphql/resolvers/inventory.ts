import { Resolvers } from '../../typings/generated'
import {
  getProductsForCompany,
  getCompanyForProduct,
  getProducts,
  getCompanies,
  getCompanyById,
  getProductById,
} from '../../useCases'

const inventoryResolvers: Resolvers = {
  Query: {
    products: () => getProducts(),
    product: (_, { id }) => getProductById(id),
    companies: () => getCompanies(),
    company: (_, { id }) => getCompanyById(id),
  },
  Company: {
    products: (company) => getProductsForCompany(company.id),
  },
  Product: {
    company: (product) => getCompanyForProduct(product.companyId),
  },
}

export default inventoryResolvers
