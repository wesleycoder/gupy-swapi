import { h, Component } from 'preact';
import { Route } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Films from '../Films/Films'
import Guide from '../Guide/Guide'
import styles from './App.css'

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <Navbar />
        <hr/>
        <Route exact path="/" component={Guide} />
        <Route path="/films" component={Films} />
        <Route path="/planets" component={Films} />
        <Route path="/characters" component={Films} />
        <Route path="/species" component={Films} />
        <Route path="/starships" component={Films} />
        <Route path="/vehicles" component={Films} />
      </div>
    );
  }
}

export default App;
