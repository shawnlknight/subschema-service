import { Resolvers } from '../../typings/generated'
import { getOrderById } from '../../useCases/getOrderById'

const orderResolvers: Resolvers = {
  Query: {
    order: (_, { id }) => getOrderById(id),
  },
}

export default orderResolvers
