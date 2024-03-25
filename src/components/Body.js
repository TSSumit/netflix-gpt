import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Browse from './Browse'
import Login from './Login'
import Error from './Error'
import FAQ from './FAQ'

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
    },
    {
      path:"/faq",
      element:<FAQ/>
    },
    {
      path:"/error",
      element:<Error/>
    }
  ])

  
  
    


  return (
    <div >
      
      <RouterProvider router={appRouter}/>
      
    </div>
  )
}

export default Body