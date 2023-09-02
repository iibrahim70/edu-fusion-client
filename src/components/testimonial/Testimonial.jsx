import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import TestimonialData from "../../../public/testimonial.json";
import Rating from "react-rating";
import "swiper/css";
import "swiper/css/pagination";

const Testimonial = () => {
  return (
    <section className="min-h-screen">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {TestimonialData.map((item) => (
          <SwiperSlide key={item.id} className="border rounded p-5">
            <div className="space-y-5">
              <p className="text-justify">{item.review.substring(0, 220)}...</p>
              <hr className="w-[90%] mx-auto" />

              <div className="flex flex-row gap-5 items-center">
                <div className="avatar">
                  <div className="w-24 rounded-full">
                    <img src={item.picture} alt={item.name} />
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold truncate">
                    {item.name}
                  </h3>
                  <Rating
                    className="text-[24px]"
                    initialRating={item.rating}
                    readonly
                    emptySymbol={<span className="text-gray-300">&#9734;</span>}
                    fullSymbol={
                      <span className="text-yellow-400">&#9733;</span>
                    }
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonial;
