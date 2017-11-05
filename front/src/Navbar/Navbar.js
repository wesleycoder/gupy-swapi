import { h } from 'preact';
import { Link } from 'react-router-dom'
import style from './Navbar.css'

const Navbar = () =>(
  <div className={style.Navbar}>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/films">Films</Link>
      </li>
      <li>
        <Link to="/planets">Planets</Link>
      </li>
      <li>
        <Link to="/characters">Characters</Link>
      </li>
      <li>
        <Link to="/species">Species</Link>
      </li>
      <li>
        <Link to="/starships">Starships</Link>
      </li>
      <li>
        <Link to="/Vehicles">Vehicles</Link>
      </li>
    </ul>
  </div>
)

export default Navbar;
