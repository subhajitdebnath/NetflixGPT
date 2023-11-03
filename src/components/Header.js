import React from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user);

  const logOut = () => {
    signOut(auth).then(() => {
      navigate('/');
    }).catch((error) => {
    });
  }

  return (
    <div className='absolute px-8 py-2 z-10 w-screen bg-gradient-to-b from-black flex justify-between'>
      <img
        className='w-44'
        alt='logo' 
        src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
      />
      {user? <div className='flex p-4 items-center'>
        <div className='text-slate-100 cursor-pointer hover:text-white hover:underline'>{user?.displayName}</div>
        <img
          className="profile-icon w-12 h-12 mr-2" 
          src={user?.photoURL}
          alt=""
        />
        <div className='text-slate-100 cursor-pointer hover:text-white hover:underline' onClick={logOut}>Sign Out</div>
      </div> : ''}
      
    </div>
  )
}

export default Header;