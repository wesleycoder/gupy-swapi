import swapi, { FILMS, PEOPLE, PLANETS, SPECIES, STARSHIPS, VEHICLES } from 'swapi-promise'
import connection from '../schema/connection'
import { Film, Person, Planet, Specie, Starship, Vehicle } from '../schema/models'

const sanitize = original => {
  const obj = Object.assign({}, original)
  Object.keys(obj).forEach((k) => {
    if (obj[k] === 'unknown') {
      obj[k] = null
    }
    if (k === 'url') {
      obj.id = obj[k].replace(/https\:\/\/swapi\.co\/api\/(.*)\/(.*)\//, '$2')
    }
  })
  return obj
}

connection.sync({ force: true })
.then(async () => {
    await swapi.get(FILMS)
      .then(async res => {
        await res.map(async (film) => await Film.create(sanitize(film)))
        await Film.sync()
      })
      .catch(err => console.error(err))
    await swapi.get(PEOPLE)
      .then(async res => {
        await res.map(async (person) => await Person.create(sanitize(person)))
        await Person.sync()
      })
      .catch(err => console.error(err))
    await swapi.get(PLANETS)
      .then(async res => {
        await res.map(async (planet) => await Planet.create(sanitize(planet)))
        await Planet.sync()
      })
      .catch(err => console.error(err))
    await swapi.get(SPECIES)
      .then(async res => {
        await res.map(async (specie) => await Specie.create(sanitize(specie)))
        await Specie.sync()
      })
      .catch(err => console.error(err))
    await swapi.get(STARSHIPS)
      .then(async res => {
        await res.map(async (starship) => await Starship.create(sanitize(starship)))
        await Starship.sync()
      })
      .catch(err => console.error(err))
    await swapi.get(VEHICLES)
      .then(async res => {
        await res.map(async (vehicle) => await Vehicle.create(sanitize(vehicle)))
        await Vehicle.sync()
      })
      .catch(err => console.error(err))
  })
  .catch(err => console.error('DB connection Failed!', err))
