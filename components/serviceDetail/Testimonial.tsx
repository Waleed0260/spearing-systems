"use client"
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useSwiper } from "swiper/react";
import {Autoplay, Navigation, Pagination} from "swiper/modules";

const Testimonial = ({testimonial}:any) => {
  return (
    <div className='w-full flex items-center justify-center'>
        <div className="w-[70%] m-[40px]">
            <Swiper
            slidesPerView={1}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          speed={1500}
          modules={[Navigation, Pagination, Autoplay]}
          loop={true}
          className="w-full "
            >
                {testimonial?.map((item:any)=>{
                    return(
                        <SwiperSlide>
                            <div className='flex flex-col items-center justfiy-center p-3'>

                            <p className='text text-center text-xl'>{item.review}</p>
                            <p className='heading'>{item.name}</p>
                            <p className='mid-heading'>{item.position}</p>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    </div>
  )
}

export default Testimonial