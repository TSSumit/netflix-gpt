import React, { useState } from 'react';
import { Logout } from '@icon-park/react';
import { useSelector } from 'react-redux';
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
const LogOutDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  console.log(user);
  if (!user) {
    return <div>Loading...</div>; // or any other fallback UI
  }
  const {uemail, udisplayName, uid}=user;
  console.log(uemail+" "+udisplayName+" "+uid);
  const handleSignOut=()=>{
    signOut(auth).then(() => {
        
    }).catch((error) => {
    // An error happened.
      navigate("/error");
    });
  }

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div 
        className="relative inline-block text-left dropdown" 
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
    >
      <span className=" rounded-lg shadow-sm">
        <span
          className="inline-flex w-full px-2 py-0 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-gray-100 border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800"
          type="span"
          aria-haspopup="true"
          aria-expanded={isOpen ? 'true' : 'false'}
          aria-controls="headlessui-menu-items-117"
          onClick={toggleDropdown}
        >
          <Logout theme="filled" size="23" fill="#fc0408"/>
        </span>
      </span>
      <div
        className={`${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        } dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95`}
      >
        <div className="absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none">
          <div className="px-4 py-3">
            <p className="text-sm leading-5">Signed in as</p>
            <p className="cursor-pointer text-sm font-medium leading-5 text-gray-900 truncate">
              {udisplayName}
            </p>
          </div>
          <div className="py-1">
            <p
              tabIndex="0"
              className="cursor-pointer text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
              role="menuitem"
            >
              Account settings
            </p>
            <p
              tabIndex="1"
              className="cursor-pointer text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
              role="menuitem"
            >
              Support
            </p>
            <span
              role="menuitem"
              tabIndex="-1"
              className="flex justify-between w-full px-4 py-2 text-sm leading-5 text-left text-gray-700 cursor-not-allowed opacity-50"
              aria-disabled="true"
            >
              New feature (soon)
            </span>
            <p
              tabIndex="2"
              className="cursor-pointer text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
              role="menuitem"
            >
              License
            </p>
          </div>
          <div className="py-1">
            <p
              tabIndex="3"
              className="text-gray-700 cursor-pointer flex justify-between w-full px-4 py-2 text-sm leading-5 text-left hover:underline"
              role="menuitem"
              onClick={handleSignOut}
            >
              Sign out
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogOutDropdown;
