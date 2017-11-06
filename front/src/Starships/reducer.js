import clone from 'lodash.clone'
import {
  REQUEST_STARSHIPS,
  RECEIVE_STARSHIPS,
  REQUEST_DETAILS,
  RECEIVE_DETAILS
} from './actions'

const defaultState = {
  loaded: false,
  loading: false,
  starship: {
    loaded: false,
    loading: false
  },
  starships: {}
}

export const Starships =
  (state = defaultState, action) => {
    switch (action.type) {
      case REQUEST_STARSHIPS: {
        return {
          ...clone(state),
          loaded: false,
          loading: true
        }
      }

      case RECEIVE_STARSHIPS: {
        return {
          ...clone(state),
          loaded: true,
          loading: false,
          starships: action.starships
            .reduce((starships, starship) => ({
              ...starships,
              [starship.id]: starship
            }), {})
        }
      }

      case REQUEST_DETAILS: {
        return {
          ...clone(state),
          starship: {
            id: action.starshipId,
            loaded: false,
            loading: true
          }
        }
      }

      case RECEIVE_DETAILS: {
        return {
          ...clone(state),
          starship: {
            ...action.starship,
            loaded: true,
            loading: false
          }
        }
      }

      default: {
        return clone(state)
      }
    }
  }

export default Starships
