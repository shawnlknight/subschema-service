import * as express from 'express'
import { graphqlHTTP } from 'express-graphql'
import { schema } from './graphql/schema'
import { mockSchema } from './lib/mocking'

// Temporary: Change value to have @graphql-tools/mock
// return mocked values.
const useMockSchema = false

const app = async () => {
  const server = express()
  server.use(
    '/graphql',
    graphqlHTTP((request) => ({
      schema: useMockSchema ? mockSchema : schema,
      context: { authHeader: request.headers.authorization },
      graphiql: true,
    })),
  )
  server.listen(4001, () => {
    console.log('subschema service running at http://localhost:4001/graphql')
  })
}

export default app()
