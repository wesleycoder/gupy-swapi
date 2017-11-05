import { combineReducers } from 'redux'
import Characters from '../Characters/reducer'
import Films from '../Films/reducer'
import Planets from '../Planets/reducer'
import Species from '../Species/reducer'
import Starships from '../Starships/reducer'
import Vehicles from '../Vehicles/reducer'

const AppReducer = combineReducers({
  Characters,
  Films,
  Planets,
  Species,
  Starships,
  Vehicles
})

export default AppReducer
