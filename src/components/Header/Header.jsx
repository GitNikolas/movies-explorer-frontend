import { React, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';

function Header({ isAuthorized }) {

  return (
    <header
      className="header header_type_main"
    >
      <nav className="header__navbar">
        <Link to='/' className="header__logo">
        </Link>

        <nav className="header__navbar_links">
          <Link to='/' className='link'>Фильмы</Link>
          <Link to='/' className='link'>Сохранённые фильмы</Link>
        </nav>
      </nav>

      {isAuthorized && <Link to='/' className='header__account-link link'>Аккаунт</Link>}

      {!isAuthorized && <nav className="header__account-link">
        <Link to='/' className='link'>Регистрация</Link>
        <Link to='/' className='header__account-link_signin link'>Войти</Link>
      </nav>}

      <Navigation isAuthorized={isAuthorized}/>

      {/* <button className={`header__burger-button${openMenu}`} onClick={toggleOpenMenu}></button> */}

    </header>
  );
}

export default Header;
