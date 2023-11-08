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
        <div>
            <iframe className='w-screen aspect-video absolute' src={"https://www.youtube.com/embed/" + movieTrailor?.key + "?autoplay=0&mute=0"} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </div>
        <div className='pt-[20rem] px-12 text-white absolute'>
            <h1 className='text-6xl bold'>{mainMovie?.original_title}</h1>
            <p className='py-6 text-lg w-1/2'>{mainMovie?.overview}</p>
            <div>
                <button className='bg-white text-black p-4 rounded center text-xl w-40 hover:bg-opacity-70'>Play</button>
                <button className='bg-white text-black p-4 rounded center text-xl w-40 hover:bg-opacity-70 mx-2'>More Info</button>
            </div>
        </div>
    </div>
  )
}

export default VideoContainer;