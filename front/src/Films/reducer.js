import {
  REQUEST_FILMS,
  RECEIVE_FILMS,
  REQUEST_DETAILS,
  RECEIVE_DETAILS,
  TOGGLE_DETAILS,
  TOGGLE_OPENING_CRAWL,
  TOGGLE_CHARACTERS
} from './actions'

const defaultState = {
  loaded: false,
  films: {}
}

export const Films =
  (state = defaultState, action) => {
    switch (action.type) {
      case REQUEST_FILMS: {
        return Object.assign({
          loaded: false
        }, state)
      }

      case RECEIVE_FILMS: {
        const films = {}
        action.films
        .forEach((film) => {
          films[film.id] = film
        })
        return Object.assign({}, state, {
          loaded: true,
          films
        })
      }

      case REQUEST_DETAILS: {
        const films = Object.assign({}, state.films)
        const film = Object.assign({}, films[action.filmId])
        film.loaded = false
        films[action.filmId] = film
        return Object.assign({}, state, {
          films
        })
      }

      case TOGGLE_DETAILS: {
        const films = Object.assign({}, state.films)
        const film = Object.assign({}, films[action.filmId])
        film.showDetails = !film.showDetails
        films[action.filmId] = film
        return Object.assign({}, state, {
          films
        })
      }

      case TOGGLE_OPENING_CRAWL: {
        const films = Object.assign({}, state.films)
        const film = Object.assign({}, films[action.filmId])
        film.showOpeningCrawl = !film.showOpeningCrawl
        films[action.filmId] = film
        return Object.assign({}, state, {
          films
        })
      }

      case TOGGLE_CHARACTERS: {
        const films = Object.assign({}, state.films)
        const film = Object.assign({}, films[action.filmId])
        film.showCharacters = !film.showCharacters
        films[action.filmId] = film
        return Object.assign({}, state, {
          films
        })
      }

      case RECEIVE_DETAILS: {
        const films = Object.assign({}, state.films)
        const film = Object.assign({}, films[action.film.id], action.film)
        film.loaded = true
        films[action.film.id] = film
        return Object.assign({}, state, {
          films
        })
      }

      default: {
        return state
      }
    }
  }

export default Films
