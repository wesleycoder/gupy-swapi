import { GraphQLObjectType, GraphQLList } from 'graphql'
import { attributeFields, resolver } from 'graphql-sequelize';

// import and export pairs for cleaner imports
import { test, Test } from './test'
export { test, Test } from './test'

import { film, Film } from './film'
export { film, Film } from './film'

import { person, Person } from './person'
export { person, Person } from './person'

import { planet, Planet } from './planet'
export { planet, Planet } from './planet'

import { specie, Specie } from './specie'
export { specie, Specie } from './specie'

import { starship, Starship } from './starship'
export { starship, Starship } from './starship'

import { vehicle, Vehicle } from './vehicle'
export { vehicle, Vehicle } from './vehicle'

// RootQueryType definition
export const root = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    tests: {
      type: new GraphQLList(test),
      resolve: resolver(Test)
    },
    planets: {
      type: new GraphQLList(planet),
      resolve: resolver(Planet)
    }
  }
})

// export all Models by default
export default {
  Test,
  Film,
  Person,
  Planet,
  Specie,
  Starship,
  Vehicle
}
