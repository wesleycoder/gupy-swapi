import { h } from 'preact'
import { connect } from 'react-redux'
import { fetchPlanets } from './actions'
import LoadingList from '../List/List'

export const PlanetList = ({ loaded, planets, loadPlanets }) => (
  <LoadingList
    loaded={loaded}
    name='Planets'
    items={planets}
    loadItems={loadPlanets}
    callback={(planets) => (
      <div><strong>{planets.name}</strong></div>
    )}
  />
)

const mapDispatchToProps = (dispatch) => ({
  loadPlanets: () => dispatch(fetchPlanets())
})

const mapStateToProps = ({
  Planets: {
    loaded,
    planets
  }
}) => ({
  loaded,
  planets
})

export default connect(mapStateToProps, mapDispatchToProps)(PlanetList)
