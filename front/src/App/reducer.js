import { combineReducers } from 'redux'

const defaultState = {}

export const defaultReducer = (state = defaultState, action) => {
  return state
}

const AppReducer = combineReducers({
  defaultReducer
})

export default AppReducer
