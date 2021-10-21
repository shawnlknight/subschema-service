import * as express from 'express'
import { graphqlHTTP } from 'express-graphql'
import inventorySchema from './graphql/schema'

const app = async () => {
  const server = express()
  server.use(
    '/graphql',
    graphqlHTTP((request) => ({
      schema: inventorySchema,
      context: { authHeader: request.headers.authorization },
      graphiql: true,
    })),
  )
  server.listen(4001, () => {
    console.log('subschema service running at http://localhost:4001/graphql')
  })
}

export default app()
