import { Resolvers } from '../../typings/generated'
import {
  getCompanies,
  getProductById,
  getProducts,
  getCompanyById,
} from '../../services/inventory'

const inventoryResolvers: Resolvers = {
  Query: {
    products: () => getProducts(),
    product: (_, { id }) => getProductById(id),
    companies: () => getCompanies(),
    company: (_, { id }) => getCompanyById(id),
  },
  Company: {
    products: (company) => {
      const products = getProducts()
      return products.filter((product) => product.companyId === company.id)
    },
  },
  Product: {
    company: (product) => {
      const companies = getCompanies()
      return companies.find((company) => company.id === product.companyId)
    },
  },
}

export default inventoryResolvers
