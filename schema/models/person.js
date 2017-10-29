import db from '../connection'
import { GraphQLObjectType } from 'graphql'
import { attributeFields } from 'graphql-sequelize';
import { STRING, INTEGER } from 'sequelize'
// import Film from './film'
// import Specie from './specie'

// By convention all Models start with upper case letters (like classes)
export const Person = db.define('Person', {
	name: STRING,
	height: INTEGER,
	mass: INTEGER,
	hair_color: STRING,
	skin_color: STRING,
	eye_color: STRING,
	birth_year: STRING,
	gender: STRING,
	// homeworld: STRING,
	// films: ARRAY(STRING),
	// species: ARRAY(STRING),
	// vehicles: ARRAY(STRING),
	// starships: ARRAY(STRING),
	url: STRING
})

// Person.belongsToMany(Film, { through: 'FilmPerson' })
// Person.hasMany(Specie, { as: 'species' })

// By convention all graphql types start with lower case letters
export const person = new GraphQLObjectType({
  name: 'Person',
  description: 'A Person',
  fields: Object.assign(attributeFields(Person), {})
})

// export Model by default
export default Person
