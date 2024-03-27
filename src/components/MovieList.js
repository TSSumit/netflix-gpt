import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => {
    // console.log("this is the movieList *******************=="+movies);
    if(!movies)return null;
  return (
    <div className='px-20 '>
        <h1 className='font-bold text-2xl p-1'>{title}</h1>
        <div className='flex  overflow-x-auto rounded-xl '>
            {movies.map(movie=>{
              return <MovieCard key={movie?.key} movie={movie} />
            })}
            <MovieCard/>
        </div>
    </div>
  )
}

export default MovieList