const inventoryTypes = /* GraphQL */ `
  schema {
    query: Query
  }

  # the schema allows the following query:
  type Query {
    products: [Product]
    product(id: Int!): Product
    company(id: Int!): Company
    companies: [Company]
  }

  type Company {
    id: Int!
    name: String
    """
    the list of products by a company
    """
    products: [Product]
  }

  type Product {
    id: Int!
    companyId: Int!
    name: String
    description: String
    company: Company
  }
`

export default inventoryTypes
