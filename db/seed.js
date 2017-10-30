import swapi, { FILMS, PEOPLE, PLANETS, SPECIES, STARSHIPS, VEHICLES } from 'swapi-promise'
import connection from '../schema/connection'
import { Op } from 'sequelize'
import { Cache, Film, Person, Planet, Specie, Starship, Vehicle } from '../schema/models'

const cache = {}
const idFromUrl = (url) => url.replace(/https\:\/\/swapi\.co\/api\/(.*)\/(.*)\//, '$2')

const sanitize = original => {
  const obj = Object.assign({}, original)
  Object.keys(obj).forEach((k) => {
    if (obj[k] === 'unknown') {
      obj[k] = null
    }
    if (k === 'url') {
      // Get ID from url
      obj.id = idFromUrl(obj[k])
    }
  })
  return obj
}

connection.sync({ force: true })
  .then(async () => {
    // Get all resources
    await swapi.get(FILMS)
      .then(async res => {
        cache[FILMS] = res
        await Film.bulkCreate(res.map(async (film) => await sanitize(film)))
      })
      .catch(err => console.error(err))

    await swapi.get(PEOPLE)
      .then(async res => {
        cache[PEOPLE] = res
        await Person.bulkCreate(res.map(async (person) => await sanitize(person)))
      })
      .catch(err => console.error(err))

    await swapi.get(PLANETS)
      .then(async res => {
        cache[PLANETS] = res
        await Planet.bulkCreate(res.map(async (planet) => await sanitize(planet)))
      })
      .catch(err => console.error(err))

    await swapi.get(SPECIES)
      .then(async res => {
        cache[SPECIES] = res
        await Specie.bulkCreate(res.map(async (specie) => await sanitize(specie)))
      })
      .catch(err => console.error(err))

    // await swapi.get(STARSHIPS)
    //   .then(async res => {
    //     cache[STARSHIPS] = res
    //     await Starship.bulkCreate(res.map(async (starship) => await sanitize(starship)))
    //   })
    //   .catch(err => console.error(err))

    // await swapi.get(VEHICLES)
    //   .then(async res => {
    //     cache[VEHICLES] = res
    //     await Vehicle.bulkCreate(res.map(async (vehicle) => await sanitize(vehicle)))
    //   })
    //   .catch(err => console.error(err))
  })
  .then(() => {
    // Set Planets relations
    cache[PLANETS]
      .map(async (planet) => {
        const residents = await Person.findAll({
          where: {
            id: planet.residents.map((url) => idFromUrl(url))
          }
        })
        const films = await Film.findAll({
          where: {
            id: planet.films.map((url) => idFromUrl(url))
          }
        })
        await Planet.find({
          where: {
            id: idFromUrl(planet.url)
          }
        })
          .then(async (planet) => {
            await planet.setResidents(residents)
            await planet.setFilms(films)
          })
      })
    // Set Films Relations
    cache[FILMS]
      .map(async (film) => {
        const characters = await Person.findAll({
          where: {
            id: film.characters.map((url) => idFromUrl(url))
          }
        })
        await Film.find({
          where: {
            id: idFromUrl(film.url)
          }
        })
          .then(async (film) => {
            await film.setCharacters(characters)
          })
      })
    cache[SPECIES]
      .map(async (specie) => {
        const homeworld = await Planet.find({
          where: {
            id: idFromUrl(specie.homeworld)
          }
        })
        const people = await Person.findAll({
          where: {
            [Op.in]: specie.people.map((url) => idFromUrl(url))
          }
        })
        console.log('========================')
        console.log('people:', people)
        console.log('========================')

        await Specie.find({
          where: {
            id: idFromUrl(specie.url)
          }
        })
          .then(async (specie) => await specie.setHomeworld(homeworld))
      })
  })
  .catch(err => console.error('DB connection Failed!', err))
