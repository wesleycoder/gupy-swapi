import { h } from 'preact'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import CharacterList from '../Characters/CharacterList'
import CharacterDetails from '../Characters/CharacterDetails'
import FilmList from '../Films/FilmList'
import FilmDetails from '../Films/FilmDetails'
import PlanetList from '../Planets/PlanetList'
import PlanetDetails from '../Planets/PlanetDetails'
import SpecieList from '../Species/SpecieList'
import SpecieDetails from '../Species/SpecieDetails'
import StarshipList from '../Starships/StarshipList'
import StarshipDetails from '../Starships/StarshipDetails'
import VehicleList from '../Vehicles/VehicleList'
import VehicleDetails from '../Vehicles/VehicleDetails'
import Guide from '../Guide/Guide'
import styles from './App.css'

const App = () => (
  <Router>
    <div className={styles.App}>
      <Navbar />
      <hr/>
      <Route exact path="/" component={Guide} />
      <Route exact path="/characters" component={CharacterList} />
      <Route exact path="/characters/:id" component={CharacterDetails} />
      <Route exact path="/films" component={FilmList} />
      <Route exact path="/films/:id" component={FilmDetails} />
      <Route exact path="/planets" component={PlanetList} />
      <Route exact path="/planets/:id" component={PlanetDetails} />
      <Route exact path="/species" component={SpecieList} />
      <Route exact path="/species/:id" component={SpecieDetails} />
      <Route exact path="/starships" component={StarshipList} />
      <Route exact path="/starships/:id" component={StarshipDetails} />
      <Route exact path="/vehicles" component={VehicleList} />
      <Route exact path="/vehicles/:id" component={VehicleDetails} />
    </div>
  </Router>
)

export default App
