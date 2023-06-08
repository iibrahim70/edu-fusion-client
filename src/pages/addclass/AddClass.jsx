import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';

const AddClass = () => {

  const {user} = useAuth(); 
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    // Perform database submission here with the form data
    // Set the status field to "pending"
    console.log(data);
  };

  return (
    <div className='w-[70%] mx-auto my-10 md:my-20'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Class Name</label>
          <input className="w-full border-b border-[#212121] py-2 px-3 focus:outline-none focus:border-[#2ECC71] focus:ring-2 focus:ring-[#bg-gradient-to-r from-transparent via-lime-700 to-cyan-600]" {...register('className', { required: true })} />
          {errors.className && (
            <span className="text-red-500 text-sm">
              Class Name is required
            </span>
          )}
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Class Image</label>
          <input className="w-full border-b border-[#212121] py-2 px-3 focus:outline-none focus:border-[#2ECC71] focus:ring-2 focus:ring-[#bg-gradient-to-r from-transparent via-lime-700 to-cyan-600]" {...register('classImage', { required: true })} />
          {errors.classImage && (
            <span className="text-red-500 text-sm">
              Class Image is required
            </span>
          )}
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Instructor Name</label>
          <input className="w-full border-b border-[#212121] py-2 px-3 focus:outline-none focus:border-[#2ECC71] focus:ring-2 focus:ring-[#bg-gradient-to-r from-transparent via-lime-700 to-cyan-600]" value={user?.displayName} readOnly />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Instructor Email</label>
          <input className="w-full border-b border-[#212121] py-2 px-3 focus:outline-none focus:border-[#2ECC71] focus:ring-2 focus:ring-[#bg-gradient-to-r from-transparent via-lime-700 to-cyan-600]" value={user?.email} readOnly />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Available Seats</label>
          <input className="w-full border-b border-[#212121] py-2 px-3 focus:outline-none focus:border-[#2ECC71] focus:ring-2 focus:ring-[#bg-gradient-to-r from-transparent via-lime-700 to-cyan-600]" {...register('availableSeats', { required: true })} />
          {errors.availableSeats && (
            <span className="text-red-500 text-sm">
              Enter Available Seats
            </span>
          )}
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Price</label>
          <input className="w-full border-b border-[#212121] py-2 px-3 focus:outline-none focus:border-[#2ECC71] focus:ring-2 focus:ring-[#bg-gradient-to-r from-transparent via-lime-700 to-cyan-600]" {...register('price', { required: true })} />
          {errors.price && (
            <span className="text-red-500 text-sm">
              Price is required
            </span>
          )}
        </div>

        <input type="submit" className="btn btn-primary w-full" value='Add'/>
      </form>
    </div>
  );
};

export default AddClass;
