import React from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import useToast from '../../../../hooks/useToast';
import useAuth from '../../../../hooks/useAuth';

const AddClass = () => {
  const { user } = useAuth();
  const { showToast } = useToast();
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const image_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;
  const image_hosting_Url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`;

  const mutation = useMutation(async newClasses => {
    const formData = new FormData();
    formData.append('image', newClasses.classImage[0]);

    const res = await fetch(image_hosting_Url, {
      method: 'POST',
      body: formData
    });

    const data = await res.json();
    if (data.success) {
      const imgUrl = data.data.display_url;

      // send data to the database
      const classesStatus = { status: 'pending' };
      const postData = {
        className: newClasses.className,
        instructorName: user?.displayName,
        instructorEmail: user?.email,
        availableSeats: parseInt(newClasses.availableSeats),
        price: parseFloat(newClasses.price),
        imageUrl: imgUrl,
        ...classesStatus
      };

      const response = await fetch('http://localhost:3000/classes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(postData)
      });
      const responseData = await response.json();
      if (responseData.insertedId) {
        showToast('Class Added Successfully !');
        reset();
      }
    }
  });

  const onSubmit = data => {
    mutation.mutate(data);
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
          <label className="block mb-1 font-medium">Instructor Name</label>
          <input className="w-full border-b border-[#212121] py-2 px-3 focus:outline-none focus:border-[#2ECC71] focus:ring-2 focus:ring-[#bg-gradient-to-r from-transparent via-lime-700 to-cyan-600]" value={user?.displayName} readOnly />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Instructor Email</label>
          <input className="w-full border-b border-[#212121] py-2 px-3 focus:outline-none focus:border-[#2ECC71] focus:ring-2 focus:ring-[#bg-gradient-to-r from-transparent via-lime-700 to-cyan-600]" value={user?.email} readOnly />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Available Seats</label>
          <input className="w-full border-b border-[#212121] py-2 px-3 focus:outline-none focus:border-[#2ECC71] focus:ring-2 focus:ring-[#bg-gradient-to-r from-transparent via-lime-700 to-cyan-600]" type='number' {...register('availableSeats', { required: true })} />
          {errors.availableSeats && (
            <span className="text-red-500 text-sm">
              Enter Available Seats
            </span>
          )}
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Price</label>
          <input className="w-full border-b border-[#212121] py-2 px-3 focus:outline-none focus:border-[#2ECC71] focus:ring-2 focus:ring-[#bg-gradient-to-r from-transparent via-lime-700 to-cyan-600]" type='number' {...register('price', { required: true })} />
          {errors.price && (
            <span className="text-red-500 text-sm">
              Price is required
            </span>
          )}
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Class Image</label>
          <input className="w-full py-2 px-3 focus:outline-none focus:border-[#2ECC71] focus:ring-2 focus:ring-[#bg-gradient-to-r from-transparent via-lime-700 to-cyan-600]" type="file" {...register('classImage', { required: true })} />
          {errors.classImage && (
            <span className="text-red-500 text-sm">
              Class Image is required
            </span>
          )}
        </div>

        <input type="submit" className="btn btn-primary w-full" value='Add' />
      </form>
    </div>
  );
};

export default AddClass;
