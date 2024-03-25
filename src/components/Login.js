import React, { useRef, useState } from 'react';
import { LBACKGROUND_URL } from '../utils/URLs';
import { Link } from 'react-router-dom';
import { checkEmailValidation, checkPasswordValidation, checkFullNameValidation } from '../utils/validation';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import Header from './Header';
import Footer from './Footer';

const Login = () => {
  console.log("component is rendered");

  const [learnMore, setLearnMore] = useState(false);
  const [isSignIn, setIsSignIn] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage]=useState(null);
  const [passwordErrorMessage, setPasswordErrorMessage]=useState(null);
  const [fullNameErrorMessage, setFullNameErrorMessage]=useState(null);
  const [errorMessage, setErrorMessage]=useState(null);
  const dispatch=useDispatch();
  console.log(errorMessage);

  const toggleLearnMore = () => {
    setLearnMore(!learnMore);
  }

  const toggleSignIn = () => {
    if(isSignIn){
      setIsSignIn(false);
    }
    else{
      setIsSignIn(true);
    }
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
      if(emailCheckMessage || passwordCheckMessage || fullNameCheckMessage) return;
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)

      .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(user, {
          displayName: fullName.current.value,
        }).then(() => {
          const {uid, email, displayName, phoneNumber, photoURL} = auth.currentUser;
          dispatch(addUser({uid:uid, email:email, displayName:displayName, phoneNumber:phoneNumber, photoURL:photoURL}));
        }).catch((error) => {
          setErrorMessage(error.message);
        });
        console.log(user)
      })
      .catch((error) => {
        const errorMessage = error.message;
        setErrorMessage(errorMessage);
      });
    }
    else{
      if(emailCheckMessage || passwordCheckMessage) return;
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(`--user sign in with email ${email.current.value} and password ${ password.current.value}---`+user)
        })
        .catch((error) => {
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });
    }
  }

  return (    
    <div className='h-full '>
      <Header />
      <div className="absolute">
        <img className="h-[1000px] w-[1300px] object-cover" src={LBACKGROUND_URL} alt="logo" />
      </div>
      <div className='inline-block'>
        <form onSubmit={(e)=> e.preventDefault()} className="w-[410px] absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
          <h1 className='m-2 pb-4 bold text-3xl'>{isSignIn?'Sign In':'Sign Up'}</h1>
          {
            errorMessage!==null  &&
            <span className='ml-2 my-4 w-[300px] relative block self-center overflow-hidden rounded-md p-2  text-red-600 hover:text-red-500'>
              {errorMessage}
            </span>
          }
          {!isSignIn && 
            <div className='ml-2 my-4 '>
              <label for="UserName" className="relative block bg-violet-100 overflow-hidden self-center rounded-md  p-3 w-[300px] bg-transparent border border-gray-200 px-3 pt-3 " >
                <input ref={fullName} type="text" id="UserName" placeholder="Name" className="peer  w-full border-none bg-transparent px-4 placeholder-gray-600 text-gray-700 focus:outline-none  " />
              </label>
              {fullNameErrorMessage!=null && <p className="ml-2 text-xs text-red-400">{fullNameErrorMessage}</p>}
            </div>
          }

          <div className='ml-2 my-4 '>
            <label for="UserEmail" className="relative block bg-violet-100 overflow-hidden self-center rounded-md  p-3 w-[300px] bg-transparent border border-gray-200 px-3 pt-3 " >
              <input ref={email} type="email" id="UserEmail" placeholder="Email" className="peer  w-full border-none bg-transparent px-4 placeholder-gray-600 text-gray-700 focus:outline-none  " />
            </label>
            {emailErrorMessage!=null && <p className="m-2 text-xs text-red-400">{emailErrorMessage}</p>}
          </div>
          
          <div className='ml-2 my-4'>
            <label for="UserPassword" className="relative block bg-violet-100 overflow-hidden self-center rounded-md  p-3 w-[300px] bg-transparent border border-gray-200 px-3 pt-3 " >
              <input ref={password} type="password" id="UserPassword" placeholder="password" className="peer  w-full border-none bg-transparent px-4 placeholder-gray-600 text-gray-700 focus:outline-none  " />
            </label>
            {passwordErrorMessage!=null && <p className="m-2 text-xs text-red-400">{passwordErrorMessage}</p>}
          </div>
          
          <button className="m-2 p-2 bg-yellow-600 rounded-md w-[300px] hover:bg-yellow-500 "  onClick={handleButtonClick}  >{isSignIn?'Sign In':'Sign Up'}</button>
          
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
      <div className='absolute  left-0 right-0 mt-[711px]'>
        <Footer/>
      </div>
    </div>
  );
}

export default Login;
