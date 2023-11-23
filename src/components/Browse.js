import React from 'react'
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import VideoContainer from './post-auth/browse/VideoContainer';
import MovieListContainer from './post-auth/browse/MovieListContainer';
import GptSearch from './post-auth/gpt/GptSearch';
import { useSelector } from 'react-redux';

const Browse = () => {

  const showGptSearch = useSelector(store => store.gpt.showGptSearch);

  useNowPlayingMovies();

  return (
    <div>
      <Header />

      {showGptSearch ? 
        <GptSearch /> : 
        <><VideoContainer/>
        <MovieListContainer/></>
      }
      
    </div>
  )
}

export default Browse;