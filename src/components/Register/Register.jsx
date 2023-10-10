import { React, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './register.css';
import { testUser } from '../../utils/constants';
import SubmitButton from '../UI/Submit-button/SubmitButton';

function Register() {

  return (
    <section className='register'>
      <p
        className='register__title'
      >Добро пожаловать!</p>
      <form
        className='register__form'
      >
        <div className='register__field'>
          <p className='register__caption'>Имя</p>
          <input
            className='register__input'
            defaultValue={testUser.name}
          />
        </div>

        <div className='register__field'>
          <p className='register__caption'>E-mail</p>
          <input
            className='register__input'
            defaultValue={testUser.email}
          />
        </div>

        <div className='register__field'>
          <p className='register__caption'>Пароль</p>
          <input
            type='password'
            className='register__input'
            defaultValue={testUser.password}
          />
          <span className='register__error'>Неправильный пароль</span>
        </div>

      </form>

      <SubmitButton>
        Зарегистрироваться
      </SubmitButton>
      <p className='register__caption'>
      Уже зарегистрированы?
      <Link
      to='/login'
      className='register__login-link link'>Войти</Link>
      </p>

    </section>
  );
}

export default Register;
