import db from '../connection'
import { GraphQLObjectType } from 'graphql'
import { attributeFields } from 'graphql-sequelize';
import { STRING } from 'sequelize'

// By convention all Models start with upper case letters (like classes)
export const Test = db.define('Test', {
  title: STRING
})

// By convention all graphql types start with lower case letters
export const test = new GraphQLObjectType({
  name: 'Test',
  description: 'A test',
  fields: Object.assign(attributeFields(Test), {})
})

// export Model by default
export default Test
