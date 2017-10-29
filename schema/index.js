import Sequelize from 'sequelize'
import { root } from './models'
import connection from './connection'
import { makeExecutableSchema } from 'graphql-tools'
import { GraphQLSchema } from 'graphql'

export const db = connection.sync()
  .then(() => console.log('Init DB Success!'))
  .catch(err => console.error('Init DB Failed!', err))

export const schema = new GraphQLSchema({
  query: root
})

export default {
  db,
  schema
}
