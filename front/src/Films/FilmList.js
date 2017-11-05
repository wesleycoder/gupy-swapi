import { h } from 'preact'
import { connect } from 'react-redux'
import { fetchFilms } from './actions'
import LoadingList from '../List/List'
import FilmDetails from './FilmDetails'

export const FilmList = ({ loaded, films, loadFilms }) => (
  <LoadingList
    loaded={loaded}
    name='Films'
    items={Object.values(films)}
    loadItems={loadFilms}
    callback={(film) => (
      <FilmDetails {...film} />
    )}
  />
)

const mapDispatchToProps = (dispatch) => ({
  loadFilms: () => dispatch(fetchFilms())
})

const mapStateToProps = ({
  Films: {
    loaded,
    films
  }
}) => ({
  loaded,
  films
})

export default connect(mapStateToProps, mapDispatchToProps)(FilmList)
