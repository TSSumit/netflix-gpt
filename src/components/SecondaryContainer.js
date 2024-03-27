import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const SecondaryContainer = () => {
  const movies=useSelector(store=>store?.movies);
  if(!movies)return false;
  
  return (
    <div className='-mt-40 px-2 text-gray-300'>
      <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies}/>
      <MovieList title={"Top Rated"} movies={movies?.topRatedMovies} />
      <MovieList title={"Popular"} movies={movies?.popularMovies} />
      <MovieList title={"UpComing"} movies={movies?.upcomingMovies} />
      
    </div>
  )
}

export default SecondaryContainer