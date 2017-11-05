import { REQUEST_FILMS, RECEIVE_FILMS } from './actions'

const defaultState = {
  loaded: false,
  films: []
}

export const FilmsReducer =
  (state = defaultState, action) => {
    switch (action.type) {
      case REQUEST_FILMS:
        return Object.assign({
          loaded: false
        }, state)

      case RECEIVE_FILMS:
        const { films } = action
        return Object.assign({}, state, {
          loaded: true,
          films
        })

      default:
        return state
    }
  }

export default FilmsReducer
