import React, { useState } from 'react';
import { LBACKGROUND_URL, LOGO_URL } from '../utils/URL\'S';
import { Link } from 'react-router-dom';

const Login = () => {
  console.log("component is rendered");

  const [learnMore, setLearnMore] = useState(false);
  const [isSignIn, setIsSignIn] = useState("Sign Up");

  const toggleLearnMore = () => {
    setLearnMore(!learnMore);
  }

  const toggleSignIn = () => {
    setIsSignIn(isSignIn === "Sign In" ? "Sign Up" : "Sign In");
  }

  return (
    
    <div className="h-screen  flex justify-center items-center bg-cover bg-center min-h-[640px] ">
      <div>
        <img src={LBACKGROUND_URL} alt='Background' className='absolute h-[1003px] top-0 left-0 right-0' />
      </div>
      <div className="m-5">
        <div className='absolute top-0 left-0 right-0 px-40 py-7 bg-gradient-to-b from-black  z-10 w-full flex justify-between h-24'>
          <img src={LOGO_URL} alt="NetFlix Logo" className='w-40 inline-block' />
          {isSignIn === "Sign Up" &&
            <button onClick={toggleSignIn} className="py-2 px-5 bg-yellow-600 rounded-md inline-block">Sign In</button>
          }
        </div>
        
        <form className="w-96 backdrop-brightness-25 mb-10 px-10 py-10 flex-col min-h-[430px] text-white   rounded-sm">
          <h1 className='m-2 pb-4 bold text-3xl'>{isSignIn}</h1>
          {isSignIn === "Sign Up" && 
            <>
              <input type='text' placeholder='Name' className='p-3 m-2 rounded-sm w-11/12 bg-transparent border border-gray-500' />
            </>
          }
          <input type='text' placeholder='Email Address' className='p-3 m-2 rounded-sm w-11/12 bg-transparent border border-gray-500' />
          <input type='password' placeholder='Password' className='p-3 m-2 rounded-sm w-11/12 bg-transparent border border-gray-500' />
          <button className="m-2 p-2 bg-yellow-600 rounded-md w-11/12 " >{isSignIn}</button>
          
          {isSignIn === "Sign In" &&
              <div className="flex justify-between text-sm m-2">
                <label htmlFor="remember-me" className='py-3 cursor-pointer'>
                  <input type="checkbox" id="remember-me" className="accent-gray-400 bg-opacity-25 mr-2 cursor-pointer" />
                  Remember me
                </label>
                <Link to="/forgot-password" className="py-3 hover:underline">Forgot Password?</Link>
              </div>
          }
          { isSignIn==="Sign In" ?
              <div className="mx-2 my-1">
                New to Netflix? 
                <span onClick={toggleSignIn} className="font-bold hover:underline cursor-pointer"> Sign up now.</span>
              </div>
            :
              <div className="mx-2 my-3">
                Already a user. 
                <span onClick={toggleSignIn} className="font-bold hover:underline cursor-pointer"> Sign In now.</span>
              </div>
          }
          { isSignIn==="Sign In"  && 
            <section className='m-2'>
              <div className='text-xs'>
                This page is protected by Google reCAPTCHA to ensure you're not a bot. 
                <span onClick={toggleLearnMore} className="text-blue-700 hover:underline cursor-pointer pl-2">{learnMore ? 'Hide' : 'Learn more.'}</span>
              </div>
              {learnMore && 
                <p className='inline-block text-xs'>
                  The information collected by Google reCAPTCHA is subject to the Google Privacy Policy and Terms of Service, and is used for providing, maintaining, and improving the reCAPTCHA service and for general security purposes (it is not used for personalised advertising by Google).
                </p>
              }
            </section>
          }
        </form>
      </div>
    </div>
  );
}

export default Login;
