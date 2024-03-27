import React, { useEffect } from 'react';
import { LOGO_URL } from '../utils/constants';
import LogOutDropdown from './LogOutDropDown';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { toggleGptSearch } from '../utils/gptSlice';

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe=onAuthStateChanged(auth,(user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(
          addUser({
            uid: uid,
            uemail: email,
            udisplayName: displayName
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    // Cleanup function to unsubscribe from the auth state listener
    return () => {
      unsubscribe();
    };
  }, []);

  const handleSignInNavigation = () => {
    navigate("/login");
  };
  const handleGptSearchClick=()=> {
    dispatch(toggleGptSearch());
  }
  return (
    <div className='absolute top-0 left-0 right-0 px-40 py-7 bg-gradient-to-b from-black  z-10 w-full flex justify-between h-24'>
      <div>
        <img src={LOGO_URL} alt="NetFlix Logo" className='w-40 inline-block' />
      </div>
      <div>
        <button onClick={handleGptSearchClick} className='bg-white px-3 py-1 m-2 shadow-md  rounded-lg  active:bg-gray-500 '>GPT Search</button>
        {user ?
          <LogOutDropdown />
          :
          <button onClick={handleSignInNavigation} className="py-2 px-3 bg-yellow-600 rounded-md inline-block">Sign In</button>
        }
      </div>
    </div>
  );
};

export default Header;
