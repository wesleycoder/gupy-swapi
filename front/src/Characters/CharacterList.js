import { h } from 'preact'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchCharacters } from './actions'
import LoadingList from '../List/LoadingList'

export const CharacterList = ({ loaded, loading, characters, loadCharacters }) => (
  <LoadingList
    loaded={loaded}
    loading={loading}
    name='Characters'
    items={Object.values(characters)}
    sortBy='name'
    loadItems={loadCharacters}
    callback={({ id, name }) => (
      <div>
        <Link to={`/characters/${id}`}>
          {name}
        </Link>
      </div>
    )}
  />
)

const mapDispatchToProps = (dispatch) => ({
  loadCharacters: () => dispatch(fetchCharacters())
})

const mapStateToProps = ({
  Characters: {
    loaded,
    loading,
    characters
  }
}) => ({
  loaded,
  loading,
  characters
})

export default connect(mapStateToProps, mapDispatchToProps)(CharacterList)
