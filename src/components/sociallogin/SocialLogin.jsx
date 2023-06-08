import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import useAuth from '../../hooks/useAuth';

const SocialLogin = () => {
  const { googleSignin } = useAuth(); 

  const handleGoogleSignin = () => {
    googleSignin() 
      .then(res => {
        const loggedInUser = res.user; 

        const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email, role: 'student' };
        fetch('http://localhost:3000/users', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(saveUser)
        })
          .then(res => res.json())
          .then(data => {
            if (data.insertedId) {
              console.log('user updated successfully');
            }
          })
      })
      .catch(err => console.error(err));
  }

  return (
    <div className='text-center'>
      <FcGoogle onClick={handleGoogleSignin}/>
    </div>
  );
};

export default SocialLogin;