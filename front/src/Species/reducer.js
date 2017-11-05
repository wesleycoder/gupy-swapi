import { REQUEST_SPECIES, RECEIVE_SPECIES } from './actions'

const defaultState = {
  loaded: false,
  species: []
}

export const Species =
  (state = defaultState, action) => {
    switch (action.type) {
      case REQUEST_SPECIES:
        return Object.assign({
          loaded: false
        }, state)

      case RECEIVE_SPECIES:
        const { species } = action
        return Object.assign({}, state, {
          loaded: true,
          species
        })

      default:
        return state
    }
  }

export default Species
