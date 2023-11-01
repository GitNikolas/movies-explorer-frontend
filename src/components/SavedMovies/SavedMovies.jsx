import { React, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../Movies/movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import { useForm } from '../UseForm/UseForm';
import { getUserFilms } from '../../utils/MainApi';
import { shortFilmDuration } from "../../utils/constants";

function SavedMovies() {
  const [isLoading, setIsLoading] = useState(false);

  const [ movieData, setMovieData ] = useState(null);

  const [ errorMessage, setErrorMessage ] = useState('');

  const [ filmsNotFound, setFilmsNotFound ] = useState(false);

  const { values, setValues, isChecked, setIsChecked, handleChange } = useForm();


  async function getMovies() {
    try{
      setIsLoading(true);
      let films = await getUserFilms();
      setMovieData(films);
    }
    catch(err) {
      console.error(err);
    }
    finally{
      setIsLoading(false);
    }
  }

  function submitSearchForm({ values, isChecked }) {
    const result = movieData.filter(item => item.nameRU.toLowerCase().includes(values.name.toLowerCase()) || item.nameEN.toLowerCase().includes(values.name.toLowerCase()));
    if (isChecked) {
      const shortFilm = result.filter((film) => film.duration <= shortFilmDuration);
      if (shortFilm.length === 0) {
        setFilmsNotFound(true);
      }
      return setMovieData(shortFilm);
    }
    if (result.length === 0) {
      setFilmsNotFound(true);
    }
    setMovieData(result);
  }

  function clearError() {
    setErrorMessage('');
  }

  function filterShortFilms() {
    let shortFilms = movieData.filter(item => item.duration <= shortFilmDuration);
    return setMovieData(shortFilms);
  }

  useEffect(() => {
    if(isChecked){
      filterShortFilms();
    }
    else {
      getMovies();
    }
}, [isChecked])

  return (
    <section className='movies'>
      <SearchForm
        submitSearchForm = {submitSearchForm}
        errorMessage = {errorMessage}
        setErrorMessage = {setErrorMessage}
        clearError = {clearError}
        values = {values}
        isChecked = {isChecked}
        handleChange = {handleChange}
        setIsChecked = {setIsChecked}
      />

      <div className='movies__content'>

        {isLoading && <Preloader />}

        { filmsNotFound && <h2 className='movies__not-found-title'> Ничего не найдено </h2> }

        <MoviesCardList
        movieData={movieData}
        setMovieData={setMovieData} />

      </div>

    </section>
  );
}

export default SavedMovies;
