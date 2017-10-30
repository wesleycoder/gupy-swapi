import Koa from 'koa'
import graphqlHTTP from 'koa-graphql-next'
import { db, schema } from '../schema'

const APP_PORT = process.env.PORT || 3000

const app = new Koa()

app.use(graphqlHTTP({
  schema,
  graphiql: true
}))

db.then(() =>
  app.listen(APP_PORT, () =>
    console.log(`App running on port ${APP_PORT} http://0.0.0.0:${APP_PORT}/graphql`)
  )
)

export default app
