import db from '../db'
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

// export Model by default
export default Vehicle
