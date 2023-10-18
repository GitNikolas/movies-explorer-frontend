import { React, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './login.css';
import SubmitButton from '../UI/Submit-button/SubmitButton';

function Login() {

  return (
    <section className='login'>

      <form
        className='login__form'
      >

        <Link to='/' className="logo" />
        <p
          className='login__title'
        >Рады видеть!</p>

        <div className='login__field'>
          <p className='login__caption'>E-mail</p>
          <input
            className='login__input'
            required='true'
            type='email'
          />
          <span className='login__input-error'>Введите email</span>
        </div>

        <div className='login__field'>
          <p className='login__caption'>Пароль</p>
          <input
            type='password'
            className='login__input'
            required='true'
          />
          <span className='login__input-error'>Неправильный пароль</span>
        </div>

        <span
        className='login__error'
        >Неправильный логин или пароль .</span>

        <SubmitButton>
          Войти
        </SubmitButton>

      </form>

      <p className='login__caption'>
        Ещё не зарегистрированы?
        <Link
        to='/signup'
        className='login__login-link'>Регистрация</Link>
        </p>


    </section>
  );
}

export default Login;
