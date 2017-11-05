import { h } from 'preact'
import cx from 'classnames'
import { connect } from 'react-redux'
import { fetchDetails, toggleOpeningCrawl, toggleCharacters } from './actions'
import styles from './Film.css'

export const FilmDetails = ({
  id, title, episode_id, opening_crawl, director,
  producer, release_date, characters,
  loaded, loading, showOpeningCrawl, showCharacters,
  match: { params: { id: filmId } },
  toggleOpeningCrawl, toggleCharacters, loadDetails
}) => {
  if ((id !== Number.parseInt(filmId, 10) && !loading) || (!loaded && !loading)) {
    loadDetails(filmId)
  }
  return (
    <div>
      <strong className={styles.Title}>
        {title}
      </strong>
      <hr/>
      <div className={styles.Details}>
        {!loaded
        ? <div>Loading film `{title}` details...</div>
        : <div>
          <div><strong>Title:</strong> {title}</div>
          <div><strong>Episode Number:</strong> {episode_id}</div>
          <div><strong>Director:</strong> {director}</div>
          <div><strong>Producer:</strong> {producer}</div>
          <div><strong>Release date:</strong> {new Date(release_date).toLocaleDateString()}</div>
          <div>
            <strong
              className={styles.ToggleOpeningCrawl}
              onClick={(e) => toggleOpeningCrawl()}
            >Opening crawl: <small>(click to toggle)</small></strong>
            <div className={cx(
              styles.OpeningCrawl, {
                [styles.OpeningCrawlVisible]: !!showOpeningCrawl
              }
            )}>
              {opening_crawl}
            </div>
          </div>
          <div>
            <strong
              className={styles.ToggleCharacters}
              onClick={(e) => toggleCharacters()}
            >Characters: <small>(click to toggle)</small></strong>
            <div className={cx(
              styles.Characters, {
                [styles.CharactersVisible]: !!showCharacters
              }
            )}>
              {characters.map(({ id, name }) => (
                <div>{name}</div>
              ))}
            </div>
          </div>
        </div>}
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  loadDetails: (filmId) => dispatch(fetchDetails(filmId)),
  toggleOpeningCrawl: (filmId, show) => dispatch(toggleOpeningCrawl(filmId, show)),
  toggleCharacters: (filmId, show) => dispatch(toggleCharacters(filmId, show))
})

const mapStateToProps = ({
  Films: {
    film: {
      id, title, episode_id, opening_crawl, director,
      producer, release_date, characters,
      loaded, loading, showOpeningCrawl, showCharacters,
    }
  }
}) => ({
  id, title, episode_id, opening_crawl, director,
  producer, release_date, characters,
  loaded, loading, showOpeningCrawl, showCharacters,
})

export default connect(mapStateToProps, mapDispatchToProps)(FilmDetails)
