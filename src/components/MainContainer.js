import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {
  const movies=useSelector(store=>store.movies?.nowPlayingMovies);
  if(!movies)return;
  console.log(movies);
  const mainMovie=movies[0]; 
  const { original_title, id, overview}=mainMovie;
  // console.log(original_title+" "+id+" "+overview);
  
  return (
    <div >
        <VideoTitle title={original_title} overview={overview}/>
        <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainer