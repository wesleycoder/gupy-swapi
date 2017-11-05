import clone from 'lodash.clone'
import merge from 'lodash.merge'
import {
  REQUEST_FILMS,
  RECEIVE_FILMS,
  REQUEST_DETAILS,
  RECEIVE_DETAILS,
  TOGGLE_OPENING_CRAWL,
  TOGGLE_CHARACTERS
} from './actions'

const defaultState = {
  loaded: false,
  film: {
    loaded: false,
    loading: false
  },
  films: {}
}

export const Films =
  (state = defaultState, action) => {
    switch (action.type) {
      case REQUEST_FILMS: {
        return merge(clone(state), { loaded: false })
      }

      case RECEIVE_FILMS: {
        const films = {}
        action.films
        .forEach((film) => {
          films[film.id] = film
        })
        return merge(clone(state), {
          loaded: true,
          films
        })
      }

      case REQUEST_DETAILS: {
        const film = { id: action.filmId }
        film.loaded = false
        film.loading = true
        return merge(clone(state), { film })
      }

      case RECEIVE_DETAILS: {
        const film = merge(clone(state.films[action.film.id]), action.film)
        film.loaded = true
        film.loading = false
        return merge(clone(state), { film })
      }

      case TOGGLE_OPENING_CRAWL: {
        const film = clone(state.film)
        film.showOpeningCrawl = !film.showOpeningCrawl
        return merge(clone(state), { film })
      }

      case TOGGLE_CHARACTERS: {
        const film = clone(state.film)
        film.showCharacters = !film.showCharacters
        return merge(clone(state), { film })
      }

      default: {
        return clone(state)
      }
    }
  }

export default Films
