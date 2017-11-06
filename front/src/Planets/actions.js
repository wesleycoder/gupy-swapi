import api from '../graphqlEndpoint'

const PREFIX = 'PLANETS__'
export const REQUEST_PLANETS = `${PREFIX}REQUEST_PLANETS`
export const RECEIVE_PLANETS = `${PREFIX}RECEIVE_PLANETS`

const startRequest = () => ({
  type: REQUEST_PLANETS
})

const query = `
  query planets {
    planets (order: "name") {
      name
    }
  }
`

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

export const receivePlanets = (planets) => ({
  type: RECEIVE_PLANETS,
  planets
})

export default {
  REQUEST_PLANETS,
  RECEIVE_PLANETS
}
