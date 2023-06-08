import React from 'react';
import { useForm } from 'react-hook-form';
import Lottie from 'lottie-react';
import signupAnimation from '../../assets/animation/register/signup.json';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import SocialLogin from '../../components/sociallogin/SocialLogin';

const Signup = () => {

  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const password = watch('password', '');
  const { createUser, updateUserProfile } = useAuth();  
  
  const onSubmit = user => {
    const { name, email, password, photoURL } = user;

    createUser(email, password)
      .then(res => {
        const user = res.user; 

        updateUserProfile(name, photoURL)
          .then(() => {

            const saveUser = { name: user.name, email: user.email, role: 'student' };
            fetch('http://localhost:3000/users', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(saveUser)
            })
              .then(res => res.json())
              .then(data => {
                if(data.insertedId){
                  console.log('user updated successfully');
                }
              })
          })
          .catch(err => console.log(err))
      })
      .catch(err => console.error(err));    
  };

  return (
    <div className="flex flex-col md:flex-row gap-10 my-10 md:my-20 md:items-center md:justify-center">

      <div className="flex-1">
        <Lottie animationData={signupAnimation} loop={true} />
      </div>

      <div className="flex-1">
        <div className='shadow-xl py-10'>
          <form className='w-[70%] mx-auto' onSubmit={handleSubmit(onSubmit)}>
            
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

          {/* toggle singin */}
          <div className="my-5">
            <Link to="/signin" className="text-blue-500">Already Have an account</Link>
          </div>

          {/* social login */}
          <SocialLogin/>
        </div>
      </div>
    </div>
  );
};

export default Signup;
