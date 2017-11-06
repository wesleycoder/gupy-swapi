import { h } from 'preact'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchDetails } from './actions'

export const SpecieDetails = ({
  id, name, classification, designation, average_height,
  skin_colors, hair_colors, eye_colors, average_lifespan,
  language, HomeworldId,
  loaded, loading,
  match: { params: { specieId } },
  loadDetails
}) => {
  if ((Number.parseInt(id, 10) !== Number.parseInt(specieId, 10) && (!loaded && !loading))) {
    loadDetails(specieId)
  }
  return (
    <div>
      <strong>
        {name}
      </strong>
      <hr/>
      <div>
        {!loaded
        ? <div>Loading specie `{name}` details...</div>
        : <div>
          <div><strong>Name:</strong> {name}</div>
          <div><strong>Classification:</strong> {classification}</div>
          <div><strong>Designation:</strong> {designation}</div>
          <div><strong>Average height:</strong> {average_height}</div>
          <div><strong>Skin colors:</strong> {skin_colors}</div>
          <div><strong>Hair colors:</strong> {hair_colors}</div>
          <div><strong>Eye colors:</strong> {eye_colors}</div>
          <div><strong>Average lifespan:</strong> {average_lifespan}</div>
          <div><strong>Language:</strong> {language}</div>
          {HomeworldId
            ? <div>
              <Link to={`/planets/${HomeworldId}`}><strong>Homeworld:</strong> {HomeworldId}</Link>
            </div>
            : null
          }
        </div>}
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  loadDetails: (specieId) => dispatch(fetchDetails(specieId))
})

const mapStateToProps = ({
  Species: {
    specie: {
      id, name, classification, designation, average_height,
      skin_colors, hair_colors, eye_colors, average_lifespan,
      language, HomeworldId,
      loaded, loading
    }
  }
}) => ({
  id, name, classification, designation, average_height,
  skin_colors, hair_colors, eye_colors, average_lifespan,
  language, HomeworldId,
loaded, loading
})

export default connect(mapStateToProps, mapDispatchToProps)(SpecieDetails)
