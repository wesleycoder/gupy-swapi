import { resolve } from 'path'
import Sequelize from 'sequelize'

const db = new Sequelize('gupy-swapi', null, null, {
  dialect: 'sqlite',
  storage: resolve(__dirname, '../db/gupy-swapi.db'),
  operatorsAliases: false
})

export default db
