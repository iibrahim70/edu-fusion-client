import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import SectionTitle from "./SectionTitle";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { ITestimonial } from "@/types";
import Rating from "./Rating";

const Testimonials = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: ["testimonials"],
    queryFn: () =>
      axios
        .get("https://edu-fusiion.vercel.app/api/v1/testimonials")
        .then((res) => res?.data?.data),
  });

  if (isLoading)
    return (
      <div className="flex items-center justify-center min-h-screen">
        Loading...
      </div>
    );

  if (error)
    return (
      <div className="flex items-center justify-center min-h-screen">
        Error: {error?.message}
      </div>
    );

  return (
    <section className="section-wrapper">
      <SectionTitle
        title="Hear From Our Learners"
        description="Discover how our courses have positively impacted their learning experiences."
      />

      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
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
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {data?.map((item: ITestimonial) => (
          <SwiperSlide key={item?._id} className="shadow rounded-md border p-5">
            <div className="space-y-5">
              <p className="text-justify line-clamp-4">{item?.review}</p>
              <hr className="w-[90%] mx-auto border-black/50" />

              <div className="flex items-center justify-center gap-5">
                <img
                  src={item?.userId?.avatar}
                  alt={item?.userId?.fullName}
                  className="size-14 object-cover rounded-full"
                />

                <div className="space-y-1.5">
                  <p className="text-base font-bold">
                    {item?.userId?.fullName}
                  </p>

                  <Rating value={item?.rating} />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
