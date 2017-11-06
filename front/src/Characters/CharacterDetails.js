import { h } from 'preact'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchDetails } from './actions'

export const CharacterDetails = ({
  id, name, height, mass, hair_color, skin_color,
  eye_color, birth_year, gender, HomeworldId, SpecieId,
  loaded, loading,
  match: { params: { id: characterId } },
  loadDetails
}) => {
  if ((Number.parseInt(id, 10) !== Number.parseInt(characterId, 10) && !loading) || (!loaded && !loading)) {
    loadDetails(characterId)
  }
  return (
    <div>
      <strong>
        {name}
      </strong>
      <hr/>
      <div>
        {!loaded
        ? <div>Loading character `{name}` details...</div>
        : <div>
          <div><strong>Name:</strong> {name}</div>
          <div><strong>Gender:</strong> {gender}</div>
          <div><strong>Height:</strong> {height}</div>
          <div><strong>Hair color:</strong> {hair_color}</div>
          <div><strong>Skin color:</strong> {skin_color}</div>
          <div><strong>Eye color:</strong> {eye_color}</div>
          <div><strong>Birth year:</strong> {birth_year}</div>
          <div><strong>Mass:</strong> {mass}</div>
          {HomeworldId
            ? <div>
              <Link to={`/planets/${HomeworldId}`}><strong>Homeworld:</strong> {HomeworldId}</Link>
            </div>
            : null
          }
          {SpecieId
            ? <div>
              <Link to={`/species/${SpecieId}`}><strong>Specie:</strong> {SpecieId}</Link>
            </div>
            : null
          }
        </div>}
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  loadDetails: (characterId) => dispatch(fetchDetails(characterId))
})


const mapStateToProps = ({
  Characters: {
    character: {
      id, name, height, mass, hair_color, skin_color,
      eye_color, birth_year, gender, HomeworldId, SpecieId,
      loaded, loading
    }
  }
}) => ({
  id, name, height, mass, hair_color, skin_color,
  eye_color, birth_year, gender, HomeworldId, SpecieId,
  loaded, loading
})

export default connect(mapStateToProps, mapDispatchToProps)(CharacterDetails)
