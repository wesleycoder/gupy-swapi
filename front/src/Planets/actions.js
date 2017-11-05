import api from '../graphqlEndpoint'

export const REQUEST_PLANETS = 'REQUEST_PLANETS'
export const RECEIVE_PLANETS = 'RECEIVE_PLANETS'

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
