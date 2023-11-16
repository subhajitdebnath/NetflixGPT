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
    <div className='pt-[30%] bg-black md:pt-0'>
        <div className="w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
            <h1 className="text-2xl md:text-6xl font-bold">{mainMovie?.original_title}</h1>
            <p className="hidden md:inline-block py-6 text-lg w-1/4">{mainMovie?.overview}</p>
            <div className="my-4 md:m-0">
                <button className=" bg-white text-black py-1 md:py-4 px-3 md:px-12 text-xl  rounded-lg hover:bg-opacity-80">
                ▶️ Play
                </button>
                <button className="hidden md:inline-block mx-2  bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg">
                More
                </button>
            </div>
        </div>
        <div className="w-screen">
            <iframe
                className="w-screen aspect-video"
                src={"https://www.youtube.com/embed/" + movieTrailor?.key + "?autoplay=0&mute=0"}
                title="YouTube video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
        </div>
    </div>
  )
}

export default VideoContainer;