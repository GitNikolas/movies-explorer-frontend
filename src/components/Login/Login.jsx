import { React, useState, useContext, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './login.css';
import SubmitButton from '../UI/Submit-button/SubmitButton';
import { useFormWithValidation } from '../UseForm/UseForm';
import { login } from '../../utils/MainApi';

function Login({ checkToken }) {

  const { values, errors, isValid, serverMessage, setserverMessage, handleChange } = useFormWithValidation();
  const navigate = useNavigate();

  async function handleLogin(event) {
    event.preventDefault();
    try {
      await login(values);
      await checkToken();
      navigate('/movies');
    }
    catch (err) {
      setserverMessage(err.message);
      console.error(err);
    }
  }


  return (
    <section className='login'>

      <form
        className='login__form'
        onBlur={handleChange}
        onSubmit={handleLogin}
        noValidate
      >

        <Link to='/' className="logo" />
        <p
          className='login__title'
        >Рады видеть!</p>

        <div className='login__field'>
          <p className='login__caption'>E-mail</p>
          <input
            className='login__input'
            required={true}
            type='email'
            name='email'
            onChange={handleChange}
            value={values.email || ''}
          />
          <span className='login__input-error'>{errors.email}</span>
        </div>

        <div className='login__field'>
          <p className='login__caption'>Пароль</p>
          <input
            type='password'
            className='login__input'
            required={true}
            name='password'
            onChange={handleChange}
            value={values.password || ''}
          />
          <span className='login__input-error'>{errors.password}</span>
        </div>

        <span
        className='login__error'
        >{serverMessage}</span>

        <SubmitButton
        disabled={isValid ? false : true}
        >
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
