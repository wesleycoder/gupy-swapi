import api from '../graphqlEndpoint'

const PREFIX = 'VEHICLES__'
export const REQUEST_VEHICLES = `${PREFIX}REQUEST_VEHICLES`
export const RECEIVE_VEHICLES = `${PREFIX}RECEIVE_VEHICLES`

const requestVehicles = () => ({
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
    dispatch(requestVehicles())
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
