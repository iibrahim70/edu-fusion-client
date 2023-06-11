import React from 'react';
import Instructors from '../instructors/Instructors';
import MyCarousel from '../../components/mycarousel/MyCarousel';
import Hero from '../../components/hero/Hero';

const Home = () => {
  return (
    <>
      <Hero/>
      <MyCarousel/>
      <Instructors/>
    </>
  );
};

export default Home;

