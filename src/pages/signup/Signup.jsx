import React from 'react';
import { useForm } from 'react-hook-form';
import Lottie from 'lottie-react';
import signupAnimation from '../../assets/animation/register/signup.json';
import { Link } from 'react-router-dom';

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className='flex gap-10'>
      <div className='flex-1 w-full'>
        <Lottie animationData={signupAnimation} loop={true} />
      </div>
      <div className='flex-1 w-full shadow-xl p-10'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block mb-1 font-medium">Name</label>
            <input
              className="w-full border-b border-[#212121] py-2 px-3 focus:outline-none focus:border-[#2ECC71] focus:ring-2 focus:ring-[#bg-gradient-to-r from-transparent via-lime-700 to-cyan-600]"
              {...register('name', { required: true })}
            />
            {errors.name && (
              <span className="text-red-500 text-sm">This field is required</span>
            )}
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Email</label>
            <input
              className="w-full border-b border-[#212121] py-2 px-3 focus:outline-none focus:border-[#2ECC71] focus:ring-2 focus:ring-[#bg-gradient-to-r from-transparent via-lime-700 to-cyan-600]"
              {...register('email', { required: true })}
            />
            {errors.email && (
              <span className="text-red-500 text-sm">This field is required</span>
            )}
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Password</label>
            <input
              type="password"
              className="w-full border-b border-[#212121] py-2 px-3 focus:outline-none focus:border-[#2ECC71] focus:ring-2 focus:ring-[#bg-gradient-to-r from-transparent via-lime-700 to-cyan-600]"
              {...register('password', {
                required: true,
                minLength: 6,
                pattern: /^(?=.*[A-Z])(?=.*[!@#$%^&*])/,
              })}
            />
            {errors.password && errors.password.type === 'required' && (
              <span className="text-red-500 text-sm">This field is required</span>
            )}
            {errors.password && errors.password.type === 'minLength' && (
              <span className="text-red-500 text-sm">
                Password must be at least 6 characters long
              </span>
            )}
            {errors.password && errors.password.type === 'pattern' && (
              <span className="text-red-500 text-sm">
                Password must contain at least one capital letter and one special character
              </span>
            )}
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Confirm Password</label>
            <input
              type="password"
              className="w-full border-b border-[#212121] py-2 px-3 focus:outline-none focus:border-[#2ECC71] focus:ring-2 focus:ring-[#bg-gradient-to-r from-transparent via-lime-700 to-cyan-600]"
              {...register('confirmPassword', {
                required: true,
                validate: (value) => value === password.current || 'Passwords do not match',
              })}
            />
            {errors.confirmPassword && (
              <span className="text-red-500 text-sm">{errors.confirmPassword.message}</span>
            )}
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Photo URL</label>
            <input
              className="w-full border-b border-[#212121] py-2 px-3 focus:outline-none focus:border-[#2ECC71] focus:ring-2 focus:ring-[#bg-gradient-to-r from-transparent via-lime-700 to-cyan-600]"
              {...register('photoURL')}
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Gender</label>
            <input
              className="w-full border-b border-[#212121] py-2 px-3 focus:outline-none focus:border-[#2ECC71] focus:ring-2 focus:ring-[#bg-gradient-to-r from-transparent via-lime-700 to-cyan-600]"
              {...register('gender')}
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Phone Number</label>
            <input
              className="w-full border-b border-[#212121] py-2 px-3 focus:outline-none focus:border-[#2ECC71] focus:ring-2 focus:ring-[#bg-gradient-to-r from-transparent via-lime-700 to-cyan-600]"
              {...register('phoneNumber')}
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Address</label>
            <input
              className="w-full border-b border-[#212121] py-2 px-3 focus:outline-none focus:border-[#2ECC71] focus:ring-2 focus:ring-[#bg-gradient-to-r from-transparent via-lime-700 to-cyan-600]"
              {...register('address')}
            />
          </div>
          
          <div className="mb-4">
            <Link to="/signin" className="text-blue-500">Already Have an account</Link>
          </div>

          <button type="submit" className="btn btn-primary w-full">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
