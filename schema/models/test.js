import db from '../connection'
import { GraphQLObjectType } from 'graphql'
import { attributeFields } from 'graphql-sequelize';
import { STRING } from 'sequelize'

export const model = db.define('Test', {
  title: STRING
})

export const schema = new GraphQLObjectType({
  name: 'Test',
  description: 'A test',
  fields: Object.assign(attributeFields(model), {})
})

export default {
  schema,
  model
}
