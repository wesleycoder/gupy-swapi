import api from '../graphqlEndpoint'

export const REQUEST_STARSHIPS = 'REQUEST_STARSHIPS'
export const RECEIVE_STARSHIPS = 'RECEIVE_STARSHIPS'

const startRequest = () => ({
  type: REQUEST_STARSHIPS
})

const query = `
  query starships {
    starships (order: "name") {
      name
    }
  }
`

export const fetchStarships = () =>
  (dispatch) => {
    dispatch(startRequest())
    return api({
      query,
      operationName: 'starships'
    })
    .then(json => json.data)
    .then(
      data => dispatch(receiveStarships(data.starships)),
      err => console.log('err:', err)
    )
  }

export const receiveStarships = (starships) => ({
  type: RECEIVE_STARSHIPS,
  starships
})

export default {
  REQUEST_STARSHIPS,
  RECEIVE_STARSHIPS
}
