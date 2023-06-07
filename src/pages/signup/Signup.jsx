import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Lottie from 'lottie-react';
import signupAnimation from '../../assets/animation/register/signup.json';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Signup = () => {

  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const password = watch('password', '');
  const { createUser, updateUserProfile } = useAuth();  
  
  const onSubmit = user => {
    const { name, email, password, photoURL } = user;
    createUser(email, password)
      .then(res => {
        const user = res.user; 
        console.log(user);

        updateUserProfile(name, photoURL)
          .then(() => {
            console.log('User Profile Info Updated Successfully');
          })
          .catch(err => console.log(err))
      })
      
      .catch(err => console.error(err));    
  };

  return (
    <div className="flex gap-10">

      <div className="flex-1 w-full">
        <Lottie animationData={signupAnimation} loop={true} />
      </div>

      <div className="flex-1 w-full shadow-xl p-10">
        <form onSubmit={handleSubmit(onSubmit)}>
          
          <div className="mb-4">
            <label className="block mb-1 font-medium">Name</label>
            <input className="w-full border-b border-[#212121] py-2 px-3 focus:outline-none focus:border-[#2ECC71] focus:ring-2 focus:ring-[#bg-gradient-to-r from-transparent via-lime-700 to-cyan-600]" {...register('name', { required: true })}/>
            {errors.name && (
              <span className="text-red-500 text-sm">
                Name is required
              </span>
            )}
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Email</label>
            <input className="w-full border-b border-[#212121] py-2 px-3 focus:outline-none focus:border-[#2ECC71] focus:ring-2 focus:ring-[#bg-gradient-to-r from-transparent via-lime-700 to-cyan-600]" {...register('email', { required: true })}/>
            {errors.email && (
              <span className="text-red-500 text-sm">
                Email is required
              </span>
            )}
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Password</label>
            <input type="password" className="w-full border-b border-[#212121] py-2 px-3 focus:outline-none focus:border-[#2ECC71] focus:ring-2 focus:ring-[#bg-gradient-to-r from-transparent via-lime-700 to-cyan-600]"
              {...register('password', {
                required: 'Password is required',
                validate: {
                  minLength: (value) =>
                    value.length >= 6 ||
                    'Password must be at least 6 characters long',
                  capitalLetter: (value) =>
                    /[A-Z]/.test(value) ||
                    'Password must contain at least one capital letter',
                  specialCharacter: (value) =>
                    /[!@#$%^&*]/.test(value) ||
                    'Password must contain at least one special character',
                },
              })}
            />
            {errors.password && (
              <span className="text-red-500 text-sm">
                {errors.password.message}
              </span>
            )}
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Confirm Password</label>
            <input type="password" className="w-full border-b border-[#212121] py-2 px-3 focus:outline-none focus:border-[#2ECC71] focus:ring-2 focus:ring-[#bg-gradient-to-r from-transparent via-lime-700 to-cyan-600]"
              {...register('confirmPassword', {
                required: 'Confirm Password is required',
                validate: (value) =>
                  value === password || 'Passwords do not match',
              })}
            />
            {errors.confirmPassword && (
              <span className="text-red-500 text-sm">
                {errors.confirmPassword.message}
              </span>
            )}
          </div>


          <div className="mb-4">
            <label className="block mb-1 font-medium">Photo URL</label>
            <input className="w-full border-b border-[#212121] py-2 px-3 focus:outline-none focus:border-[#2ECC71] focus:ring-2 focus:ring-[#bg-gradient-to-r from-transparent via-lime-700 to-cyan-600]" {...register('photoURL', { required: true })}/>
            {errors.photoURL && (
              <span className="text-red-500 text-sm">
                Photo URL is required
              </span>
            )}
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Gender</label>
            <select className="w-full border-b border-[#212121] py-2 px-3 focus:outline-none focus:border-[#2ECC71] focus:ring-2 focus:ring-[#bg-gradient-to-r from-transparent via-lime-700 to-cyan-600]" {...register('gender', { required: true })}>
              <option disabled>Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            {errors.gender && (
              <span className="text-red-500 text-sm">
                Gender is required
                </span>
            )}
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Phone Number</label>
            <input className="w-full border-b border-[#212121] py-2 px-3 focus:outline-none focus:border-[#2ECC71] focus:ring-2 focus:ring-[#bg-gradient-to-r from-transparent via-lime-700 to-cyan-600]" {...register('phoneNumber', { required: true })} />
            {errors.phoneNumber && (
              <span className="text-red-500 text-sm">
                Number is required
              </span>
            )}
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Address</label>
            <input className="w-full border-b border-[#212121] py-2 px-3 focus:outline-none focus:border-[#2ECC71] focus:ring-2 focus:ring-[#bg-gradient-to-r from-transparent via-lime-700 to-cyan-600]" {...register('address', { required: true })}/>
            {errors.address && (
              <span className="text-red-500 text-sm">
                Address is required
              </span>
            )}
          </div>

          <input type="submit" className="btn btn-primary w-full" value='Submit'/>
        </form>

        <div className="mt-4">
          <Link to="/signin" className="text-blue-500">
            Already Have an account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
