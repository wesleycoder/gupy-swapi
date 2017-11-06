import { h } from 'preact'
import { connect } from 'react-redux'
import { fetchDetails } from './actions'

export const VehicleDetails = ({
  id, name, model, manufacturer,
  cost_in_credits, length, max_atmosphering_speed,
  crew, passengers, cargo_capacity, consumables,
  vehicle_class,
  loaded, loading,
  match: { params: { vehicleId } },
  loadDetails
}) => {
  if ((Number.parseInt(id, 10) !== Number.parseInt(vehicleId, 10) && !loading) || (!loaded && !loading)) {
    loadDetails(vehicleId)
  }
  return (
    <div>
      <strong>
        {name}
      </strong>
      <hr/>
      <div>
        {!loaded
        ? <div>Loading character `{name}` details...</div>
        : <div>
          <div><strong>Name:</strong> {name}</div>
          <div><strong>Vehicle class:</strong> {vehicle_class}</div>
          <div><strong>Model:</strong> {model}</div>
          <div><strong>Manufacturer:</strong> {manufacturer}</div>
          <div><strong>Cost in credits:</strong> {cost_in_credits}</div>
          <div><strong>Length:</strong> {length}</div>
          <div><strong>Max. atmosphering speed:</strong> {max_atmosphering_speed}</div>
          <div><strong>Crew:</strong> {crew}</div>
          <div><strong>Passengers:</strong> {passengers}</div>
          <div><strong>Cargo capacity:</strong> {cargo_capacity}</div>
          <div><strong>Consumables:</strong> {consumables}</div>
        </div>}
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  loadDetails: (vehicleId) => dispatch(fetchDetails(vehicleId))
})

const mapStateToProps = ({
  Vehicles: {
    vehicle: {
      id, name, model, manufacturer,
      cost_in_credits, length, max_atmosphering_speed,
      crew, passengers, cargo_capacity, consumables,
      vehicle_class,
      loaded, loading
    }
  }
}) => ({
  id, name, model, manufacturer,
  cost_in_credits, length, max_atmosphering_speed,
  crew, passengers, cargo_capacity, consumables,
  vehicle_class,
  loaded, loading
})

export default connect(mapStateToProps, mapDispatchToProps)(VehicleDetails)
