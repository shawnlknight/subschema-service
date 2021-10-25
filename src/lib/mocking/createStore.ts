import { createMockStore, IMockStore } from '@graphql-tools/mock'
import { seedMocks } from './utils/seedMocks'
import { schema } from '../../graphql/schema'

export const createStore = (): IMockStore => {
  const store = createMockStore({
    schema,
    mocks: {},
  })
  seedMocks(store)
  return store
}
