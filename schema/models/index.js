import { GraphQLObjectType, GraphQLList } from 'graphql'
import { attributeFields, defaultListArgs, resolver } from 'graphql-sequelize'

export const models = []
export const schemas = []

// import and export pairs for cleaner imports
import Film from './film'
export { Film } from './film'

import Person from './person'
export { Person } from './person'

import Planet from './planet'
export { Planet } from './planet'

import Specie from './specie'
export { Specie } from './specie'

import Starship from './starship'
export { Starship } from './starship'

import Vehicle from './vehicle'
export { Vehicle } from './vehicle'

// Model Relations
export const PlanetResident = Planet.hasMany(Person, { as: 'Residents', foreignKey: 'HomeworldId', sourceKey: 'id' })
export const PersonHomeworld = Person.belongsTo(Planet, { as: 'Homeworld', foreignKey: 'HomeworldId', targetKey: 'id' })

export const PlanetFilms = Planet.belongsToMany(Film, { as: 'Films', through: 'PlanetFilms', foreignKey: 'PlanetId', otherKey: 'FilmId' })
export const FilmPlanets = Film.belongsToMany(Planet, { as: 'Planets', through: 'PlanetFilms', foreignKey: 'FilmId', otherKey: 'PlanetId' })

export const PersonFilms = Person.belongsToMany(Film, { as: 'Films', through: 'FilmCharacters', foreignKey: 'CharacterId', otherKey: 'FilmId' })
export const FilmCharacters = Film.belongsToMany(Person, { as: 'Characters', through: 'FilmCharacters', foreignKey: 'FilmId', otherKey: 'CharacterId' })

export const PlanetSpecies = Planet.hasMany(Specie, { as: 'Species', foreignKey: 'HomeworldId', sourceKey: 'id' })
export const SpecieHomeworld = Specie.belongsTo(Planet, { as: 'Homeworld', foreignKey: 'HomeworldId', 'targetKey': 'id' })

export const SpeciePeople = Specie.hasMany(Person, { as: 'People', foreignKey: 'SpecieId', sourceKey: 'id' })
export const PersonSpecie = Person.belongsTo(Specie, { as: 'Specie', foreignKey: 'SpecieId', targetKey: 'id' })

export const FilmStarships = Film.belongsToMany(Starship, { as: 'Starships', through: 'FilmStarships', foreignKey: 'FilmId', otherKey: 'StarshipId' })
export const StarshipFilms = Starship.belongsToMany(Film, { as: 'Films', through: 'FilmStarships', foreignKey: 'StarshipId', otherKey: 'FilmId' })

// Syncing all model relations
models.forEach(async model => {
  await model.sync()
  models.push(model)
})

// TODO: Separate Schema logic into separrate file(s)
// GraphQL Types construction
export const personType = new GraphQLObjectType({
  name: 'Person',
  description: 'A Person',
  fields: () => Object.assign(attributeFields(Person), {})
})
schemas.push(personType)

export const filmType = new GraphQLObjectType({
  name: 'Film',
  description: 'A Film',
  fields: () => Object.assign(attributeFields(Film), {
		characters: {
			type: new GraphQLList(personType),
      args: defaultListArgs(),
			resolve: resolver(FilmCharacters)
		}
	})
})
schemas.push(filmType)

export const planetType = new GraphQLObjectType({
  name: 'Planet',
  description: 'A Planet',
  fields: Object.assign(attributeFields(Planet), {})
})
schemas.push(planetType)

export const specieType = new GraphQLObjectType({
  name: 'Specie',
  description: 'A Specie',
  fields: () => Object.assign(attributeFields(Specie), {})
})
schemas.push(specieType)

export const starshipType = new GraphQLObjectType({
  name: 'Starship',
  description: 'A Starship',
  fields: Object.assign(attributeFields(Starship), {})
})
schemas.push(starshipType)

export const vehicleType = new GraphQLObjectType({
  name: 'Vehicle',
  description: 'A Vehicle',
  fields: Object.assign(attributeFields(Vehicle), {})
})
schemas.push(vehicleType)


// RootQueryType definition
export const root = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    films: {
      type: new GraphQLList(filmType),
      args: defaultListArgs(),
      resolve: resolver(Film)
    },
    people: {
      type: new GraphQLList(personType),
      args: defaultListArgs(),
      resolve: resolver(Person)
    },
    planets: {
      type: new GraphQLList(planetType),
      args: defaultListArgs(),
      resolve: resolver(Planet)
    },
    species: {
      type: new GraphQLList(specieType),
      args: defaultListArgs(),
      resolve: resolver(Specie)
    },
    starships: {
      type: new GraphQLList(starshipType),
      args: defaultListArgs(),
      resolve: resolver(Starship)
    },
    vehicles: {
      type: new GraphQLList(vehicleType),
      args: defaultListArgs(),
      resolve: resolver(Vehicle)
    }
  }
})
schemas.push(root)

// export all Models by default
export default {
  models,
  schemas
}
