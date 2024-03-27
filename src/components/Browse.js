import Header from './Header'
import Footer from './Footer'
import React  from 'react'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import usePopularMovies from '../hooks/usePopularMovies'
import useTopRatedMovies from '../hooks/useTopRatedMovies'
import useUpcomingMovies from '../hooks/useUpcomingMovies'
import { useSelector } from 'react-redux'
import GptSearchBar from './GptSearchBar'

const Browse = () => {
  const showGptSearch=useSelector((state)=> state?.gpt?.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  return (
    <div className="flex min-h-screen flex-col justify-between overflow-auto bg-black">
      <Header/>
      {showGptSearch ?
          <GptSearchBar/>
        :
          <>
            <MainContainer/>
            <SecondaryContainer/>
          </>
      }
      <Footer/>
    </div>
  )
}

export default Browse