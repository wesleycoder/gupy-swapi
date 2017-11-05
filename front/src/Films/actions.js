import api from '../graphqlEndpoint'

export const REQUEST_FILMS = 'REQUEST_FILMS'
export const RECEIVE_FILMS = 'RECEIVE_FILMS'
export const REQUEST_DETAILS = 'REQUEST_DETAILS'
export const RECEIVE_DETAILS = 'RECEIVE_DETAILS'
export const TOGGLE_DETAILS = 'TOGGLE_DETAILS'
export const TOGGLE_OPENING_CRAWL = 'TOGGLE_OPENING_CRAWL'
export const TOGGLE_CHARACTERS = 'TOGGLE_CHARACTERS'

const startRequestFilms = () => ({
  type: REQUEST_FILMS
})

const startRequestDetails = (filmId) => ({
  type: REQUEST_DETAILS,
  filmId
})

const query = `
  query films {
    films (order: "episode_id") {
      id
      episode_id
      title
      release_date
    }
  }
  query filmDetails ($filmId: Int) {
    film: films (
      order: "episode_id",
      where: { id: $filmId }
    ) {
      id
      title
      episode_id
      opening_crawl
      director
      producer
      release_date
      url
      characters (order: "name") {
        id
        name
      }
    }
  }
`

export const toggleDetails = (filmId) => ({
  type: TOGGLE_DETAILS,
  filmId
})

export const toggleOpeningCrawl = (filmId) => ({
  type: TOGGLE_OPENING_CRAWL,
  filmId
})

export const toggleCharacters = (filmId) => ({
  type: TOGGLE_CHARACTERS,
  filmId
})

export const receiveFilms = (films) => ({
  type: RECEIVE_FILMS,
  films
})

export const receiveDetails = (film) => ({
  type: RECEIVE_DETAILS,
  film
})

export const fetchFilms = () =>
  (dispatch) => {
    dispatch(startRequestFilms())
    return api({
      query,
      operationName: 'films'
    })
    .then(json => json.data)
    .then(
      data => dispatch(receiveFilms(data.films)),
      err => console.log('err:', err)
    )
  }

export const fetchDetails = (filmId) =>
  (dispatch) => {
    dispatch(startRequestDetails(filmId))
    return api({
      query,
      operationName: 'filmDetails',
      vars: {
        filmId
      }
    })
    .then(json => json.data)
    .then(
      data => dispatch(receiveDetails(data.film[0])),
      err => console.log('err:', err)
    )
  }

export default {
  REQUEST_FILMS,
  RECEIVE_FILMS,
  REQUEST_DETAILS,
  RECEIVE_DETAILS,
  TOGGLE_DETAILS
}
