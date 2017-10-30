import { GraphQLObjectType, GraphQLList } from 'graphql'
import { attributeFields, defaultListArgs, resolver } from 'graphql-sequelize';

export const models = []
export const schemas = []

// import and export pairs for cleaner imports
import { film, Film } from './film'
export { film, Film } from './film'
models.push(Film)
schemas.push(film)

import { person, Person } from './person'
export { person, Person } from './person'
models.push(Film)
schemas.push(film)

import { planet, Planet } from './planet'
export { planet, Planet } from './planet'
models.push(Film)
schemas.push(film)

import { specie, Specie } from './specie'
export { specie, Specie } from './specie'
models.push(Film)
schemas.push(film)

import { starship, Starship } from './starship'
export { starship, Starship } from './starship'
models.push(Film)
schemas.push(film)

import { vehicle, Vehicle } from './vehicle'
export { vehicle, Vehicle } from './vehicle'
models.push(Film)
schemas.push(film)

Planet.hasMany(Person, { as: 'Residents', foreignKey: 'HomeworldId', sourceKey: 'id' })
Person.belongsTo(Planet, { as: 'Homeworld', foreignKey: 'HomeworldId', targetKey: 'id' })

Planet.belongsToMany(Film, { as: 'Films', through: 'PlanetFilms', foreignKey: 'PlanetId', otherKey: 'FilmId' })
Film.belongsToMany(Planet, { as: 'Planets', through: 'PlanetFilms', foreignKey: 'FilmId', otherKey: 'PlanetId' })

Person.belongsToMany(Film, { as: 'Films', through: 'FilmCharacters', foreignKey: 'CharacterId', otherKey: 'FilmId' })
Film.belongsToMany(Person, { as: 'Characters', through: 'FilmCharacters', foreignKey: 'FilmId', otherKey: 'CharacterId' })

Planet.hasMany(Specie, { as: 'Species', foreignKey: 'HomeworldId', 'sourceKey': 'id' })
Specie.belongsTo(Planet, { as: 'Homeworld', foreignKey: 'HomeworldId', 'targetKey': 'id' })
// Specie.belongsToMany(Film, { through: 'FilmPerson' })
// Specie.hasToMany(Specie, { as: 'species' })

// Syncing all model relations
models.forEach(async model => {
  await model.sync()
})

// RootQueryType definition
export const root = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    films: {
      type: new GraphQLList(film),
      args: defaultListArgs(),
      resolve: resolver(Film)
    },
    people: {
      type: new GraphQLList(person),
      args: defaultListArgs(),
      resolve: resolver(Person)
    },
    planets: {
      type: new GraphQLList(planet),
      args: defaultListArgs(),
      resolve: resolver(Planet)
    },
    species: {
      type: new GraphQLList(specie),
      args: defaultListArgs(),
      resolve: resolver(Specie)
    },
    starships: {
      type: new GraphQLList(starship),
      args: defaultListArgs(),
      resolve: resolver(Starship)
    },
    vehicles: {
      type: new GraphQLList(vehicle),
      args: defaultListArgs(),
      resolve: resolver(Vehicle)
    }
  }
})

// export all Models by default
export default {
  models,
  schemas
}
