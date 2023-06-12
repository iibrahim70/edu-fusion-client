import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import heroImageOne from '../../assets/hero/1.jpg';
import heroImageTwo from '../../assets/hero/2.jpg';
import heroImageThree from '../../assets/hero/3.jpg';
import heroImageFour from '../../assets/hero/4.avif';

const MyCarousel = () => {
  return (
    <Swiper height='100vh'
      slidesPerView={3}
      spaceBetween={30}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img src={heroImageOne} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={heroImageTwo} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={heroImageThree} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={heroImageFour} alt="" />
      </SwiperSlide>
      
    </Swiper>
  );
};

export default MyCarousel;


