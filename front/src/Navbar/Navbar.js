import { h } from 'preact'
import { NavLink } from 'react-router-dom'
import style from './Navbar.css'

const links = {
  '/': {
    text: 'Home',
    exact: true
  },
  '/characters': {
    text: 'Characters',
    exact: false
  },
  '/films': {
    text: 'Films',
    exact: false
  },
  '/planets': {
    text: 'Planets',
    exact: false
  },
  '/species': {
    text: 'Species',
    exact: false
  },
  '/starships': {
    text: 'Starships',
    exact: false
  },
  '/vehicles': {
    text: 'Vehicles',
    exact: false
  }
}

const Navbar = () => (
  <div className={style.Navbar}>
    <ul>
      {Object.entries(links)
        .map(([link, { text, exact }]) => (
          <li>
            <NavLink
              to={link}
              className={style.Link}
              activeClassName={style.ActiveLink}
              exact={exact}
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
