import React from 'react';
import { useQuery } from '@tanstack/react-query';
import useApi from '../../../../hooks/useApi';
import Swal from 'sweetalert2';


const ManageClasses = () => {

  const { makeRequest } = useApi();

  const {data: classes = [], refetch} = useQuery(['classes'], async () => {
    const res = await fetch('http://localhost:3000/classes')
    return res.json(); 
  }) 

  const handleMakeApprove = item => {
    Swal.fire({
      title: 'Are you sure?',
      text: `Do You Want To Make ${item.className} Approve?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Approve',
      cancelButtonText: 'Cancel'
    }).then(result => {
      if (result.isConfirmed) {
        makeRequest(`classes/approve/${item._id}`, 'PATCH', () => {
          refetch();
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `${item.className} Approved Successfully!`,
            showConfirmButton: false,
            timer: 1500
          });
        });
      }
    });
  };

  const handleMakeDeny = item => {
    Swal.fire({
      title: 'Are you sure?',
      text: `Do You Want To Make ${item.className} Deny?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Deny',
      cancelButtonText: 'Cancel'
    }).then(result => {
      if (result.isConfirmed) {
        makeRequest(`classes/deny/${item._id}`, 'PATCH', () => {
          refetch();
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `${item.className} Denied Successfully!`,
            showConfirmButton: false,
            timer: 1500
          });
        });
      }
    });
  };

  return (
    <div className='w-full p-20'>
      <h1 className='text-2xl text-center pb-5 font-bold'>Available Classes: {classes?.length}</h1>

      <div className='grid grid-cols-2 gap-10'>
        {classes.map((item, index) => <div className="shadow-xl">
          <figure><img className='h-[90%] w-full' src={item?.imageUrl} alt="Classes" /></figure>
          <div className="px-5 space-y-2 py-5">
            <h2 className="font-medium">{item?.className}</h2>
            <h2 className="font-medium">{item?.instructorName}</h2>
            <h2 className="font-medium">{item?.instructorEmail}</h2>
            <p>Seats: {item?.availableSeats}</p>
            <p>Price: ${item?.price}</p>
            <p>Status: {item?.status}</p>

            <div className='flex justify-evenly'>
              <button onClick={() => handleMakeApprove(item)}>Approve</button>
              <button onClick={() => handleMakeDeny(item)}>Deny</button>
              <button>Feedback</button>
            </div>
            {/* <div className="flex justify-end pr-5 pb-2"> */}
              {/* <Link to={`/toydetails/${_id}`} className="btn-primary">Details</Link> */}
            {/* </div> */}
          </div>
        </div>)}
      </div>
    </div>
  );
};

export default ManageClasses;

