import { mergeResolvers } from '@graphql-tools/merge'
import inventoryResolvers from './inventory'
import orderResolvers from './order'

const resolversArray = [inventoryResolvers, orderResolvers]

export const resolvers = mergeResolvers(resolversArray)
