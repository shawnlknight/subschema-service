import { mergeResolvers } from '@graphql-tools/merge'
import inventoryResolvers from './inventory'

const resolversArray = [inventoryResolvers]

export const resolvers = mergeResolvers(resolversArray)
