import { React, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './movies__card-list.css'
import MoviesCard from '../MoviesCard/MoviesCard';
import MoreButton from '../UI/More-button/MoreButton';

function MoviesCardList({testData}) {


  return (
    <div className='movies__content'>
      <ul className='movies__card-list list-style'>
        {testData.map((item) => {
          return (
            <MoviesCard key={item} id={item} />
          )
        })}
      </ul>
      <MoreButton />
    </div>
  );
}

export default MoviesCardList;
