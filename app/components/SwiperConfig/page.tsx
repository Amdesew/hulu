"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Card from '../RentHouseCards/page'; // Adjust the import path according to your project structure
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const SwiperComponent = () => {
  return (
    <div className="relative w-full px-0">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation={true}
        pagination={{ clickable: true }}
        speed={800}
        loop={true}
        spaceBetween={20}
        slidesPerView={1}
        slidesPerGroup={1}
        breakpoints={{
          640: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
          768: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
          1024: {
            slidesPerView: 1,
            slidesPerGroup: 1,  // Changed from 0 to 1
          }
        }}
        className="mySwiper px-8"
      >
        {/* Repeat Card component for each slide */}
        <SwiperSlide className="swiper-slide-card w-full">
          <Card />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
