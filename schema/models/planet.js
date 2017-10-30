import db from '../connection'
import { GraphQLObjectType } from 'graphql'
import { attributeFields } from 'graphql-sequelize';
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

// By convention all graphql types start with lower case letters
export const planet = new GraphQLObjectType({
  name: 'Planet',
  description: 'A Planet',
  fields: Object.assign(attributeFields(Planet), {})
})

// export Model by default
export default Planet
