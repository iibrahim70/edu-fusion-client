import React from 'react';
import Home from '../pages/home/Home';
import Navbar from '../components/shared/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/shared/Footer';

const Main = () => {
  return (
    <div>
      <Navbar/>
      <div className='w-[90%] mx-auto'>
        <Outlet />
      </div>
      <Footer/>
    </div>
  );
};

export default Main;