import db from '../db'
import { STRING, INTEGER } from 'sequelize'

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

// export Model by default
export default Specie
