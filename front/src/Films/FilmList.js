import { h } from 'preact'
import { connect } from 'react-redux'
import { fetchFilms } from './actions'
import LoadingList from '../List/List'

export const FilmList = ({ loaded, films, loadFilms }) => (
  <LoadingList
    loaded={loaded}
    name='Films'
    items={films}
    loadItems={loadFilms}
    callback={(film) => (
      <div><strong>{film.title}</strong></div>
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
