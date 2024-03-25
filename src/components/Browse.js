import React from 'react'
import Header from './Header'
import Footer from './Footer'


const Browse = () => {
  return (
    <div className="flex min-h-screen  flex-col justify-between">
      <Header/>
      <h1 className='mt-24'>This is The browser window</h1>
      <Footer/>
    </div>
  )
}

export default Browse