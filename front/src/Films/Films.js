import { h } from 'preact'
import { connect } from 'react-redux'
import { fetchFilms } from './actions'

export const Films = ({ loaded, films, loadFilms }) => {
  if (!loaded) {
    loadFilms()
    return (
      <div>Loading films ...</div>
    )
  }
  return (
    <div>
      <h2>Films</h2>
      {films.map((film) =>
        <div><strong>{film.title}</strong></div>
      )}
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  loadFilms: () => dispatch(fetchFilms())
})

const mapStateToProps = ({
  FilmsReducer: {
    loaded,
    films
  }
}) => ({
  loaded,
  films
})

export default connect(mapStateToProps, mapDispatchToProps)(Films)
