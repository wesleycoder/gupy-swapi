import api from '../graphqlEndpoint'

const PREFIX = 'STARSHIPS__'
export const REQUEST_STARSHIPS = `${PREFIX}REQUEST_STARSHIPS`
export const RECEIVE_STARSHIPS = `${PREFIX}RECEIVE_STARSHIPS`
export const REQUEST_DETAILS = `${PREFIX}REQUEST_DETAILS`
export const RECEIVE_DETAILS = `${PREFIX}RECEIVE_DETAILS`

const query = `
  query starships {
    starships (order: "name") {
      id
      name
    }
  }
  query starshipDetails ($starshipId: Int) {
    starship: starships (
    where: { id: $starshipId }
    ) {
      id
      name
      model
      manufacturer
      cost_in_credits
      length
      max_atmosphering_speed
      crew
      passengers
      cargo_capacity
      consumables
      hyperdrive_rating
      MGLT
      starship_class
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

const requestDetails = (starshipId) => ({
  type: REQUEST_DETAILS,
  starshipId
})

export const receiveDetails = (starship) => ({
  type: RECEIVE_DETAILS,
  starship
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

export const fetchDetails = (starshipId) =>
  (dispatch) => {
    dispatch(requestDetails(starshipId))
    return api({
      query,
      operationName: 'starshipDetails',
      vars: {
        starshipId
      }
    })
    .then(json => json.data)
    .then(
      data => dispatch(receiveDetails(data.starship[0])),
      err => console.log('err:', err)
    )
  }

export default {
  REQUEST_STARSHIPS,
  RECEIVE_STARSHIPS,
  REQUEST_DETAILS,
  RECEIVE_DETAILS
}
