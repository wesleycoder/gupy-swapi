import { h } from 'preact'
import { connect } from 'react-redux'
import { fetchVehicles } from './actions'
import LoadingList from '../List/LoadingList'

export const VehicleList = ({ loaded, vehicles, loadVehicles }) => (
  <LoadingList
    loaded={loaded}
    name='Vehicles'
    items={vehicles}
    loadItems={loadVehicles}
    callback={(vehicle) => (
      <div><strong>{vehicle.name}</strong></div>
    )}
  />
)

const mapDispatchToProps = (dispatch) => ({
  loadVehicles: () => dispatch(fetchVehicles())
})

const mapStateToProps = ({
  Vehicles: {
    loaded,
    vehicles
  }
}) => ({
  loaded,
  vehicles
})

export default connect(mapStateToProps, mapDispatchToProps)(VehicleList)
