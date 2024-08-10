import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {Autoplay, Navigation, Pagination} from "swiper/modules";
import Image from 'next/image';
import clinicalpartner from "../../public/images/clinicalPartner.png";
import hb from "../../public/images/hb.png";
import imperva from "../../public/images/imperva.png";
import intra from "../../public/images/intra.png";
import logan from "../../public/images/logan.png";
import longhorn from "../../public/images/longhorn.jpeg";
import maryaland from "../../public/images/maryaland.png";
import pulp from "../../public/images/pulp.jpeg";
import stovall from "../../public/images/stovall.jpeg";
import think from "../../public/images/think.jpeg";
import voltage from "../../public/images/voltage.jpeg";
import portLogo from "../../public/images/portLogo.png"
import atlas from "../../public/images/atlas.jpeg"
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
          <div className="w-[213px] h-[110px] ">
            <Image src={clinicalpartner} alt="" className='w-full h-full overflow-hidden'/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[130px] h-[100px] ml-9">
            <Image src={think} alt="" className='w-full h-full overflow-hidden'/>
          </div>
        </SwiperSlide>  <SwiperSlide>
          <div className="w-[130px] h-[100px]">
            <Image src={maryaland} alt="" className='w-full h-full overflow-hidden'/>
          </div>
        </SwiperSlide> <SwiperSlide>
          <div className="w-[130px] h-[100px]">
            <Image src={intra} alt="" className='w-full h-full overflow-hidden'/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[130px] h-[100px]">
            <Image src={logan} alt="" className='w-full h-full overflow-hidden'/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[130px] h-[100px]">
            <Image src={longhorn} alt="" className='w-full h-full overflow-hidden'/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[130px] h-[100px]">
            <Image src={pulp} alt="" className='w-full h-full overflow-hidden'/>
          </div>
        </SwiperSlide>
      </Swiper>
        </div>
    </div>
  )
}

export default Slider