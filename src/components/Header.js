import React from 'react';
import { LOGO_URL } from '../utils/URLs';
import LogOutDropdown from './LogOutDropDown';
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const user=useSelector((state)=>state.user);
  const navigate=useNavigate();
  const handleSignInNavigation=()=>{
    navigate("/login");
  }
  return (
    <div className=' top-0 left-0 right-0 px-40 py-7 bg-gradient-to-b from-black  z-10 w-full flex justify-between h-24'>
      <div>
        <img src={LOGO_URL} alt="NetFlix Logo" className='w-40 inline-block' />
      </div>
      <div>
        {user ?<LogOutDropdown/>: <button onClick={handleSignInNavigation} className='bg-white p-2 rounded-md'>LogIn</button>}
      </div>

      
    </div>
  )
}

export default Header