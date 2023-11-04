import React from 'react'
import { useSelector } from 'react-redux';

const VideoContainer = () => {

    const movies = useSelector(store => store.movie?.nowPlayingMovies);
    if(!movies) return;
    const mainMovie = movies[0];
    console.log(mainMovie);

  return (
    <div>
        
    </div>
  )
}

export default VideoContainer;