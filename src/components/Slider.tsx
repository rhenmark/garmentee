"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

const Slider = () => {
  return (
    <div className="relative bg-white min-h-[40dvh] py-10 z-20 w-full">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper "
        wrapperClass="w-full !h-[400px]"
      >
        {Array(9)
          .fill("", 0, 9)
          .map((item, index) => (
            <SwiperSlide key={index} className="h-full bg-red-100 text-black">
              Slide {item}
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default Slider;
