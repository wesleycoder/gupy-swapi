import db from '../connection'
import { STRING, DOUBLE, FLOAT, INTEGER } from 'sequelize'

// By convention all Models start with upper case letters (like classes)
export const Planet = db.define('Planet', {
  climate: STRING,
  diameter: INTEGER,
  // films: ARRAY(STRING),
  gravity: STRING,
  name: STRING,
  orbital_period: INTEGER,
  population: DOUBLE,
  // residents: ARRAY(STRING),
  rotation_period: INTEGER,
  surface_water: FLOAT,
  terrain: STRING,
  url: STRING
})

// export Model by default
export default Planet
