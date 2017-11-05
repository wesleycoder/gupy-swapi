import api from '../graphqlEndpoint'

export const REQUEST_STARSHIPS = 'REQUEST_STARSHIPS'
export const RECEIVE_STARSHIPS = 'RECEIVE_STARSHIPS'

const startRequest = () => ({
  type: REQUEST_STARSHIPS
})

export const fetchStarships = () =>
  (dispatch) => {
    dispatch(startRequest())
    return api(`{
      starships (order: "name") {
        name
      }
    }`)
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
