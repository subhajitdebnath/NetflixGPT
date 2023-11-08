import React from 'react'
import { useSelector } from 'react-redux'
import MovieCard from './MovieCard';

const MovieListContainer = () => {

  const movies = useSelector((store) => store.movie.nowPlayingMovies);
  // console.log(movies)

  return (
    <div className='absolute top-full'>
      <h1>Now Playing</h1>
      <div className='flex'>
        {movies.map(movie => {
          return <MovieCard movie={movie}/>;
        })}
      </div>
    </div>
  )
}

export default MovieListContainer