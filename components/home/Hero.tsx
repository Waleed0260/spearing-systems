// "use client"
import React from 'react'
import Header from './Header'
import { Button } from '../ui/button'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Hero2 from './Hero2';
import banner from "../../public/images/banner.jpg"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useSwiper } from "swiper/react";
import {Autoplay} from "swiper/modules";
import SwiperCore from "swiper";
// SwiperCore.use([Navigation]);


const Hero = () => {
  var settings = {
    // dots: true,
    infinite: true,
    // autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    // <div className='w-full h-[50rem] bg-cover bg-center' style={{backgroundImage: `url('/images/banner.jpg')`}}>
    //  
    //     <div className='flex items-center justify-center p-[100px] flex-col'>
    //         <p className='text-6xl heading'>A <b className='font-bold'>CREATIVE</b>Team</p>
    //         <Button  className='mt-4 h-[60px] w-[250px] rounded-xl bg-transparent' variant={"outline"}>HAVE A PROJECT ? </Button>
    //     </div>
    // </div>
    <div className='w-full'>
      <Header/>
      <div className='w-full flex relative'>
    <Swiper
    spaceBetween={0}
    slidesPerView={1}
    // onSlideChange={() => console.log("slide change")}
    // onSwiper={(swiper) => console.log(swiper)}
    // navigation={{
    //   prevEl: ".swiper-button-prev",
    //   nextEl: ".swiper-button-next",
    // }}
    autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }}
    speed={3000}
    modules={[Autoplay]}
    loop={true}
    className="h-[44rem] "
    >
    <SwiperSlide className='relative w-full bg-cover bg-center hero-animation' style={{backgroundImage: `url('/images/banner.jpg')`}}>
    <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
    <div className="relative z-10 text-white flex items-center justify-center">
        <div className='flex items-center justify-center p-[100px] flex-col mt-[150px]'>
            <p className='text-6xl heading'>A <b className='font-bold'>CREATIVE</b>Team</p>
            <Button  className='mt-4 h-[60px] w-[250px] rounded-xl bg-transparent' variant={"outline"}>HAVE A PROJECT ? </Button>
        </div>
        </div>

    </SwiperSlide>

    <SwiperSlide className='relative w-full bg-cover bg-center' style={{backgroundImage: `url('/images/banner.jpg')`}}>
    <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
    <div className="relative z-10 text-white">
        <div className='flex items-center justify-center p-[100px] flex-col mt-[150px]'>
            <p className='text-6xl heading'>A UNIQUE SOLUTION</p>
            <Button  className='mt-4 h-[60px] w-[250px] rounded-xl bg-transparent' variant={"outline"}>HAVE A PROJECT ? </Button>
        </div>
        </div>

    </SwiperSlide>

    <SwiperSlide className='relative w-full bg-cover bg-center' style={{backgroundImage: `url('/images/banner.jpg')`}}>
    <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
    <div className="relative z-10 text-white">
        <div className='flex items-center justify-center p-[100px] flex-col mt-[150px]'>
            <p className='text-6xl heading'>spearing systems</p>
            <Button  className='mt-4 h-[60px] w-[250px] rounded-xl bg-transparent' variant={"outline"}>HAVE A PROJECT ? </Button>
        </div>
        </div>

    </SwiperSlide>

    </Swiper>
    </div>

  </div>

  //   <Slider {...settings}>
  //  <div className='w-full h-[50rem] bg-cover bg-center' style={{backgroundImage: `url('/images/banner.jpg')`}}>
  //    
  //       <div className='flex items-center justify-center p-[100px] flex-col'>
  //           <p className='text-6xl heading'>A <b className='font-bold'>CREATIVE</b>Team</p>
  //           <Button  className='mt-4 h-[60px] w-[250px] rounded-xl bg-transparent' variant={"outline"}>HAVE A PROJECT ? </Button>
  //       </div>
  //   </div>
  //     <div>
  //       2
  //     </div>
  //     <div>
  //       3
  //     </div>
  //     {/* <Hero2 img={banner} text="With Unique ideas"/>
  //     <Hero2 img={banner} text="Spearing system"/> */}
  // </Slider>
  )
}

export default Hero