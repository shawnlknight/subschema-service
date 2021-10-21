import { mergeTypeDefs } from '@graphql-tools/merge'
import inventoryTypes from './inventory'

const types = [inventoryTypes]

export const typeDefs = mergeTypeDefs(types)
