import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Instructors = () => {
  const { data: instructors = [], isLoading } = useQuery(['instructors'], () =>
    fetch('http://localhost:3000/instructors').then(res => res.json())
  );

  if (isLoading) {
    return <div className='flex items-center justify-center'>
      <span className="loading loading-spinner loading-lg" />
    </div>
  }
  return (
    <div className='grid grid-cols-3 gap-10 my-20'>
      {instructors.map(item => (
        <div key={item._id} className="shadow-xl">
          <figure>
            <img className='h-[90%] w-full' src={item?.picture} alt="Instructor Image" />
          </figure>
          <div className="px-5 space-y-2 py-5">
            <h2>{item?.name}</h2>
            <p>Email: {item?.email}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Instructors;