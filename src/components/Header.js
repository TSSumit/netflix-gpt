import React, { useEffect } from 'react';
import { LOGO_URL } from '../utils/URLs';
import LogOutDropdown from './LogOutDropDown';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';

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
  }, [dispatch, navigate]);

  const handleSignInNavigation = () => {
    navigate("/login");
  };

  return (
    <div className='absolute top-0 left-0 right-0 px-40 py-7 bg-gradient-to-b from-black  z-10 w-full flex justify-between h-24'>
      <div>
        <img src={LOGO_URL} alt="NetFlix Logo" className='w-40 inline-block' />
      </div>
      <div>
        {user ?
          <LogOutDropdown />
          :
          <button onClick={handleSignInNavigation} className="py-2 px-5 bg-yellow-600 rounded-md inline-block">Sign In</button>
        }
      </div>
    </div>
  );
};

export default Header;
