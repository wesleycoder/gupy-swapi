import Koa from 'koa'
import graphqlHTTP from 'koa-graphql-next'
import fs from 'fs'
import https from 'https'
import cors from '@koa/cors'
import { resolve } from 'path'
import { schema } from '../schema'

import db from '../schema/db'

const APP_PORT = process.env.PORT || 3000

const app = new Koa()

app.use(cors())

app.use(graphqlHTTP({
  schema,
  graphiql: true
}))

db.sync()
  .then(() =>
    https.createServer({
      key: fs.readFileSync(resolve(__dirname, './server.key')),
      cert: fs.readFileSync(resolve(__dirname, './server.cert'))
    }, app.callback())
      .listen(APP_PORT, () =>
        console.log(`App running on port ${APP_PORT} http://0.0.0.0:${APP_PORT}/graphql`)
      )
  )
  .catch(err => console.error('DB connection Failed!', err))

export default app
