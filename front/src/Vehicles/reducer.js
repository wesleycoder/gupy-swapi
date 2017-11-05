import { REQUEST_VEHICLES, RECEIVE_VEHICLES } from './actions'

const defaultState = {
  loaded: false,
  vehicles: []
}

export const Vehicles =
  (state = defaultState, action) => {
    switch (action.type) {
      case REQUEST_VEHICLES:
        return Object.assign({
          loaded: false
        }, state)

      case RECEIVE_VEHICLES:
        const { vehicles } = action
        return Object.assign({}, state, {
          loaded: true,
          vehicles
        })

      default:
        return state
    }
  }

export default Vehicles
