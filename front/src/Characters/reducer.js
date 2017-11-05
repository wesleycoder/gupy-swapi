import { REQUEST_CHARACTERS, RECEIVE_CHARACTERS } from './actions'

const defaultState = {
  loaded: false,
  characters: []
}

export const Characters =
  (state = defaultState, action) => {
    switch (action.type) {
      case REQUEST_CHARACTERS: {
        return Object.assign({
          loaded: false
        }, state)
      }

      case RECEIVE_CHARACTERS: {
        const { characters } = action
        return Object.assign({}, state, {
          loaded: true,
          characters
        })
      }

      default: {
        return state
      }
    }
  }

export default Characters
