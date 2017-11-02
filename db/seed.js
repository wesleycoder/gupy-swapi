import swapi, { FILMS, PEOPLE, PLANETS, SPECIES, STARSHIPS, VEHICLES } from 'swapi-promise'
import connection from '../schema/connection'
import { Op } from 'sequelize'
import { Film, Person, Planet, Specie, Starship, Vehicle } from '../schema/models'

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

console.log('Running Seed, this may take a while...')
connection.sync({ force: true })
  .then(async () => {
    // Get all resources
    console.log('Getting films')
    await swapi.get(FILMS)
      .then(async res => {
        cache[FILMS] = res
        await Film.bulkCreate(
          await Promise.all(res.map(async (film) => await sanitize(film)))
        )
      })

    console.log('Getting people')
    await swapi.get(PEOPLE)
      .then(async res => {
        cache[PEOPLE] = res
        await Person.bulkCreate(
          await Promise.all(res.map(async (person) => await sanitize(person)))
        )
      })

    console.log('Getting planets')
    await swapi.get(PLANETS)
      .then(async res => {
        cache[PLANETS] = res
        await Planet.bulkCreate(
          await Promise.all(res.map(async (planet) => await sanitize(planet)))
        )
      })

    console.log('Getting species')
    await swapi.get(SPECIES)
      .then(async res => {
        cache[SPECIES] = res
        await Specie.bulkCreate(
          await Promise.all(res.map(async (specie) => await sanitize(specie)))
        )
      })

    console.log('Getting starships')
    await swapi.get(STARSHIPS)
      .then(async res => {
        cache[STARSHIPS] = res
        await Starship.bulkCreate(
          await Promise.all(res.map(async (starship) => await sanitize(starship)))
        )
      })

    console.log('Getting vehicles')
    await swapi.get(VEHICLES)
      .then(async res => {
        cache[VEHICLES] = res
        await Vehicle.bulkCreate(
          await Promise.all(res.map(async (vehicle) => await sanitize(vehicle)))
        )
      })
  })
  .then(() => {
    // Set Planets relations
    console.log('Making planets relations')
    cache[PLANETS]
      .map(async (planetData) => {
        const residents = await Person.findAll({
          where: {
            id: planetData.residents.map((url) => idFromUrl(url))
          }
        })
        const films = await Film.findAll({
          where: {
            id: planetData.films.map((url) => idFromUrl(url))
          }
        })
        await Planet.find({
          where: {
            id: idFromUrl(planetData.url)
          }
        })
          .then(async (planet) => {
            await planet.setResidents(residents)
            await planet.setFilms(films)
          })
      })
    // Set Films Relations
    console.log('Making films relations')
    cache[FILMS]
      .map(async (filmData) => {
        const characters = await Person.findAll({
          where: {
            id: filmData.characters.map((url) => idFromUrl(url))
          }
        })
        await Film.find({
          where: {
            id: idFromUrl(filmData.url)
          }
        })
          .then(async (film) => {
            await film.setCharacters(characters)
          })
      })
    // Set Species Relations
    console.log('Making species relations')
    cache[SPECIES]
      .map(async (specieData) => {
        const homeworld = await Planet.find({
          where: {
            id: idFromUrl(specieData.homeworld)
          }
        })
        const specie = await Specie.find({
          where: {
            id: idFromUrl(specieData.url)
          }
        })
        await specie.setHomeworld(homeworld)
        await Person.update({
          SpecieId: specie.id
        }, {
          where: {
            id: {
              [Op.in]: specieData.people.map((url) => idFromUrl(url))
            }
          }
        })
      })
  })
  .catch(err => console.error('DB connection Failed!', err))
