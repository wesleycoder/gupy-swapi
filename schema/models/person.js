import db from '../db'
import { STRING, INTEGER } from 'sequelize'

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

// export Model by default
export default Person
