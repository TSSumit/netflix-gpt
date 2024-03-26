import Header from './Header'
import Footer from './Footer'
import React  from 'react'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'


const Browse = () => {
  useNowPlayingMovies();
  return (
    <div className="flex min-h-screen flex-col justify-between overflow-auto">

      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
      <Footer/>
    </div>
  )
}

export default Browse