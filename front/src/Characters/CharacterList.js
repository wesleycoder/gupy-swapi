import { h } from 'preact'
import { connect } from 'react-redux'
import { fetchCharacters } from './actions'
import LoadingList from '../List/List'

export const CharacterList = ({ loaded, characters, loadFilms }) => (
  <LoadingList
    loaded={loaded}
    name='Characters'
    items={characters}
    loadItems={loadFilms}
    callback={(character) => (
      <div><strong>{character.name}</strong></div>
    )}
  />
)

const mapDispatchToProps = (dispatch) => ({
  loadFilms: () => dispatch(fetchCharacters())
})

const mapStateToProps = ({
  Characters: {
    loaded,
    characters
  }
}) => ({
  loaded,
  characters
})

export default connect(mapStateToProps, mapDispatchToProps)(CharacterList)
