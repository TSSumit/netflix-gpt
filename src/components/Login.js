import React, { useRef, useState } from 'react';
import { LBACKGROUND_URL, LOGO_URL } from '../utils/URLs';
import { Link, useNavigate } from 'react-router-dom';
import { checkEmailValidation, checkPasswordValidation, checkFullNameValidation } from '../utils/validation';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {
  console.log("component is rendered");

  const [learnMore, setLearnMore] = useState(false);
  const [isSignIn, setIsSignIn] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage]=useState(null);
  const [passwordErrorMessage, setPasswordErrorMessage]=useState(null);
  const [fullNameErrorMessage, setFullNameErrorMessage]=useState(null);
  const [errorMessage, setErrorMessage]=useState(null);
  const dispatch=useDispatch();
  const navigate=useNavigate();
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
      //sign up Logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)

      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;

        updateProfile(user, {
          displayName: fullName.current.value, 
          // photoURL: "https://example.com/jane-q-user/profile.jpg"
        }).then(() => {
          // Profile updated!
          const {uid, email, displayName, phoneNumber, photoURL} = auth.currentUser;
          dispatch(addUser({uid:uid, uemail:email, uname:displayName, uphoneNumber:phoneNumber, uphotoURL:photoURL}));
          toggleSignIn();
          navigate("/browse");
        }).catch((error) => {
          // An error occurred
          setErrorMessage(error.message);
        });

        console.log(user)
        // ...
      })
      
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorMessage);
        // ..
      });
    }
    else{
      if(emailCheckMessage || passwordCheckMessage) return;
      //sign in Logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          navigate("/browse");
          console.log(user)
          // ...
        })
        .catch((error) => {
          // const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
        });
    }
  }

  return (
    
    <div className="h-screen  flex justify-center items-center bg-cover bg-center min-h-[621px] ">
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
        
        <form onSubmit={(e)=> e.preventDefault()} className="w-[405px] backdrop-brightness-25  px-10 py-10 flex-col h-fit text-white   rounded-sm">
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
          
          <button className="m-2 p-2 bg-yellow-600 rounded-md w-[300px] "  onClick={handleButtonClick}  >{isSignIn?'Sign In':'Sign Up'}</button>
          
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
