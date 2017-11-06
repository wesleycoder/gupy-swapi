import clone from 'lodash.clone'
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
  loading: false,
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
        return {
          ...clone(state),
          loaded: false,
          loading: true,
          films: {}
        }
      }

      case RECEIVE_FILMS: {
        return {
          ...clone(state),
          loaded: true,
          loading: false,
          films: action.films
            .reduce((films, film) => ({
              ...films,
              [film.id]: film
            }), {})
        }
      }

      case REQUEST_DETAILS: {
        return {
          ...clone(state),
          film: {
            id: action.filmId,
            loaded: false,
            loading: true
          }
        }
      }

      case RECEIVE_DETAILS: {
        return {
          ...clone(state),
          film: {
            ...action.film,
            loaded: true,
            loading: false
          }
        }
      }

      case TOGGLE_OPENING_CRAWL: {
        return {
          ...clone(state),
          film: {
            ...state.film,
            showOpeningCrawl: !state.film.showOpeningCrawl
          }
        }
      }

      case TOGGLE_CHARACTERS: {
        return {
          ...clone(state),
          film: {
            ...state.film,
            showCharacters: !state.film.showCharacters
          }
        }
      }

      default: {
        return clone(state)
      }
    }
  }

export default Films
