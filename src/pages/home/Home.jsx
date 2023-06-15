import React from 'react';
import Instructors from '../instructors/Instructors';
import MyCarousel from '../../components/mycarousel/MyCarousel';
import Hero from '../../components/hero/Hero';
import Classes from '../classes/Classes';

const Home = () => {
  return (
    <>
      <Hero/>
      <MyCarousel/>
      <Classes/>
      <Instructors/>
    </>
  );
};

export default Home;

