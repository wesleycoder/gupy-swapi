import { h } from 'preact'
import { connect } from 'react-redux'
import { fetchSpecies } from './actions'
import LoadingList from '../List/List'

export const SpecieList = ({ loaded, species, loadSpecies }) => (
  <LoadingList
    loaded={loaded}
    name='Species'
    items={species}
    loadItems={loadSpecies}
    callback={(specie) => (
      <div><strong>{specie.name}</strong></div>
    )}
  />
)

const mapDispatchToProps = (dispatch) => ({
  loadSpecies: () => dispatch(fetchSpecies())
})

const mapStateToProps = ({
  Species: {
    loaded,
    species
  }
}) => ({
  loaded,
  species
})

export default connect(mapStateToProps, mapDispatchToProps)(SpecieList)
