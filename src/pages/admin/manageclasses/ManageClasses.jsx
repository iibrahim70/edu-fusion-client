import React from 'react';
import { useQuery } from '@tanstack/react-query';

const ManageClasses = () => {
  const {data: classes = [], refetch} = useQuery(['classes'], async () => {
    const res = await fetch('http://localhost:3000/classes')
    return res.json(); 
  }) 
  return (
    <div className='w-full p-20'>
      <h1 className='text-2xl text-center pb-5 font-bold'>Available Classes {classes?.length}</h1>

      <div className='grid grid-cols-2 gap-10'>
        {classes.map(item => <div className="shadow-xl">
          <figure className='h-52'><img className='h-[90%] w-full' src={item?.imageUrl} alt="Toys" /></figure>
          <div className="ps-5 space-y-2">
            <h2 className="font-medium">{item?.className}</h2>
            <h2 className="font-medium">{item?.instructorName}</h2>
            <h2 className="font-medium">{item?.instructorEmail}</h2>
            <p>Seats: {item?.availableSeats}</p>
            <p>Price: ${item?.price}</p>
            <div className="flex justify-end pr-5 pb-2">
              {/* <Link to={`/toydetails/${_id}`} className="btn-primary">Details</Link> */}
            </div>
          </div>
        </div>)}
      </div>
    </div>
  );
};

export default ManageClasses;

