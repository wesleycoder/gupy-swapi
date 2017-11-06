import api from '../graphqlEndpoint'

const PREFIX = 'SPECIES__'
export const REQUEST_SPECIES = `${PREFIX}REQUEST_SPECIES`
export const RECEIVE_SPECIES = `${PREFIX}RECEIVE_SPECIES`
export const REQUEST_DETAILS = `${PREFIX}REQUEST_DETAILS`
export const RECEIVE_DETAILS = `${PREFIX}RECEIVE_DETAILS`

const query = `
  query species {
    species (order: "name") {
      id
      name
    }
  }
  query specieDetails ($specieId: Int) {
    specie: species (
     where: { id: $specieId }
    ) {
      id
      name
      classification
      designation
      average_height
      skin_colors
      hair_colors
      eye_colors
      average_lifespan
      language
      HomeworldId
    }
  }
`

const startRequest = () => ({
  type: REQUEST_SPECIES
})

export const receiveSpecies = (species) => ({
  type: RECEIVE_SPECIES,
  species
})

const startRequestDetails = (specieId) => ({
  type: REQUEST_DETAILS,
  specieId
})

export const receiveDetails = (specie) => ({
  type: RECEIVE_DETAILS,
  specie
})

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

export const fetchDetails = (specieId) =>
  (dispatch) => {
    dispatch(startRequestDetails())
    return api({
      query,
      operationName: 'specieDetails',
      vars: {
        specieId
      }
    })
    .then(json => json.data)
    .then(
      data => dispatch(receiveDetails(data.specie[0])),
      err => console.log('err:', err)
    )
  }

export default {
  REQUEST_SPECIES,
  RECEIVE_SPECIES,
  REQUEST_DETAILS,
  RECEIVE_DETAILS
}
