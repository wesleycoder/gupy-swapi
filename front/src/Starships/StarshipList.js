import { h } from 'preact'
import { connect } from 'react-redux'
import { fetchStarships } from './actions'
import LoadingList from '../List/LoadingList'

export const StarshipList = ({ loaded, starships, loadStarships }) => (
  <LoadingList
    loaded={loaded}
    name='Starships'
    items={starships}
    loadItems={loadStarships}
    callback={(starship) => (
      <div><strong>{starship.name}</strong></div>
    )}
  />
)

const mapDispatchToProps = (dispatch) => ({
  loadStarships: () => dispatch(fetchStarships())
})

const mapStateToProps = ({
  Starships: {
    loaded,
    starships
  }
}) => ({
  loaded,
  starships
})

export default connect(mapStateToProps, mapDispatchToProps)(StarshipList)
