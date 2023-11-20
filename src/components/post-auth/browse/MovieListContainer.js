import React from 'react'
import { useSelector } from 'react-redux'
import MovieCard from './MovieCard';

const MovieListContainer = () => {

  const movies = useSelector((store) => store.movie.nowPlayingMovies);
  // console.log(movies)

  return (
    <div className="bg-black">
      <div className=" mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20">
        <div className="px-6">
          <h1 className="text-lg md:text-3xl py-4 text-white">Now Playing</h1>
          <div className="flex overflow-x-scroll">
            <div className="flex">
              {movies?.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          </div>
        </div>

        <div className="px-6">
          <h1 className="text-lg md:text-3xl py-4 text-white">Recent Playing</h1>
          <div className="flex overflow-x-scroll">
            <div className="flex">
              {movies?.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieListContainer;


shortest path get the closest lift/elevator nearby

var lift1 = 2, lift2 = 3;
var yourPos = 1;

const callLift = (yourPos) => {
  if(Math.abs(yourPos - lift1) <= Math.abs(yourPos - lift2)) {
    return lift1;
  } else {
    return lift2;
  }
};

callLift(yourPos);