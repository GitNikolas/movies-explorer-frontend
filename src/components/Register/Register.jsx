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
          <span className='register__input-error'>Поле не должно быть пустым</span>
        </div>

        <div className='register__field'>
          <p className='register__caption'>E-mail</p>
          <input
            className='register__input'
            defaultValue={testUser.email}
          />
          <span className='register__input-error'>Введите email</span>
        </div>

        <div className='register__field'>
          <p className='register__caption'>Пароль</p>
          <input
            type='password'
            className='register__input'
            defaultValue={testUser.password}
          />
          <span className='register__input-error register__input-error_active'>Пароль не должен содержать кириллицу</span>
        </div>

      </form>

      <span
      className='register__error'
      >При обновлении профиля произошла ошибка.</span>

      <SubmitButton>
        Зарегистрироваться
      </SubmitButton>
      <p className='register__caption'>
      Уже зарегистрированы?
      <Link
      to='/login'
      className='register__login-link'>Войти</Link>
      </p>

    </section>
  );
}

export default Register;
