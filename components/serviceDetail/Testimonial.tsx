"use client"
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import { useSwiper } from "swiper/react";
import {Autoplay, Navigation, Pagination} from "swiper/modules";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
const Testimonial = ({testimonial}:any) => {
  return (
    <div className='w-full flex items-center justify-center'>
        <div className="lg:w-[1000px] w-[70%] m-[40px] relative">
            <Swiper
            slidesPerView={1}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          speed={1500}
          modules={[Navigation, Pagination, Autoplay]}
          loop={true}
          navigation={{
            nextEl: ".custom-next", // Custom class for the next button
            prevEl: ".custom-prev", // Custom class for the previous button
          }}
          className="w-full relative"
            >
                {testimonial?.map((item:any)=>{
                    return(
                        <SwiperSlide>
                            <div className="w-[90%] md:w-[50%] relative left-[20px] md:left-[300px]">

                            <p className='text text-xl'>{item.review}</p>
                            <p className='heading'>{item.name}</p>
                            <p className='mid-heading'>{item.position}</p>
                            </div>
                        </SwiperSlide>
                    )
                })}
                   <div className="custom-prev md:flex hidden absolute top-1/2 left-4 transform -translate-y-1/2 bg-[#FEC544] text-black h-12 w-12 text-white rounded-full flex items-center justify-center cursor-pointer z-50 text-3xl">
        <FaAngleLeft/>
      </div>
      <div className="custom-next md:flex hidden absolute top-1/2 right-4 transform -translate-y-1/2 bg-[#FEC544] text-black h-12 w-12 rounded-full flex items-center justify-center cursor-pointer z-50 text-3xl text-white">
        <FaAngleRight/>
      </div>
            </Swiper>
        </div>
    </div>
  )
}

export default Testimonial