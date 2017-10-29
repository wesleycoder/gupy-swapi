import db from '../connection'
import { GraphQLObjectType } from 'graphql'
import { attributeFields } from 'graphql-sequelize';
import { STRING, INTEGER, FLOAT } from 'sequelize'

// By convention all Models start with upper case letters (like classes)
export const Starship = db.define('Starship', {
	name: STRING,
	model: STRING,
	manufacturer: STRING,
	cost_in_credits: INTEGER,
	length: INTEGER,
	max_atmosphering_speed: STRING,
	crew: INTEGER,
	passengers: INTEGER,
	cargo_capacity: INTEGER,
	consumables: STRING,
	hyperdrive_rating: FLOAT(10, 2),
	MGLT: INTEGER,
	starship_class: STRING,
	// pilots: [],
	// films: ARRAY(STRING),
	url: STRING
})

// By convention all graphql types start with lower case letters
export const starship = new GraphQLObjectType({
  name: 'Starship',
  description: 'A Starship',
  fields: Object.assign(attributeFields(Starship), {})
})

// export Model by default
export default Starship
