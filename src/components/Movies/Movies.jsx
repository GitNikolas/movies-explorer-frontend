import { React, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { testData1 } from '../../utils/constants';
import Preloader from '../Preloader/Preloader';

function Movies() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <section className='movies'>
      <SearchForm />
      {isLoading && <Preloader />}
      <MoviesCardList testData={testData1} />
    </section>
  );
}

export default Movies;
