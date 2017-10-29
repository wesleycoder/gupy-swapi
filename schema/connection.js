import { resolve } from 'path'
import Sequelize from 'sequelize'

const env = process.env.NODE_ENV || 'development'

const db = new Sequelize('gupy-swapi', null, null, {
  dialect: 'sqlite',
  storage: resolve(__dirname, `../db/gupy-swapi-${env.toLowerCase()}.db`),
  operatorsAliases: false
})

export default db
