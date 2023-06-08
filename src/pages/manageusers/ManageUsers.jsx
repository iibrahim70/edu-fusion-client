import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2'

const ManageUsers = () => {
  const {data: users = [], refetch} = useQuery(['users'], async () => {
    const res = await fetch('http://localhost:3000/users')
    return res.json(); 
  })

  const handleMakeAdmin = user => {
    Swal.fire({
      title: 'Are you sure?',
      text: `Do you want to make ${user.name} an admin?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes',
      cancelButtonText: 'Cancel'
    }).then(result => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/users/admin/${user._id}`, {
          method: 'PATCH'
        })
          .then(res => res.json())
          .then(data => {
            if (data.modifiedCount) {
              refetch();
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `${user.name} is an Admin now!`,
                showConfirmButton: false,
                timer: 1500
              });
            }
          });
      }
    });
  };

  const handleMakeInstructor = user => {
    Swal.fire({
      title: 'Are you sure?',
      text: `Do you want to make ${user.name} an instructor?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes',
      cancelButtonText: 'Cancel'
    }).then(result => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/instructor/admin/${user._id}`, {
          method: 'PATCH'
        })
          .then(res => res.json())
          .then(data => {
            if (data.modifiedCount) {
              refetch();
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `${user.name} is an Admin now!`,
                showConfirmButton: false,
                timer: 1500
              });
            }
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