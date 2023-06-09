import React from 'react';
import { useQuery } from '@tanstack/react-query';

import useAuth from '../../../../hooks/useAuth';

const fetchMyClasses = async (email) => {
  const response = await fetch(`http://localhost:3000/myclasses?email=${email}`);
  const data = await response.json();
  return data;
};

const MyClasses = () => {
  const { user } = useAuth();

  const { data: myclasses = [], isLoading } = useQuery(['myClasses', user?.email], () =>
    fetchMyClasses(user?.email)
  );

  if (isLoading) return <span className="loading loading-dots loading-md"/>

  return (
    <div className='w-full p-20'>
      <h1 className='text-2xl text-center pb-5 font-bold'>My Total Classes: {myclasses?.length}</h1>

      <div className='grid grid-cols-2 gap-10'>
        {myclasses.map((item, index) => (
          <div className='shadow-xl' key={index}>
            <figure>
              <img className='h-[90%] w-full' src={item?.imageUrl} alt='Classes' />
            </figure>
            <div className='px-5 space-y-2 py-5'>
              <h2 className='font-medium'>{item?.className}</h2>
              <p>Seats: {item?.availableSeats}</p>
              <p>Price: ${item?.price}</p>
              <p>Status: {item?.status}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyClasses;
