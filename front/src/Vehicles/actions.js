import api from '../graphqlEndpoint'

const PREFIX = 'VEHICLES__'
export const REQUEST_VEHICLES = `${PREFIX}REQUEST_VEHICLES`
export const RECEIVE_VEHICLES = `${PREFIX}RECEIVE_VEHICLES`
export const REQUEST_DETAILS = `${PREFIX}REQUEST_DETAILS`
export const RECEIVE_DETAILS = `${PREFIX}RECEIVE_DETAILS`

const query = `
  query vehicles {
    vehicles (order: "name") {
      id
      name
    }
  }
  query vehicleDetails ($vehicleId: Int) {
    vehicle: vehicles (
      where: { id: $vehicleId }
    ) {
      id
      name
      model
      manufacturer
      cost_in_credits
      length
      max_atmosphering_speed
      crew
      passengers
      cargo_capacity
      consumables
      vehicle_class
    }
  }
`

const requestVehicles = () => ({
  type: REQUEST_VEHICLES
})

export const receiveVehicles = (vehicles) => ({
  type: RECEIVE_VEHICLES,
  vehicles
})

const requestDetails = (vehicleId) => ({
  type: REQUEST_DETAILS,
  vehicleId
})

export const receiveDetails = (vehicle) => ({
  type: RECEIVE_DETAILS,
  vehicle
})

export const fetchVehicles = () =>
  (dispatch) => {
    dispatch(requestVehicles())
    return api({
      query,
      operationName: 'vehicles'
    })
    .then(json => json.data)
    .then(
      data => data && dispatch(receiveVehicles(data.vehicles)),
      err => console.log('err:', err)
    )
    .catch((err) => {
      console.log('errmm')
    })
  }

export const fetchDetails = (vehicleId) =>
  (dispatch) => {
    dispatch(requestDetails())
    return api({
      query,
      operationName: 'vehicleDetails',
      vars: {
        vehicleId
      }
    })
    .then(json => json.data)
    .then(
      data => data && data.vehicle[0] && dispatch(receiveDetails(data.vehicle[0])),
      err => console.log('err:', err)
    )
  }

export default {
  REQUEST_VEHICLES,
  RECEIVE_VEHICLES,
  REQUEST_DETAILS,
  RECEIVE_DETAILS
}
