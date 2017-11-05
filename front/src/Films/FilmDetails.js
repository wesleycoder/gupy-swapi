import { h } from 'preact'
import cx from 'classnames'
import { connect } from 'react-redux'
import { fetchDetails, toggleDetails, toggleOpeningCrawl, toggleCharacters } from './actions'
import styles from './Film.css'

export const FilmDetails = ({
  id, title, episode_id, opening_crawl, director,
  producer, release_date, url, characters,
  loaded, showDetails, showOpeningCrawl, showCharacters,
  toggleDetails, toggleOpeningCrawl, toggleCharacters, loadDetails
}) => {
  return (
    <div>
      <strong
        className={styles.Title}
        onClick={(e) => {
          if (!loaded) {
            loadDetails(id)
          }
          toggleDetails(id)
        }}
      >
        {title} <small>(click to toggle)</small>
      </strong>
      <div className={cx(
        styles.Details, {
          [styles.ShowDetails]: !!showDetails
        }
      )}>
        {!loaded
        ? <div>Loading film `{title}` details...</div>
        : <div>
          <div><strong>Title:</strong>{title}</div>
          <div><strong>Episode Number:</strong>{episode_id}</div>
          <div>
            <strong
              className={styles.ToggleOpeningCrawl}
              onClick={(e) => toggleOpeningCrawl(id)}
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
              onClick={(e) => toggleCharacters(id)}
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
  toggleDetails: (filmId, show) => dispatch(toggleDetails(filmId, show)),
  toggleOpeningCrawl: (filmId, show) => dispatch(toggleOpeningCrawl(filmId, show)),
  toggleCharacters: (filmId, show) => dispatch(toggleCharacters(filmId, show))
})

export default connect(null, mapDispatchToProps)(FilmDetails)
