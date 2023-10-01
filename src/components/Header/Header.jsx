import { Link, useLocation } from 'react-router-dom';

function Header() {

  return (
    <header
    className="header"
    >
      <nav className="header__navbar">
        <Link to='/' className="header__logo">
        </Link>

        <nav className="header__navbar_links">
        <Link to='/' className='link'>Фильмы</Link>
        <Link to='/' className='link'>Сохранённые фильмы</Link>
        </nav>
      </nav>


      <nav className="header__account-link">
        <Link to='/' className='link'>Аккаунт</Link>
        <Link to='/' className='header__account-link_logo link'></Link>
      </nav>

    </header>
  );
}

export default Header;
