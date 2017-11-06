import { h } from 'preact'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchSpecies } from './actions'
import LoadingList from '../List/LoadingList'

export const SpecieList = ({ loaded, loading, species, loadSpecies }) => (
  <LoadingList
    loaded={loaded}
    loading={loading}
    name='Species'
    items={Object.values(species)}
    sortBy='name'
    loadItems={loadSpecies}
    callback={({ id, name }) => (
      <div>
        <Link to={`/species/${id}`}>
          {name}
        </Link>
      </div>
    )}
  />
)

const mapDispatchToProps = (dispatch) => ({
  loadSpecies: () => dispatch(fetchSpecies())
})

const mapStateToProps = ({
  Species: {
    loaded,
    loading,
    species
  }
}) => ({
  loaded,
  loading,
  species
})

export default connect(mapStateToProps, mapDispatchToProps)(SpecieList)
