import clone from 'lodash.clone'
import {
  REQUEST_CHARACTERS,
  RECEIVE_CHARACTERS,
  REQUEST_DETAILS,
  RECEIVE_DETAILS
} from './actions'

const defaultState = {
  loaded: false,
  character: {},
  characters: {}
}

export const Characters =
  (state = defaultState, action) => {
    switch (action.type) {
      case REQUEST_CHARACTERS: {
        return {
          ...clone(state),
          loaded: false
        }
      }

      case RECEIVE_CHARACTERS: {
        return {
          ...clone(state),
          loaded: true,
          characters: action.characters
            .reduce((characters, character) => ({
              ...characters,
              [character.id]: character
            }), {})
        }
      }

      case REQUEST_DETAILS: {
        return {
          ...clone(state),
          character: {
            id: action.characterId,
            loaded: false,
            loading: true
          }
        }
      }

      case RECEIVE_DETAILS: {
        return {
          ...clone(state),
          character: {
            ...action.character,
            loaded: true,
            loading: false
          }
        }
      }

      default: {
        return clone(state)
      }
    }
  }

export default Characters
