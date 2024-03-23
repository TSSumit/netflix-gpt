import React from 'react';
import { LOGO_URL } from '../utils/URL\'S';

const Header = () => {
  return (
    <div className='top-0 left-0 right-0 px-40 py-7 bg-gradient-to-b from-black  z-10'>
      <img src={LOGO_URL} alt="NetFlix Logo" className='w-40' />
    </div>
  )
}

export default Header