import miniLogo from './../../assets/icons/mini-logo.png';
import './Header.scss';
import './../../utils/normilize.scss';

export const Header = () => {
  return (
    <div className="header">
      <div className="header__mini-logo mini-logo">
        <a href="/" className="mini-logo__link">
          <img
            src={miniLogo}
            alt="Mini-logo image"
            className="mini-logo__image"
          />
          <span className="mini-logo__text">EduPortal</span>
        </a>
      </div>

      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <a href="#" className="nav__link">All materials</a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">My materials</a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">My marks</a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">My cabinet</a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">Sign Out</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}