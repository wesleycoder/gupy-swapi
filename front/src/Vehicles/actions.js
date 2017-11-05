import api from '../graphqlEndpoint'

export const REQUEST_VEHICLES = 'REQUEST_VEHICLES'
export const RECEIVE_VEHICLES = 'RECEIVE_VEHICLES'

const startRequest = () => ({
  type: REQUEST_VEHICLES
})

const query = `
  query vehicles {
    vehicles (order: "name") {
      name
    }
  }
`

export const fetchVehicles = () =>
  (dispatch) => {
    dispatch(startRequest())
    return api({
      query,
      operationName: 'vehicles'
    })
    .then(json => json.data)
    .then(
      data => dispatch(receiveVehicles(data.vehicles)),
      err => console.log('err:', err)
    )
  }

export const receiveVehicles = (vehicles) => ({
  type: RECEIVE_VEHICLES,
  vehicles
})

export default {
  REQUEST_VEHICLES,
  RECEIVE_VEHICLES
}