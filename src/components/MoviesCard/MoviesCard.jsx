import { React, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './movies-card.css'
import examplePic from './example-pic.png'
import examplePic2 from './pink-light-square-frame-pink-light-square-pink-light-square-banner_1189-2997.png'


function MoviesCard({id}) {

  const [isLiked, setIsLiked] = useState(false);

  function toggleLike() {
    setIsLiked(!isLiked);
  }

  return (
    <li
    className='movies-card'
    id={id}
    >
      <img
      className='movies-card__image'
      src={examplePic}
      alt='фотография'
      />

      <div
      className='movies-card__caption'
      >
      <p
      className='movies-card__subtitle'
      >33 слова о дизайне</p>

      <button
      className={`movies-card__like ${ isLiked ? 'movies-card__like_active' : '' }`}
      onClick={toggleLike}
      ></button>
      </div>

      <p
      className='movies-card__duration'
      >1ч42м</p>
    </li>
  );
}

export default MoviesCard;
