import clone from 'lodash.clone'
import { REQUEST_VEHICLES, RECEIVE_VEHICLES } from './actions'

const defaultState = {
  loaded: false,
  vehicles: []
}

export const Vehicles =
  (state = defaultState, action) => {
    switch (action.type) {
      case REQUEST_VEHICLES: {
        return {
          ...clone(state),
          loaded: false
        }
      }

      case RECEIVE_VEHICLES: {
        return {
          ...clone(state),
          loaded: true,
          vehicles: action.vehicles
        }
      }

      default: {
        return clone(state)
      }
    }
  }

export default Vehicles
