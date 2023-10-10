import { React, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../Movies/movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { testData2  } from '../../utils/constants';

function SavedMovies() {

  return (
    <section className='movies'>
      <SearchForm />
      <MoviesCardList testData={testData2} />
    </section>
  );
}

export default SavedMovies;
