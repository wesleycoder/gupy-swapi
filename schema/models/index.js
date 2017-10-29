import { GraphQLObjectType, GraphQLList } from 'graphql'
import { attributeFields } from 'graphql-sequelize';

import { schema as Test } from './test.js'

export const root = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    tests: {
      type: new GraphQLList(Test)
    }
  }
})

export default root
