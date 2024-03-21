import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Browse from './Browse'
import Login from './Login'
import Header from './Header'
import Footer from './Footer'

const Body = () => {
  const appRouter=createBrowserRouter([
    {
      path:"/",
      element:<Login/>
    },
    {
      path:"/browse",
      element:<Browse/>
    },
    {
      path:"/login",
      element:<Login/>
    }
  ])
  return (
    <div>
      <Header/>
      <RouterProvider router={appRouter}/>
      <Footer/>
    </div>
  )
}

export default Body