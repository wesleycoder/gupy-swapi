import clone from 'lodash.clone'
import { REQUEST_PLANETS, RECEIVE_PLANETS } from './actions'

const defaultState = {
  loaded: false,
  planets: []
}

export const Planets =
  (state = defaultState, action) => {
    switch (action.type) {
      case REQUEST_PLANETS: {
        return {
          ...clone(state),
          loaded: false
        }
      }

      case RECEIVE_PLANETS: {
        return {
          ...clone(state),
          loaded: true,
          planets: action.planets
        }
      }

      default: {
        return clone(state)
      }
    }
  }

export default Planets
