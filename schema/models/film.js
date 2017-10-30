import db from '../connection'
import { STRING, DATE, INTEGER } from 'sequelize'

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

// export Model by default
export default Film
