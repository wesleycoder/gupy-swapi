import api from '../graphqlEndpoint'

export const REQUEST_CHARACTERS = 'REQUEST_CHARACTERS'
export const RECEIVE_CHARACTERS = 'RECEIVE_CHARACTERS'

const startRequest = () => ({
  type: REQUEST_CHARACTERS
})

export const fetchCharacters = () =>
  (dispatch) => {
    dispatch(startRequest())
    return api(`{
      people (order: "name") {
        name
      }
    }`)
      .then(json => json.data)
      .then(
        data => dispatch(receiveCharacters(data.people)),
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
