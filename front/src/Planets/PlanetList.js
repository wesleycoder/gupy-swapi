import { h } from 'preact'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchPlanets } from './actions'
import LoadingList from '../List/LoadingList'

export const PlanetList = ({ loaded, planets, loadPlanets }) => (
  <LoadingList
    loaded={loaded}
    name='Planets'
    items={Object.values(planets)}
    sortBy='name'
    loadItems={loadPlanets}
    callback={({ id, name }) => (
      <div>
        <Link to={`/planets/${id}`}>
          {name}
        </Link>
      </div>
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
