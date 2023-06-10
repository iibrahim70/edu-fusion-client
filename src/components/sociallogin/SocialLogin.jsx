import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import useAuth from '../../hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SocialLogin = () => {
  const { googleSignin } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const handleGoogleSignin = () => {
    googleSignin()
      .then(res => {
        const loggedInUser = res.user;
        navigate(from, { replace: true });

        const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email, role: 'student' };
        axios.post('http://localhost:3000/users', saveUser, {
          headers: { 'Content-Type': 'application/json' },
        })
      })
      .catch(err => {
        console.error(err);
      });
  };

  return (
    <div className='flex gap-x-2'>
      <h4 className='font-semibold'>Sign in With</h4>
      <FcGoogle className='w-6 h-6 cursor-pointer' onClick={handleGoogleSignin} />
    </div>
  );
};

export default SocialLogin;
