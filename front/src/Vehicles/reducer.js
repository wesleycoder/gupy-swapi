import clone from 'lodash.clone'
import {
  REQUEST_VEHICLES,
  RECEIVE_VEHICLES,
  REQUEST_DETAILS,
  RECEIVE_DETAILS
} from './actions'

const defaultState = {
  loaded: false,
  loading: false,
  vehicle: {
    loaded: false,
    loading: false,
  },
  vehicles: {}
}

export const Vehicles =
  (state = defaultState, action) => {
    switch (action.type) {
      case REQUEST_VEHICLES: {
        return {
          ...clone(state),
          loaded: false,
          loading: false
        }
      }

      case RECEIVE_VEHICLES: {
        return {
          ...clone(state),
          loaded: true,
          loading: false,
          vehicles: action.vehicles
            .reduce((vehicles, vehicle) => ({
              ...vehicles,
              [vehicle.id]: vehicle
            }), {})
        }
      }

      case REQUEST_DETAILS: {
        return {
          ...clone(state),
          vehicle: {
            id: action.vehicleId,
            loaded: false,
            loading: true
          }
        }
      }

      case RECEIVE_DETAILS: {
        return {
          ...clone(state),
          vehicle: {
            ...action.vehicle,
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

export default Vehicles
