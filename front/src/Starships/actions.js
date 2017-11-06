import api from '../graphqlEndpoint'

const PREFIX = 'STARSHIPS__'
export const REQUEST_STARSHIPS = `${PREFIX}REQUEST_STARSHIPS`
export const RECEIVE_STARSHIPS = `${PREFIX}RECEIVE_STARSHIPS`

const query = `
  query starships {
    starships (order: "name") {
      name
    }
  }
`

const requestStarships = () => ({
  type: REQUEST_STARSHIPS
})

export const receiveStarships = (starships) => ({
  type: RECEIVE_STARSHIPS,
  starships
})

export const fetchStarships = () =>
  (dispatch) => {
    dispatch(requestStarships())
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


export default {
  REQUEST_STARSHIPS,
  RECEIVE_STARSHIPS
}
