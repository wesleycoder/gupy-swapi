import api from '../graphqlEndpoint'

const PREFIX = 'FILMS__'
export const REQUEST_FILMS = `${PREFIX}REQUEST_FILMS`
export const RECEIVE_FILMS = `${PREFIX}RECEIVE_FILMS`
export const REQUEST_DETAILS = `${PREFIX}REQUEST_DETAILS`
export const RECEIVE_DETAILS = `${PREFIX}RECEIVE_DETAILS`
export const TOGGLE_OPENING_CRAWL = `${PREFIX}TOGGLE_OPENING_CRAWL`
export const TOGGLE_CHARACTERS = `${PREFIX}TOGGLE_CHARACTERS`

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
      where: { id: $filmId }
    ) {
      id
      title
      episode_id
      opening_crawl
      director
      producer
      release_date
      characters (order: "name") {
        id
        name
      }
    }
  }
`

const requestFilms = () => ({
  type: REQUEST_FILMS
})

export const receiveFilms = (films) => ({
  type: RECEIVE_FILMS,
  films
})

const requestDetails = (filmId) => ({
  type: REQUEST_DETAILS,
  filmId
})

export const receiveDetails = (film) => ({
  type: RECEIVE_DETAILS,
  film
})

export const toggleOpeningCrawl = (filmId) => ({
  type: TOGGLE_OPENING_CRAWL,
  filmId
})

export const toggleCharacters = (filmId) => ({
  type: TOGGLE_CHARACTERS,
  filmId
})

export const fetchFilms = () =>
  (dispatch) => {
    dispatch(requestFilms())
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
    dispatch(requestDetails(filmId))
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
  RECEIVE_DETAILS
}
