import React from 'react'
import { IMG_CDN } from '../../../utils/constant';

const MovieCard = (movie) => {
    console.log(movie?.movie);
  return (
    <div className='w-48'>
      <img src={IMG_CDN + movie?.movie?.poster_path} alt='movie cover'/>
      <h2>{movie?.movie?.title}</h2>
    </div>
  )
}

export default MovieCard;