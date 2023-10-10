import { React, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import SearchButton from '../UI/Search-button/Search-button';
import Tumbler from '../UI/Tumbler/Tumbler';
import './search-form.css'

function SearchForm() {

  return (
    <form className='search-form'>

      <div className='search-form__container'>

      <input
      className='search-form__input'
      placeholder='Фильм'
      />
      <SearchButton
      type='submit'
      />

      </div>

      <div
      className='search-form__filter'
      >
        <Tumbler />
        <p>Короткометражки</p>
      </div>

    </form>
  );
}

export default SearchForm;
