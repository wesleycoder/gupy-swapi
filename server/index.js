import Koa from 'koa'
import graphqlHTTP from 'koa-graphql-next'
import schema from '../schema'

const APP_PORT = process.env.PORT || 3000

const app = new Koa()

app.use(graphqlHTTP({
  schema: schema,
  graphiql: true
}));

app.listen(APP_PORT, () => console.log(`App running on port ${APP_PORT}`))

export default app;
