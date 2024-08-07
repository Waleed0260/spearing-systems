import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {Autoplay, Navigation, Pagination} from "swiper/modules";
import Image from 'next/image';
import adobe from "../../public/images/adobe.png"
import meta from "../../public/images/meta.png"
import shopify from "../../public/images/Shopify.png"
import googleads from "../../public/images/googleads.png"
import hubspot from "../../public/images/hubspot.png"
import kyaviyo from "../../public/images/kyaviyo.png"
import magento from "../../public/images/magento.png"
import react from "../../public/images/react.png"
import woocommerce from "../../public/images/woocommerce.png"
import wordpress from "../../public/images/wordpress.png"
const Slider = () => {
  return (
    <div className='w-full flex items-center justify-center'>
        <div className='w-[80%] flex items-center justify-center m-6'>
        <Swiper
        // spaceBetween={50}
        breakpoints={{
          0:{
            slidesPerView: 1,
          },
          480:{
            slidesPerView: 2,
          },
          768:{
            slidesPerView: 3,
          },
          980:{
            slidesPerView: 5,
          }
        }}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        speed={1000}
        modules={[Navigation, Pagination, Autoplay]}
        loop={true}
        className="w-[80%] h-[120px]"
      >
        <SwiperSlide>
          <div className="w-[200px] h-[100px] ">
            <Image src={adobe} alt="" className='w-full h-full overflow-hidden'/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[200px] h-[100px]">
            <Image src={shopify} alt="" className='w-full h-full overflow-hidden'/>
          </div>
        </SwiperSlide>  <SwiperSlide>
          <div className="w-[200px] h-[100px]">
            <Image src={react} alt="" className='w-full h-full overflow-hidden'/>
          </div>
        </SwiperSlide> <SwiperSlide>
          <div className="w-[200px] h-[100px]">
            <Image src={magento} alt="" className='w-full h-full overflow-hidden'/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[200px] h-[100px]">
            <Image src={meta} alt="" className='w-full h-full overflow-hidden'/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[200px] h-[100px]">
            <Image src={hubspot} alt="" className='w-full h-full overflow-hidden'/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[200px] h-[100px]">
            <Image src={wordpress} alt="" className='w-full h-full overflow-hidden'/>
          </div>
        </SwiperSlide>
      </Swiper>
        </div>
    </div>
  )
}

export default Slider