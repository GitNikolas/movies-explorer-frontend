import { React, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../Movies/movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { testData2  } from '../../utils/constants';
import Preloader from '../Preloader/Preloader';

function SavedMovies() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <section className='movies'>
      <SearchForm />
      {isLoading && <Preloader />}
      <MoviesCardList testData={testData2} />
    </section>
  );
}

export default SavedMovies;
