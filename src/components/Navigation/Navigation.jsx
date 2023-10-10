import { React, useState, useEffect, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './navigation.css';

function Navigation({ isAuthorized }) {

  const [openMenu, setOpenMenu] = useState(false);


  function toggleOpenMenu(event) {
    event.stopPropagation();
    setOpenMenu(!openMenu);
    if(!openMenu){
      document.body.classList.add('no-scroll')
    } else {
      document.body.classList.remove('no-scroll')
    }
  }

  return (
    <>

      <button className={`header__burger-button ${openMenu ? 'header__burger-button_oppened' : ''}`} onClick={toggleOpenMenu}></button>


      <nav
        className={`navigation ${openMenu ? 'navigation_oppened' : ''}`}
        onClick={toggleOpenMenu}
      >
        <nav
          className='navigation__menu'
        >
          <Link to='/' className='navigation__menu-link link'>Главная</Link>
          <Link to='/' className='navigation__menu-link link'>Фильмы</Link>
          <Link to='/' className='navigation__menu-link link'>Сохранённые фильмы</Link>
        </nav>

      {isAuthorized && <Link to='/' className='header__account-link header__account-link_type_navigation link'>Аккаунт</Link>}

      </nav>
    </>

  );
}

export default Navigation;
