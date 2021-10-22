const orderTypes = /* GraphQL */ `
  # the schema allows the following query:
  type Query {
    order(id: Int!): Order
  }

  type Order {
    id: Int!
    status: OrderStatus
  }

  enum OrderStatus {
    OPEN
    CONFIRMED
    COMPLETE
    CANCELLED
    PROCESSING
  }
`

export default orderTypes
