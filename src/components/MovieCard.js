import React from 'react'
import { IMG_CDN_URL } from '../utils/constants';
import CircularProgress from './CircularProgress';

const MovieCard = ({key,movie}) => {
  if(!movie)return null;
  const {backdrop_path,title,release_date,vote_average}=movie;
  const votePercentage=Math.floor(vote_average*10);
  if(false)console.log(release_date+votePercentage);
  if(!backdrop_path)return null;
  return (
    <div>
      <div className="min-w-56 md:w-48 pr-3 flex text-gray-400 ">      
        <img alt="Movie Card" src={IMG_CDN_URL + backdrop_path} className=' w-full h-full rounded-lg opacity-100 transition duration-300 hover:scale-105' />
      </div>
      <div className='flex justify-end'>
        <CircularProgress percent={votePercentage}/>
      </div>
      <div className='px-2 -mt-3'>
        <h1 className='w-full -mt-2  text-2xs font-bold pt-2'>{title}</h1>
        <p className='min-w-fit p-0 text-xs'>{release_date}</p>
      </div>
    </div>
  );
}



export default MovieCard