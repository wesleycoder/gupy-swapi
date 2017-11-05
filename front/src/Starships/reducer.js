import { REQUEST_STARSHIPS, RECEIVE_STARSHIPS } from './actions'

const defaultState = {
  loaded: false,
  starships: []
}

export const Starships =
  (state = defaultState, action) => {
    switch (action.type) {
      case REQUEST_STARSHIPS: {
        return Object.assign({
          loaded: false
        }, state)
      }

      case RECEIVE_STARSHIPS: {
        const { starships } = action
        return Object.assign({}, state, {
          loaded: true,
          starships
        })
      }

      default: {
        return state
      }
    }
  }

export default Starships
