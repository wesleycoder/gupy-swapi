import db from '../connection'
import { GraphQLObjectType } from 'graphql'
import { attributeFields } from 'graphql-sequelize';
import { STRING, INTEGER } from 'sequelize'
// import Film from './film'

// By convention all Models start with upper case letters (like classes)
export const Specie = db.define('Specie', {
	name: STRING,
	classification: STRING,
	designation: STRING,
	average_height: INTEGER,
	skin_colors: STRING,
	hair_colors: STRING,
	eye_colors: STRING,
	average_lifespan: INTEGER,
	// homeworld: STRING,
	language: STRING,
	// people: ARRAY(STRING),
	// films: ARRAY(STRING),
	url: STRING
})

// Specie.belongsToMany(Film, { through: 'FilmPerson' })
// Specie.hasToMany(Specie, { as: 'species' })

// By convention all graphql types start with lower case letters
export const specie = new GraphQLObjectType({
  name: 'Specie',
  description: 'A Specie',
  fields: Object.assign(attributeFields(Specie), {})
})

// export Model by default
export default Specie
