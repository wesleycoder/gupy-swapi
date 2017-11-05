import api from '../graphqlEndpoint'

export const REQUEST_CHARACTERS = 'REQUEST_CHARACTERS'
export const RECEIVE_CHARACTERS = 'RECEIVE_CHARACTERS'

const startRequest = () => ({
  type: REQUEST_CHARACTERS
})

const query = `
  query characters {
    characters: people (order: "name") {
      name
    }
  }
`

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

export const receiveCharacters = (characters) => ({
  type: RECEIVE_CHARACTERS,
  characters
})

export default {
  REQUEST_CHARACTERS,
  RECEIVE_CHARACTERS
}
