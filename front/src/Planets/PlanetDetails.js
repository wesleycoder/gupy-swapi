import { h } from 'preact'
import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'
import { fetchDetails } from './actions'

export const PlanetDetails = ({
  id, name, climate, diameter, gravity,
  orbital_period, population, rotation_period,
  surface_water, terrain,
  loaded, loading,
  match: { params: { planetId } },
  loadDetails
}) => {
  if ((Number.parseInt(id, 10) !== Number.parseInt(planetId, 10) && !loading) || (!loaded && !loading)) {
    loadDetails(planetId)
  }
  return (
    <div>
      <strong>
        {name}
      </strong>
      <hr/>
      <div>
        {!loaded
        ? <div>Loading planet `{name}` details...</div>
        : <div>
          <div><strong>Name:</strong> {name}</div>
          <div><strong>Climate:</strong> {climate}</div>
          <div><strong>Diameter:</strong> {diameter}</div>
          <div><strong>Gravity:</strong> {gravity}</div>
          <div><strong>Orbial period:</strong> {orbital_period}</div>
          <div><strong>Population:</strong> {population}</div>
          <div><strong>Rotation period:</strong> {rotation_period}</div>
          <div><strong>Water surface:</strong> {surface_water}</div>
          <div><strong>Terrain:</strong> {terrain}</div>
        </div>}
      </div>
    </div>
  )
}
const mapDispatchToProps = (dispatch) => ({
  loadDetails: (planetId) => dispatch(fetchDetails(planetId))
})

const mapStateToProps = ({
  Planets: {
    planet: {
      id, name, climate, diameter, gravity,
      orbital_period, population, rotation_period,
      surface_water, terrain,
      loaded, loading
    }
  }
}) => ({
  id, name, climate, diameter, gravity,
  orbital_period, population, rotation_period,
  surface_water, terrain,
  loaded, loading
})

export default connect(mapStateToProps, mapDispatchToProps)(PlanetDetails)
