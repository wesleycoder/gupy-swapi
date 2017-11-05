import { h } from 'preact'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import CharacterList from '../Characters/CharacterList'
import FilmList from '../Films/FilmList'
import PlanetList from '../Planets/PlanetList'
import SpecieList from '../Species/SpecieList'
import StarshipList from '../Starships/StarshipList'
import VehicleList from '../Vehicles/VehicleList'
import Guide from '../Guide/Guide'
import styles from './App.css'

const App = () => (
  <Router>
    <div className={styles.App}>
      <Navbar />
      <hr/>
      <Route exact path="/" component={Guide} />
      <Route path="/characters" component={CharacterList} />
      <Route path="/films" component={FilmList} />
      <Route path="/planets" component={PlanetList} />
      <Route path="/species" component={SpecieList} />
      <Route path="/starships" component={StarshipList} />
      <Route path="/vehicles" component={VehicleList} />
    </div>
  </Router>
)

export default App
