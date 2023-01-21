import {FaReact} from 'react-icons/fa'
import {NavLink} from 'react-router-dom'

export default function HeaderBarBrand() {
  return (
    <div
      data-cy="header-bar-brand"
      data-testid="header-bar-brand"
      className="navbar-brand"
    >
      <a
        href="https://reactjs.org/"
        target="_blank"
        rel="noopener noreferrer"
        className="navbar-item"
        data-cy="header-bar-brand-link"
        data-testid="header-bar-brand-link"
      >
        <FaReact data-testid="react-icon-svg" />
      </a>
      <NavLink
        data-cy="navLink"
        data-testid="navLink"
        className="navbar-item navbar-home"
        to="/"
      >
        <span className="tour">TOUR</span>
        <span className="of">OF</span>
        <span className="heroes">HEROES</span>
      </NavLink>
    </div>
  )
}
