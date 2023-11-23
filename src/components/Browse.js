import React from 'react'
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import VideoContainer from './post-auth/browse/VideoContainer';
import MovieListContainer from './post-auth/browse/MovieListContainer';

const Browse = () => {

  useNowPlayingMovies();

  return (
    <div>
      <Header />

      <VideoContainer/>
      <MovieListContainer/>
    </div>
  )
}

export default Browse;