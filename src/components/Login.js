import React, { useRef, useState } from 'react';
import { LBACKGROUND_URL, LOGO_URL } from '../utils/URLs';
import { Link } from 'react-router-dom';
import { checkEmailValidation, checkPasswordValidation, checkFullNameValidation } from '../utils/validation';

const Login = () => {
  console.log("component is rendered");

  const [learnMore, setLearnMore] = useState(false);
  const [isSignIn, setIsSignIn] = useState("Sign Up");
  const [emailErrorMessage, setEmailErrorMessage]=useState(null);
  const [passwordErrorMessage, setPasswordErrorMessage]=useState(null);
  const [fullNameErrorMessage, setFullNameErrorMessage]=useState(null);

  const toggleLearnMore = () => {
    setLearnMore(!learnMore);
  }

  const toggleSignIn = () => {
    setIsSignIn(isSignIn === "Sign In" ? "Sign Up" : "Sign In");
  }

  const fullName=useRef(null);
  const email=useRef(null);
  const password=useRef(null);
  const rememberMe=useRef(null);


  const handleButtonClick= ()=>{
    const emailCheckMessage=checkEmailValidation(email.current.value);
    setEmailErrorMessage(emailCheckMessage);
    const passwordCheckMessage=checkPasswordValidation(password.current.value);
    setPasswordErrorMessage(passwordCheckMessage);
    if(!isSignIn){
      const fullNameCheckMessage=checkFullNameValidation(fullName.current.value);
      setFullNameErrorMessage(fullNameCheckMessage);
    }
    // sign up/sign in function
  }

  return (
    
    <div className="h-screen  flex justify-center items-center bg-cover bg-center min-h-[621px] mt-24">
      <div>
        <img src={LBACKGROUND_URL} alt='Background' className='absolute h-[981px] w- overflow-hide top-0 left-0 right-0' />
      </div>
      <div className="m-5">
        <div className='absolute top-0 left-0 right-0 px-40 py-7 bg-gradient-to-b from-black  z-10 w-full flex justify-between h-24'>
          <img src={LOGO_URL} alt="NetFlix Logo" className='w-40 inline-block' />
          {!isSignIn &&
            <button onClick={toggleSignIn} className="py-2 px-5 bg-yellow-600 rounded-md inline-block">Sign In</button>
          }
        </div>
        
        <form onSubmit={(e)=> e.preventDefault()} className="w-[425px] backdrop-brightness-25  px-10 py-10 flex-col min-h-[370px] text-white   rounded-sm">
          <h1 className='m-2 pb-4 bold text-3xl'>{isSignIn}</h1>
          {!isSignIn && 
            <div className='ml-2 my-4'>
              <label for="UserFullName" className="relative block overflow-hidden rounded-md m-2 p-3 w-11/12 bg-transparent border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-gray-400 focus-within:ring-1 focus-within:ring-gray-400" >
                <input ref={fullName} type="text" id="UserFullName" placeholder="FullName" className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm" />
                <span className="absolute start-3 top-3 -translate-y-1/2 text-xs  transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs text-gray-400" > FullName </span>
              </label>
              {fullNameErrorMessage!=null && <p className="ml-2 text-xs text-red-400">{fullNameErrorMessage}</p>}
            </div>
          }

          <div className='ml-2 my-4'>
            <label for="UserEmail" className="relative block overflow-hidden rounded-md  p-3 w-11/12 bg-transparent border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-gray-400 focus-within:ring-1 focus-within:ring-gray-400" >
              <input ref={email} type="email" id="UserEmail" placeholder="Email" className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm" />
              <span className="absolute start-3 top-3 -translate-y-1/2 text-xs  transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs text-gray-400" > Email </span>
            </label>
            {emailErrorMessage!=null && <p className="m-2 text-xs text-red-400">{emailErrorMessage}</p>}
          </div>
          
          <div className='ml-2 my-4'>
            <label for="UserPassword" className="relative block overflow-hidden rounded-md  p-3 w-11/12 bg-transparent border border-gray-200 px-3 pt-3 shadow-sm focus-within:border-gray-400 focus-within:ring-1 focus-within:ring-gray-400" >
              <input ref={password} type="password" id="UserPassword" placeholder="Password" className="peer h-8 w-full border-none bg-transparent p-0 placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm" />
              <span className="absolute start-3 top-3 -translate-y-1/2 text-xs  transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs  text-gray-400"  > Password </span>
            </label>
            {passwordErrorMessage!=null && <p className="m-2 text-xs text-red-400">{passwordErrorMessage}</p>}
          </div>
          
          <button className="m-2 p-2 bg-yellow-600 rounded-md w-11/12 "  onClick={handleButtonClick}  >{isSignIn}</button>
          
          {isSignIn &&
              <div className="flex justify-between text-sm m-2">
                <label htmlFor="remember-me" className='py-3 cursor-pointer'>
                  <input ref={rememberMe} type="checkbox" id="remember-me" className="accent-gray-400 bg-opacity-25 mr-2 cursor-pointer" />
                  Remember me
                </label>
                <Link to="/forgot-password" className="py-3 hover:underline">Forgot Password?</Link>
              </div>
          }
          { isSignIn ?
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
          { isSignIn && 
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
