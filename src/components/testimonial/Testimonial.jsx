import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Rating from "react-rating";
import SectionTitle from "../sectiontitle/SectionTitle";
import "swiper/css";
import "swiper/css/pagination";

const Testimonial = () => {
  const { isLoading, error, data } = useQuery(["testimonial"], () =>
    axios
      .get("https://dressx-server.vercel.app/reviews")
      .then((res) => res.data)
  );

  if (isLoading)
    return (
      <div className="flex items-center justify-center min-h-screen">
        Loading...
      </div>
    );

  if (error)
    return (
      <div className="flex items-center justify-center min-h-screen">
        Error: {error.message}
      </div>
    );

  return (
    <section className="my-10 xl:my-20">
      <SectionTitle
        title="Discover What Our Students Say"
        description="Listen to the stories of our talented fashion design students and alumni. Learn about their inspiring journeys, creative experiences, and the valuable skills they've gained through our programs. Find out why they chose our fashion school and how it has transformed their passion into remarkable careers in the fashion industry."
      />
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
        {data.map((item) => (
          <SwiperSlide
            key={item._id}
            className="border border-slate-300 rounded p-5"
          >
            <div className="space-y-5">
              <p className="text-justify">{item.review.substring(0, 190)}...</p>
              <hr className="w-[90%] mx-auto" />

              <div className="flex flex-row gap-5 items-center justify-center">
                <div className="avatar">
                  <div className="w-24 rounded-full">
                    <img src={item.image} alt={item.name} />
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
                      <span className="text-yellow-300">&#9733;</span>
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
