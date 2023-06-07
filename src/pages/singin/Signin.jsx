import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Lottie from 'lottie-react';
import signinAnimation from '../../assets/animation/register/signin.json';
import { Link } from 'react-router-dom';
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs';
import useAuth from '../../hooks/useAuth';

const Signin = () => {
  
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { Login } = useAuth();  

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = user => {
    const {email, password} = user; 
    Login(email, password)
      .then(res => {
        const user = res.user; 
        console.log(user);
      })
      .catch(err => console.error(err));
  };

  return (
    <div className='flex gap-x-5 my-20'>
      <div className='flex-1'>
        <Lottie animationData={signinAnimation} loop={true} />
      </div>

      <div className='flex-1'>
        <form className='shadow-xl p-10' onSubmit={handleSubmit(onSubmit)}>
          
          <div className="mb-4">
            <label className="block mb-1 font-medium">Email</label>
            <input className="w-full border-b border-[#212121] py-2 px-3 focus:outline-none focus:border-[#2ECC71] focus:ring-2 focus:ring-[#bg-gradient-to-r from-transparent via-lime-700 to-cyan-600]" {...register('email', { required: true })}/>
            {errors.email && (
              <span className="text-red-500 text-sm">
                Enter a valid Email
              </span>
            )}
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Password</label>
            <div className="relative">
              <input type={showPassword ? 'text' : 'password'}className="w-full border-b border-[#212121] py-2 pl-3 pr-10 focus:outline-none focus:border-[#2ECC71] focus:ring-2 focus:ring-[#bg-gradient-to-r from-transparent via-lime-700 to-cyan-600]" {...register('password', { required: true })}/>
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                <button type="button" onClick={togglePasswordVisibility}>
                  {showPassword ? <BsEyeFill /> : <BsEyeSlashFill />}
                </button>
              </div>
            </div>

            {errors.password && (
              <span className="text-red-500 text-sm">
                Enter a valid Password
              </span>
            )}
          </div>

          <input type="submit" className="btn btn-primary" value='Login'/>
        </form>

        <div className="mb-4">
          <Link to="/signup" className="text-blue-500">Create an account</Link>
        </div>

        <div className="mb-4">
          {/* Add a social login button */}
        </div>

      </div>
    </div>
  );
};

export default Signin;



