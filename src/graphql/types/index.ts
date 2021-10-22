import { mergeTypeDefs } from '@graphql-tools/merge'
import inventoryTypes from './inventory'
import orderTypes from './order'

const types = [inventoryTypes, orderTypes]

export const typeDefs = mergeTypeDefs(types)
