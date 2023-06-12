import React from 'react';
import { useQuery } from '@tanstack/react-query';
import useAdmin from '../../hooks/useAdmin';
import useInstructor from '../../hooks/useInstructor';
import useAuth from '../../hooks/useAuth';
import useToast from '../../hooks/useToast';
import { useLocation, useNavigate } from 'react-router-dom';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const Classes = () => {
  const { user } = useAuth();
  const { showToast } = useToast();
  const navigate = useNavigate();
  const location = useLocation();
  const [axiosSecure] = useAxiosSecure();

  const { data: classes = [], isLoading } = useQuery(['classes'], () =>
    fetch('http://localhost:3000/approve-classes').then((res) => res.json())
  );

  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center">
        <span className="loading loading-spinner loading-lg" />
      </div>
    );
  }

  const handleSelect = (item) => {
    if (user) {
      const orderItem = { classId: item._id, userEmail: user.email, userName: user.displayName, availableSeats: item.availableSeats, price: item.price, imageUrl: item.imageUrl, enrollStudent: item.enrollStudent };
      axiosSecure.post('http://localhost:3000/carts', orderItem)
        .then(() => {
          showToast('Add To Cart Successfully!');
        })
        .catch((error) => {
          console.error('Error adding to cart:', error);
          showToast('Failed to add to cart');
        });
    } else {
      navigate('/signin', { state: { from: location } });
    }
  };

  return (
    <div className="grid grid-cols-3 gap-10 my-20">
      {classes.map((item) => (
        <div
          key={item._id}
          className={`shadow-xl ${item.availableSeats === 0 ? 'bg-red-500' : ''}`}
        >
          <figure>
            <img className="h-[90%] w-full" src={item?.imageUrl} alt="Classes" />
          </figure>
          <div className="px-5 space-y-2 py-5">
            <h2>{item?.className}</h2>
            <h4>{item?.instructorName}</h4>
            <p>Seats: {item?.availableSeats}</p>
            <p>Price: ${item?.price}</p>
            {isAdmin || isInstructor || item.availableSeats === 0 ? (
              <button className="disabled-button" disabled>
                Select
              </button>
            ) : (
              <button onClick={() => handleSelect(item)} className="primary-button">
                Select
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Classes;
