import { React, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './profile.css';
import { testUser } from '../../utils/constants';

function Profile() {

  return (
    <section className='profile'>
      <p
      className='profile__title'
      >Привет, UserName!</p>
      <form
      className='profile__form'
      >

        <div className='profile__field'>
          Имя
          <input
          className='profile__input'
          defaultValue={testUser.name}
          />
          <span className='profile__focus'/>
          </div>

        <span className='profile__input-error'>Поле не должно быть пустым</span>

        <div className='profile__field'>
          Email
          <input
          className='profile__input'
          defaultValue={testUser.email}
          />
          <span className='profile__focus'/>
        </div>
        <span className='profile__input-error'>Поле не должно быть пустым</span>

      </form>

      <span
      className='profile__error'
      >При обновлении профиля произошла ошибка.</span>

      <button
      className='profile__edit-button'
      >Редактировать</button>
      <button
      className='profile__leave-button'
      >Выйти из аккаунта</button>

    </section>
  );
}

export default Profile;
