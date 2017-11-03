import Sequelize from 'sequelize'
import { root } from './models'
import db from './db'
import { GraphQLSchema } from 'graphql'

export const schema = new GraphQLSchema({
  query: root
})

export default schema
