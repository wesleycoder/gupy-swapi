import clone from 'lodash.clone'
import { REQUEST_SPECIES, RECEIVE_SPECIES } from './actions'

const defaultState = {
  loaded: false,
  species: []
}

export const Species =
  (state = defaultState, action) => {
    switch (action.type) {
      case REQUEST_SPECIES: {
        return {
          ...clone(state),
          loaded: false
        }
      }

      case RECEIVE_SPECIES: {
        return {
          ...clone(state),
          loaded: true,
          species: action.species
        }
      }

      default: {
        return clone(state)
      }
    }
  }

export default Species
