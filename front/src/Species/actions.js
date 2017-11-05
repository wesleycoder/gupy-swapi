import api from '../graphqlEndpoint'

export const REQUEST_SPECIES = 'REQUEST_SPECIES'
export const RECEIVE_SPECIES = 'RECEIVE_SPECIES'

const startRequest = () => ({
  type: REQUEST_SPECIES
})

const query = `
  query species {
    species (order: "name") {
      name
    }
  }
`

export const fetchSpecies = () =>
  (dispatch) => {
    dispatch(startRequest())
    return api({
      query,
      operationName: 'species'
    })
    .then(json => json.data)
    .then(
      data => dispatch(receiveSpecies(data.species)),
      err => console.log('err:', err)
    )
  }

export const receiveSpecies = (species) => ({
  type: RECEIVE_SPECIES,
  species
})

export default {
  REQUEST_SPECIES,
  RECEIVE_SPECIES
}