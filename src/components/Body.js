import React, { useEffect } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'
import Browse from './Browse'
import Login from './Login'
import Error from './Error'
import FAQ from './FAQ'

const Body = () => {
  const dispatch=useDispatch();
  
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

  
  
    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const { uid, email, displayName } = user;
          dispatch(
            addUser({
              uid: uid,
              uemail: email,
              udisplayName: displayName
            })
          );
        } else {
          dispatch(removeUser());
        }
      });
    }, []);


  return (
    <div >
      
      <RouterProvider router={appRouter}/>
      
    </div>
  )
}

export default Body