import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination, Keyboard, Navigation } from 'swiper/modules';
import img1 from "../../assets/galleryImg1.png"
import img2 from "../../assets/galleryImg2.png"
import img3 from "../../assets/galleryImg3.png"
import img4 from "../../assets/gallery2.png"
const GallerySwiper = () => {
  return (
    <div className="w-full">
      <div className="w-[90%] max-w-[1200px] mx-auto md:px-0 px-4 md:pt-32 pt-16 md:pb-20 pb-16">
        <div className="flex pb-16 md:flex-row flex-col justify-between">
          <div className="">
            <h2 className="text-[#1A1A1A] text-[20px] leading-[26.59px] font-[700]">
              Gallery
            </h2>
            <h1 className="text-[#1A1A1A] md:block hidden mt-6 lg:text-[57px] md:text-[50px] text-[40px] md:leading-[59.78px] leading-tight font-[700]">
            Moments captured by <br /> connoisseurs of The deep
            </h1>
            <h1 className="text-[#1A1A1A] mt-6 md:hidden md:text-[57px] text-[40px] md:leading-[59.78px] leading-tight font-[700]">
            Moments captured by connoisseurs of The deep
            </h1>
          </div>
          <div className="flex items-center justify-end md:w-[30%] gap-x-4">
            {" "}
            <p className="leading-[19.94px] md:mt-0 mt-5 text-[13px] font-[400] text-[#1A1A1A]">
            Submerge into the heart of the ocean with us. At Tamarin Ocean Pro, we weave through the water’s embrace, uncovering and capturing the silent dance of aquatic life. Witness the grace of the sea in our gallery.
            </p>
          </div>
        </div>
        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        breakpoints={{
          
          315: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        freeMode={false}
        keyboard={{
            enabled: true,
          }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[FreeMode, Pagination, Keyboard, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={img1} alt="" className='w-[500px] h-[400px] mb-20 object-cover'/></SwiperSlide>
        <SwiperSlide><img src={img2} alt="" className='w-[500px] h-[400px] object-cover'/></SwiperSlide>
        <SwiperSlide>  <div className="relative">
            <img src={img3} alt="" className="w-[500px] h-[400px] object-cover" />
            <h1 className="absolute md:left-[80px] left-[45px] top-[180px] text-white text-[36px] leading-[48.75px] font-[700]">
              Tamarin Bay
            </h1>
          </div></SwiperSlide>
        <SwiperSlide><img src={img4} alt="" className='w-[500px] h-[400px] object-cover'/></SwiperSlide>
        <SwiperSlide><img src={img1} alt="" className='w-[500px] h-[400px] object-cover'/></SwiperSlide>
       
      </Swiper>
      </div>
    </div>
  );
};

export default GallerySwiper;
