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
            <a href="#" className="nav__link">Всі матеріали</a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">Мої матеріали</a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">Мої оцінки</a>
          </li>
          <li className="nav__item">
            <a href="/cabinet" className="nav__link">Особистий кабінет</a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">Вийти</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}