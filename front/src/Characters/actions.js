import api from '../graphqlEndpoint'

const PREFIX = 'CHARACTERS__'
export const REQUEST_CHARACTERS = `${PREFIX}REQUEST_CHARACTERS`
export const RECEIVE_CHARACTERS = `${PREFIX}RECEIVE_CHARACTERS`
export const REQUEST_DETAILS = `${PREFIX}REQUEST_DETAILS`
export const RECEIVE_DETAILS = `${PREFIX}RECEIVE_DETAILS`

const query = `
  query characters {
    characters: people (order: "name") {
      id
      name
    }
  }
  query characterDetails ($characterId: Int) {
    character: people (
     where: { id: $characterId }
    ) {
      id
      name
      height
      mass
      hair_color
      skin_color
      eye_color
      birth_year
      gender
      HomeworldId
      SpecieId
    }
  }
`

const startRequest = () => ({
  type: REQUEST_CHARACTERS
})

export const receiveCharacters = (characters) => ({
  type: RECEIVE_CHARACTERS,
  characters
})

const startRequestDetails = (characterId) => ({
  type: REQUEST_DETAILS,
  characterId
})

export const receiveDetails = (character) => ({
  type: RECEIVE_DETAILS,
  character
})

export const fetchCharacters = () =>
  (dispatch) => {
    dispatch(startRequest())
    return api({
      query,
      operationName: 'characters'
    })
      .then(json => json.data)
      .then(
        data => dispatch(receiveCharacters(data.characters)),
        err => console.log('err:', err)
      )
  }

export const fetchDetails = (characterId) =>
  (dispatch) => {
    dispatch(startRequestDetails(characterId))
    return api({
      query,
      operationName: 'characterDetails',
      vars: {
        characterId
      }
    })
    .then(json => json.data)
    .then(
      data => dispatch(receiveDetails(data.character[0])),
      err => console.log('err:', err)
    )
  }

export default {
  REQUEST_CHARACTERS,
  RECEIVE_CHARACTERS
}
