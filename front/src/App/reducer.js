import { combineReducers } from 'redux'
import FilmsReducer from '../Films/reducer'

const defaultState = {}

export const defaultReducer = (state = defaultState, action) => {
  return state
}

const AppReducer = combineReducers({
  defaultReducer,
  FilmsReducer
})

export default AppReducer
