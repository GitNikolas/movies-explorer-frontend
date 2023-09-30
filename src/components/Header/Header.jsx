import logo from '../../images/logo.svg';
import profile from '../../images/profile.svg';

import { Link, useLocation } from 'react-router-dom';

function Header() {

  return (
    <header
    className="header"
    >
      <nav className="header__navbar">
        <Link to='/'>
        <img
        src={logo}
        alt='Логотип'
        />
        </Link>

        <ul className="list-style header__navbar_buttons">
          <li>Фильмы</li>
          <li>Сохранённые фильмы</li>
        </ul>
      </nav>


      <Link to='/'>
      <img
      src={profile}
      alt='Логотип'
      />
      </Link>

    </header>
  );
}

export default Header;
