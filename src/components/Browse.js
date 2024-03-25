import Header from './Header'
import Footer from './Footer'
import React  from 'react'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'


const Browse = () => {
  useNowPlayingMovies();
  return (
    <div className="flex min-h-screen  flex-col justify-between">
      <Header/>
      <h1 className='mt-24'>This is The browser window</h1>
      <Footer/>
    </div>
  )
}

export default Browse