import clone from 'lodash.clone'
import { REQUEST_STARSHIPS, RECEIVE_STARSHIPS } from './actions'

const defaultState = {
  loaded: false,
  starships: []
  loading: false,
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
        }
      }

      default: {
        return clone(state)
      }
    }
  }

export default Starships
