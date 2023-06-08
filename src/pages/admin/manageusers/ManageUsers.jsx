import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2'
import useApi from '../../../hooks/useApi';

const ManageUsers = () => {

  const { makeRequest } = useApi();

  const {data: users = [], refetch} = useQuery(['users'], async () => {
    const res = await fetch('http://localhost:3000/users')
    return res.json(); 
  })

  const handleMakeAdmin = user => {
    Swal.fire({
      title: 'Are you sure?',
      text: `Do You Want To Make ${user.name} An Admin?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Admin',
      cancelButtonText: 'Cancel'
    }).then(result => {
      if (result.isConfirmed) {
        makeRequest(`users/admin/${user._id}`, 'PATCH', () => {
          refetch();
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `${user.name} Is An Admin Now!`,
            showConfirmButton: false,
            timer: 1500
          });
        });
      }
    });
  };

  const handleMakeInstructor = user => {
    Swal.fire({
      title: 'Are you sure?',
      text: `Do You Want To Make ${user.name} An Instructor?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Instructor',
      cancelButtonText: 'Cancel'
    }).then(result => {
      if (result.isConfirmed) {
        makeRequest(`users/instructor/${user._id}`, 'PATCH', () => {
          refetch();
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `${user.name} Is An Instructor Now!`,
            showConfirmButton: false,
            timer: 1500
          });
        });
      }
    });
  };

  return (
    <div>
      {/* {users.length} */}
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr className='t-row'>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Make Instructor</th>
              <th>Make Admin</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => <tr key={user._id} className='t-row'>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td className='capitalize'>{user.role}</td>
              <td><button onClick={() => handleMakeInstructor(user)}>Instructor</button></td>
              <td><button onClick={() => handleMakeAdmin(user)}>Admin</button></td>
            </tr>)}
          </tbody>
        </table>
      </div>  
    </div>
  );
};

export default ManageUsers;