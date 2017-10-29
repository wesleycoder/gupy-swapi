import db from '../connection'
import { GraphQLObjectType } from 'graphql'
import { attributeFields } from 'graphql-sequelize';
import { STRING, BIGINT, INTEGER, FLOAT } from 'sequelize'

// By convention all Models start with upper case letters (like classes)
export const Vehicle = db.define('Vehicle', {
	name: STRING,
	model: STRING,
	manufacturer: STRING,
	cost_in_credits: BIGINT,
	length: FLOAT(10, 2),
	max_atmosphering_speed: INTEGER,
	crew: INTEGER,
	passengers: INTEGER,
	cargo_capacity: INTEGER,
	consumables: STRING,
	vehicle_class: STRING,
	// pilots: [],
	// films: ARRAY(STRING),
	url: STRING
})

// By convention all graphql types start with lower case letters
export const vehicle = new GraphQLObjectType({
  name: 'Vehicle',
  description: 'A Vehicle',
  fields: Object.assign(attributeFields(Vehicle), {})
})

// export Model by default
export default Vehicle
