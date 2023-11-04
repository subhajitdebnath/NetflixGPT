import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import useMovieTrailer from '../../../hooks/useMovieTrailer';

const VideoContainer = () => {

    const movies = useSelector(store => store.movie?.nowPlayingMovies);
    const movieTrailor = useSelector(store => store.movie?.trailerVideo);
    const mainMovie = movies[0];
    // console.log(mainMovie);

    useMovieTrailer(mainMovie);

  return (
    <div>
        <iframe width="560" height="315" src={"https://www.youtube.com/embed/" + movieTrailor?.key} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        <div className='pt-36 px-12'>
            <h1 className='text-6xl bold'>{mainMovie?.original_title}</h1>
            <p className='py-6 text-lg w-1/2'>{mainMovie?.overview}</p>
            <div>
                <button className='bg-gray-500 text-black p-4 rounded center text-xl w-40 bg-opacity-70'>Play</button>
                <button className='bg-gray-500 text-black p-4 rounded center text-xl w-40 bg-opacity-70 mx-2'>More Info</button>
            </div>
        </div>
    </div>
  )
}

export default VideoContainer;