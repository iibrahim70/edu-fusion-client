import React from 'react';
import { useQuery } from '@tanstack/react-query';

const Classes = () => {
  const { data: classes = [], isLoading } = useQuery(['classes'], () =>
    fetch('http://localhost:3000/approve-classes').then(res => res.json())
  );

  const isAdminOrInstructor = true; // Replace with your role logic

  if (isLoading) {
    return (
      <div className='flex items-center justify-center'>
        <span className="loading loading-spinner loading-lg" />
      </div>
    );
  }

  return (
    <div className='grid grid-cols-3 gap-10 my-20'>
      {classes.map(item => (
        <div key={item._id} className={`shadow-xl ${item.availableSeats === 0 ? 'bg-red-500' : ''}`}>
          <figure>
            <img className='h-[90%] w-full' src={item?.imageUrl} alt="Classes" />
          </figure>
          <div className="px-5 space-y-2 py-5">
            <h2>{item?.className}</h2>
            <h4>Instructor: {item?.instructorName}</h4>
            <p>Seats: {item?.availableSeats}</p>
            <p>Price: ${item?.price}</p>
            <button className='primary-button' disabled={item.availableSeats === 0 || isAdminOrInstructor}>Select</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Classes;
