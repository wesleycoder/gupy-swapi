import { h } from 'preact'
import { NavLink } from 'react-router-dom'
import style from './Navbar.css'

const links = {
  '/': 'Home',
  '/characters': 'Characters',
  '/films': 'Films',
  '/planets': 'Planets',
  '/species': 'Species',
  '/starships': 'Starships',
  '/vehicles': 'Vehicles'
}

const Navbar = () => (
  <div className={style.Navbar}>
    <ul>
      {Object.entries(links)
        .map(([link, text]) => (
          <li>
            <NavLink
              to={link}
              className={style.Link}
              exact activeClassName={style.ActiveLink}
            >
              {text}
            </NavLink>
          </li>
        )
      )}
    </ul>
  </div>
)

export default Navbar
