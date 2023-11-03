import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constant';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(store => store.user);

  const logOut = () => {
    signOut(auth).then(() => {
      navigate('/');
    }).catch((error) => {
    });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => { // subscribing the event listener
      if (user) {
        const {uid, email, displayName, accessToken, photoURL} = user;
        dispatch(addUser({uid, email, displayName, accessToken, photoURL}));
        navigate('/browse');
      } else {
        dispatch(removeUser());
        navigate('/');
      }
    });
    return () => unsubscribe(); // removing the event listener on comonent unmount
  }, []);

  return (
    <div className='absolute px-8 py-2 z-10 w-screen bg-gradient-to-b from-black flex justify-between'>
      <img
        className='w-44'
        alt='logo' 
        src= {LOGO}
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