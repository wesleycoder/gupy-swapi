import { h } from 'preact'
import { connect } from 'react-redux'
import { fetchDetails } from './actions'

export const StarshipDetails = ({
  id, name, model, manufacturer,
  cost_in_credits, length, max_atmosphering_speed,
  crew, passengers, cargo_capacity, consumables,
  hyperdrive_rating, MGLT, starship_class,
  loaded, loading,
  match: { params: { starshipId } },
  loadDetails
}) => {
  if ((Number.parseInt(id, 10) !== Number.parseInt(starshipId, 10) && !loading) || (!loaded && !loading)) {
    loadDetails(starshipId)
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
          <div><strong>Starship class:</strong> {starship_class}</div>
          <div><strong>Model:</strong> {model}</div>
          <div><strong>Manufacturer:</strong> {manufacturer}</div>
          <div><strong>Cost in credits:</strong> {cost_in_credits}</div>
          <div><strong>Length:</strong> {length}</div>
          <div><strong>Max. atmosphering speed:</strong> {max_atmosphering_speed}</div>
          <div><strong>Crew:</strong> {crew}</div>
          <div><strong>Passengers:</strong> {passengers}</div>
          <div><strong>Cargo capacity:</strong> {cargo_capacity}</div>
          <div><strong>Consumables:</strong> {consumables}</div>
          <div><strong>Hyperdrive rating:</strong> {hyperdrive_rating}</div>
          <div><strong>MGLT:</strong> {MGLT}</div>
        </div>}
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  loadDetails: (starshipId) => dispatch(fetchDetails(starshipId))
})

const mapStateToProps = ({
  Starships: {
    starship: {
      id, name, model, manufacturer,
      cost_in_credits, length, max_atmosphering_speed,
      crew, passengers, cargo_capacity, consumables,
      hyperdrive_rating, MGLT, starship_class,
      loaded, loading
    }
  }
}) => ({
  id, name, model, manufacturer,
  cost_in_credits, length, max_atmosphering_speed,
  crew, passengers, cargo_capacity, consumables,
  hyperdrive_rating, MGLT, starship_class,
  loaded, loading
})

export default connect(mapStateToProps, mapDispatchToProps)(StarshipDetails)
