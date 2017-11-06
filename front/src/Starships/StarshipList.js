import { h } from 'preact'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchStarships } from './actions'
import LoadingList from '../List/LoadingList'

export const StarshipList = ({ loaded, loading, starships, loadStarships }) => (
  <LoadingList
    loaded={loaded}
    loading={loading}
    name='Starships'
    items={Object.values(starships)}
    sortBy='name'
    loadItems={loadStarships}
    callback={({ id, name }) => (
      <div>
        <Link to={`/starships/${id}`}>
          {name}
        </Link>
      </div>
    )}
  />
)

const mapDispatchToProps = (dispatch) => ({
  loadStarships: () => dispatch(fetchStarships())
})

const mapStateToProps = ({
  Starships: {
    loaded,
    loading,
    starships
  }
}) => ({
  loaded,
  loading,
  starships
})

export default connect(mapStateToProps, mapDispatchToProps)(StarshipList)
