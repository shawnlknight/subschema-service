import { addMocksToSchema } from '@graphql-tools/mock'
import { createStore } from './createStore'
import { schema } from '../../graphql/schema'

export const mockSchema = addMocksToSchema({
  schema,
  preserveResolvers: false,
  store: createStore(),
})
