import { React, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './movies__card-list.css'
import MoviesCard from '../MoviesCard/MoviesCard';
import MoreButton from '../UI/More-button/MoreButton';

function MoviesCardList({ movieData, savedMovieData }) {
  let location = useLocation();

  const [ amountCards, setAmountCards ] = useState(0);

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  function getMoreCards() {
    if(screenWidth >= 1280) {
      setAmountCards(amountCards + 4)
    }
    else if(screenWidth >= 990) {
      setAmountCards(amountCards + 3)
    }
    else if(screenWidth >= 450){
      setAmountCards(amountCards + 2)
    }
    else if(screenWidth >= 0){
      setAmountCards(amountCards + 2)
    }
  }

  useEffect(() => {
    function handleResize (event) {
      setScreenWidth(event.target.innerWidth);
    }
    setAmountCards(0);
    if(screenWidth >= 1280) {
      setAmountCards(16)
    }
    else if(screenWidth >= 990) {
      setAmountCards(12)
    }
    else if(screenWidth >= 450){
      setAmountCards(8)
    }
    else if(screenWidth >= 0){
      setAmountCards(5)
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [screenWidth, movieData])

  return (
      <ul className='movies__card-list list-style'>

      { movieData && movieData.slice(0, amountCards).map(item =>
      <MoviesCard
      data={item}
      key={item.id || item.movieId}
      savedMovieData={savedMovieData}
       />)}

      { movieData && (amountCards && location.pathname === '/movies') && amountCards < movieData.length && <MoreButton onClick = {getMoreCards} />}

      </ul>
  );
}

export default MoviesCardList;
