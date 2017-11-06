import { h } from 'preact'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchFilms } from './actions'
import LoadingList from '../List/LoadingList'

export const FilmList = ({ loaded, loading, films, loadFilms }) => (
  <LoadingList
    loaded={loaded}
    loading={loading}
    name='Films'
    items={Object.values(films)}
    sortBy='episode_id'
    loadItems={loadFilms}
    callback={({ id, title, episode_id, release_date }) => (
      <div>
        Ep. {episode_id}:&nbsp;
        <Link to={`/films/${id}`}>
          <strong>{title}</strong>
        </Link>
        <small> ({(new Date(release_date)).toLocaleDateString()})</small>
      </div>
    )}
  />
)

const mapDispatchToProps = (dispatch) => ({
  loadFilms: () => dispatch(fetchFilms())
})

const mapStateToProps = ({
  Films: {
    loaded,
    loading,
    films
  }
}) => ({
  loaded,
  loading,
  films
})

export default connect(mapStateToProps, mapDispatchToProps)(FilmList)
