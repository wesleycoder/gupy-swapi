import clone from 'lodash.clone'
import {
  REQUEST_SPECIES,
  RECEIVE_SPECIES,
  REQUEST_DETAILS,
  RECEIVE_DETAILS
} from './actions'

const defaultState = {
  loaded: false,
  loading: false,
  specie: {
    loaded: false,
    loading: false
  },
  species: {}
}

export const Species =
  (state = defaultState, action) => {
    switch (action.type) {
      case REQUEST_SPECIES: {
        return {
          ...clone(state),
          loaded: false,
          loading: true
        }
      }

      case RECEIVE_SPECIES: {
        return {
          ...clone(state),
          loaded: true,
          loading: false,
          species: action.species
            .reduce((species, specie) => ({
              ...species,
              [specie.id]: specie
            }), {})
        }
      }

      case REQUEST_DETAILS: {
        return {
          ...clone(state),
          specie: {
            id: action.specieId,
            loaded: false,
            loading: true
          }
        }
      }

      case RECEIVE_DETAILS: {
        return {
          ...clone(state),
          specie: {
            ...action.specie,
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

export default Species
