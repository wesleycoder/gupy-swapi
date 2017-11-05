import { REQUEST_PLANETS, RECEIVE_PLANETS } from './actions'

const defaultState = {
  loaded: false,
  planets: []
}

export const Planets =
  (state = defaultState, action) => {
    switch (action.type) {
      case REQUEST_PLANETS:
        return Object.assign({
          loaded: false
        }, state)

      case RECEIVE_PLANETS:
        const { planets } = action
        return Object.assign({}, state, {
          loaded: true,
          planets
        })

      default:
        return state
    }
  }

export default Planets
