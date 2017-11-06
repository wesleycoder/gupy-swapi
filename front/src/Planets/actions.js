import api from '../graphqlEndpoint'

const PREFIX = 'PLANETS__'
export const REQUEST_PLANETS = `${PREFIX}REQUEST_PLANETS`
export const RECEIVE_PLANETS = `${PREFIX}RECEIVE_PLANETS`
export const REQUEST_DETAILS = `${PREFIX}REQUEST_DETAILS`
export const RECEIVE_DETAILS = `${PREFIX}RECEIVE_DETAILS`

const query = `
  query planets {
    planets (order: "name") {
      id
      name
    }
  }
  query planetDetails ($planetId: Int) {
    planet: planets (
     where: { id: $planetId }
    ) {
      id
      name
      climate
      diameter
      gravity
      orbital_period
      population
      rotation_period
      surface_water
      terrain
    }
  }
`

const startRequest = () => ({
  type: REQUEST_PLANETS
})

export const receivePlanets = (planets) => ({
  type: RECEIVE_PLANETS,
  planets
})

const startRequestDetails = (planetId) => ({
  type: REQUEST_DETAILS,
  planetId
})

export const receiveDetails = (planet) => ({
  type: RECEIVE_DETAILS,
  planet
})

export const fetchPlanets = () =>
  (dispatch) => {
    dispatch(startRequest())
    return api({
      query,
      operationName: 'planets'
    })
    .then(json => json.data)
    .then(
      data => dispatch(receivePlanets(data.planets)),
      err => console.log('err:', err)
    )
  }

export const fetchDetails = (planetId) =>
  (dispatch) => {
    dispatch(startRequestDetails(planetId))
    return api({
      query,
      operationName: 'planetDetails',
      vars: {
        planetId
      }
    })
    .then(json => json.data)
    .then(
      data => dispatch(receiveDetails(data.planet[0])),
      err => console.log('err:', err)
    )
  }

export default {
  REQUEST_PLANETS,
  RECEIVE_PLANETS,
  REQUEST_DETAILS,
  RECEIVE_DETAILS
}
