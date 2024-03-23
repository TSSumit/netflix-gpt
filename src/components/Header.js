import React from 'react';
import { LOGO_URL } from '../utils/URLs';

const Header = () => {
  return (
    <div className='absolute top-0 left-0 right-0 px-40 py-7 bg-gradient-to-b from-black  z-10 w-full flex justify-between h-24'>
      <img src={LOGO_URL} alt="NetFlix Logo" className='w-40 inline-block' />
      {/* {isSignIn === "Sign Up" &&
        <button onClick={toggleSignIn} className="py-2 px-5 bg-yellow-600 rounded-md inline-block">Sign In</button>
      } */}
    </div>
  )
}

export default Header