import db from '../connection'
import { GraphQLObjectType } from 'graphql'
import { attributeFields } from 'graphql-sequelize';
import { STRING, DATE, INTEGER } from 'sequelize'
// import Person from './person'
// import Planet from './planet'
// import Starship from './starship'
// import Vehicle from './vehicle'
// import Specie from './specie'

// By convention all Models start with upper case letters (like classes)
export const Film = db.define('Film', {
	title: STRING,
	episode_id: INTEGER,
	opening_crawl: STRING,
	director: STRING,
	producer: STRING,
	release_date: DATE,
	// characters: ARRAY(STRING),
	// planets: ARRAY(STRING),
	// starships: ARRAY(STRING),
	// vehicles: ARRAY(STRING),
	// species: ARRAY(STRING),
	url: STRING
})

// Film.hasMany(Person, { as: 'characters' })
// Film.hasMany(Planet, { as: 'planets' })
// Film.hasMany(Specie, { as: 'species' })

// By convention all graphql types start with lower case letters
export const film = new GraphQLObjectType({
  name: 'Film',
  description: 'A Film',
  fields: Object.assign(attributeFields(Film), {})
})

// export Model by default
export default Film
