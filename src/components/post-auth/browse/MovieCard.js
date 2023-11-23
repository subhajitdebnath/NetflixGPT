import React from 'react'
import { IMG_CDN } from '../../../utils/constant';

const MovieCard = (movie) => {
    // console.log(movie?.movie);
  return (
    <div className="w-36 md:w-48 pr-4 hover:cursor-pointer">
      <img alt="Movie Card" src={IMG_CDN + movie?.movie?.poster_path} />
    </div>
  )
}

export default MovieCard;