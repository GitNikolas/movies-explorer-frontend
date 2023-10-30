import { React, useEffect, useMemo, useState } from 'react';
import './movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';
import { getFilms }  from '../../utils/MoviesApi';
import { getUserFilms } from '../../utils/MainApi';
import { useForm } from '../UseForm/UseForm';

function Movies() {

  const [isLoading, setIsLoading] = useState(false);

  const [ searchResult, setSearchResult ] = useState(null);

  const [ savedFilmsId, setSavedFilmsId ] = useState(null);

  const [ errorMessage, setErrorMessage ] = useState('');

  const [ filmsNotFound, setFilmsNotFound ] = useState(false);

  const { values, setValues, isChecked, setIsChecked, handleChange } = useForm();

  async function submitSearchForm({ values, isChecked }) {
    try {
      localStorage.setItem('values', JSON.stringify(values));
      setIsLoading(true);
      const filmList = await getFilms();
      const result = filmList.filter(item => item.nameRU.toLowerCase().includes(values.name.toLowerCase())
      || item.nameEN.toLowerCase().includes(values.name.toLowerCase()) );
      if(isChecked) {
        const shortFilm = result.filter((film) => film.duration <= 40);
        if(shortFilm.length === 0){
          setFilmsNotFound(true);
        }
        return setSearchResult(shortFilm);
      }
      if(result.length === 0){
        setFilmsNotFound(true);
      }
      return setSearchResult(result);
    }
    catch(err) {
      setErrorMessage(err);
      console.error(err);
      return err;
    }
    finally{
      setIsLoading(false);
    }
  }

  function clearError() {
    setErrorMessage('');
  }

  async function getSavedFilms() {
    let films = await getUserFilms();
    if(films) {
      setSavedFilmsId(films.map(item => item.movieId));
    }
  }

  function filterShortFilms() {
    let shortFilms = searchResult.filter(item => item.duration <= 40);
    setSearchResult(shortFilms);
  }

  useEffect(() => {
    getSavedFilms();
    if(localStorage.movies){
      let movies = JSON.parse( localStorage.movies );
      setSearchResult(movies);
    }
    if(localStorage.values){
      let fieldValues = JSON.parse(localStorage.values);
      setValues(fieldValues);
    }
    if(localStorage.isChecked){
      let checked = JSON.parse(localStorage.isChecked);
      setIsChecked(checked);
    }
  }, [])

  useEffect(() => {
      if(isChecked){
        filterShortFilms();
      }
  }, [isChecked])

  useEffect(() => {
    if(searchResult){
      localStorage.setItem('movies', JSON.stringify(searchResult));
    }
  }, [searchResult, savedFilmsId])

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
      {isLoading && <Preloader />}

      <div className='movies__content'>

        { filmsNotFound && <h2 className='movies__not-found-title'> Ничего не найдено </h2> }

        <MoviesCardList movieData={searchResult} savedMovieData={savedFilmsId}/>

      </div>

    </section>
  );
}

export default Movies;
