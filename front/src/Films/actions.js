import api from '../graphqlEndpoint'

export const REQUEST_FILMS = 'REQUEST_FILMS'
export const RECEIVE_FILMS = 'RECEIVE_FILMS'

const startRequest = () => ({
  type: REQUEST_FILMS
})

export const fetchFilms = () =>
  (dispatch) => {
    dispatch(startRequest())
    return api(`{
      films (order: "episode_id") {
        title
      }
    }`)
    .then(json => json.data)
    .then(
      data => dispatch(receiveFilms(data.films)),
      err => console.log('err:', err)
    )
  }

export const receiveFilms = (films) => ({
  type: RECEIVE_FILMS,
  films
})

export default {
  REQUEST_FILMS,
  RECEIVE_FILMS
}
