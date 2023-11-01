import { React, useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './register.css';
import SubmitButton from '../UI/Submit-button/SubmitButton';
import { useFormWithValidation } from '../UseForm/UseForm';
import { register, login } from '../../utils/MainApi';

function Register({ checkToken, isAuthorized }) {

  const { values, errors, isValid, serverMessage, setserverMessage, handleChange, resetServerError } = useFormWithValidation();
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    let response = await register(values);
    if(response.ok){
      await login(values);
      await checkToken();
      navigate('/movies')
    }
    else {
      setserverMessage(response);
    }
  }

  useEffect(() => {
    if(isAuthorized){
      navigate('/movies');
    }
  }, [isAuthorized])

  return (
    <section className='register'>

      <form
        className='register__form'
        onBlur={handleChange}
        onSubmit={handleSubmit}
        onClick={resetServerError}
        noValidate
      >
      <Link to='/' className="logo" />
      <p
        className='register__title'
      >Добро пожаловать!</p>
        <div className='register__field'>
          <p className='register__caption'>Имя</p>
          <input
            className='register__input'
            required={true}
            name='name'
            onChange={handleChange}
            value={values.name || ''}
          />
          <span className='register__input-error'>{errors.name}</span>
        </div>

        <div className='register__field'>
          <p className='register__caption'>E-mail</p>
          <input
            className='register__input'
            required={true}
            type='email'
            name='email'
            onChange={handleChange}
            value={values.email || ''}
          />
          <span className='register__input-error'>{errors.email}</span>
        </div>

        <div className='register__field'>
          <p className='register__caption'>Пароль</p>
          <input
            type='password'
            required={true}
            minLength={8}
            maxLength={30}
            className='register__input'
            name='password'
            onChange={handleChange}
            value={values.password || ''}
          />
          <span className='register__input-error'>{errors.password}</span>
        </div>

          <span
        className='register__error'
        >{serverMessage}</span>

        <SubmitButton
        disabled={isValid ? false : true}
        >
          Зарегистрироваться
        </SubmitButton>

      </form>


      <p className='register__caption'>
      Уже зарегистрированы?
      <Link
      to='/signin'
      className='register__login-link'>Войти</Link>
      </p>

    </section>
  );
}

export default Register;
