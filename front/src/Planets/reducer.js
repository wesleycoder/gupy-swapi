import clone from 'lodash.clone'
import {
  REQUEST_PLANETS,
  RECEIVE_PLANETS,
  REQUEST_DETAILS,
  RECEIVE_DETAILS
} from './actions'

const defaultState = {
  loaded: false,
  planet: {},
  planets: {}
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
        // console.log(action.planets)
        return {
          ...clone(state),
          loaded: true,
          planets: action.planets
            .reduce((planets, planet) => ({
              ...planets,
              [planet.id]: planet
            }), {})
        }
      }

      case REQUEST_DETAILS: {
        return {
          ...clone(state),
          planet: {
            id: action.planetId,
            loaded: false,
            loading: true
          }
        }
      }

      case RECEIVE_DETAILS: {
        return {
          ...clone(state),
          planet: {
            ...action.planet,
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

export default Planets
