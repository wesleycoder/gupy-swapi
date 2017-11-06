import { h } from 'preact'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchVehicles } from './actions'
import LoadingList from '../List/LoadingList'

export const VehicleList = ({ loaded, loading, vehicles, loadVehicles }) => (
  <LoadingList
    loaded={loaded}
    loading={loading}
    name='Vehicles'
    items={Object.values(vehicles)}
    sortBy='name'
    loadItems={loadVehicles}
    callback={({ id, name }) => (
      <div>
        <Link to={`/vehicles/${id}`}>
          {name}
        </Link>
      </div>
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
