"use client";
import React, { useRef, useEffect } from "react";
import Header from "./Header";
import { Button } from "../ui/button";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import 'swiper/css/effect-fade';
import { Autoplay, EffectFade } from "swiper/modules";
const Hero = () => {
  //   const videoRef = useRef(null);

  //   useEffect(() => {
  //       const video:any = videoRef.current;

  //       const handleTimeUpdate = () => {
  //           if (video.currentTime >= 7) {
  //               video.currentTime = 1; // Reset to 1 second
  //           }
  //       };

  //       video.addEventListener('timeupdate', handleTimeUpdate);

  //       return () => {
  //           video.removeEventListener('timeupdate', handleTimeUpdate);
  //       };
  //   }, []);
  // var settings = {
  //   // dots: true,
  //   infinite: true,
  //   // autoplay: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  // };
  return (
    // <div className='w-full h-[50rem] bg-cover bg-center' style={{backgroundImage: `url('/images/banner.jpg')`}}>
    //
    //     <div className='flex items-center justify-center p-[100px] flex-col'>
    //         <p className='text-6xl heading'>A <b className='font-bold'>CREATIVE</b>Team</p>
    //         <Button  className='mt-4 h-[60px] w-[250px] rounded-xl bg-transparent' variant={"outline"}>HAVE A PROJECT ? </Button>
    //     </div>
    // </div>
    <div className="w-full">
      <Header />
      {/* <div className="relative w-full h-screen overflow-hidden">
            <video ref={videoRef} className="absolute top-0 left-0 w-full h-full object-cover" autoPlay loop muted>
                <source src="/images/banner.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
                <h1 className="sm:text-4xl text-2xl md:text-6xl font-bold heading leading-10 w-[80%]" data-aos="zoom-in" data-aos-delay="300">Full Service Digital Marketing Agency</h1>
                <p className="mt-4 text-lg md:text-2xl" data-aos="zoom-in" data-aos-delay="300"> Targeting-success through Innovative Solutions with Proven Results</p>
                <button className="btn p-3 text-white rounded-[100px] mt-3 transition-all"><Link href={"/contact"}>Get Started Today</Link></button>

            </div>
        </div> */}
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        speed={3000}
        modules={[Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop={true}
        className="h-[44rem] "
      >
        <SwiperSlide
          className="relative w-full bg-cover bg-center"
          style={{ backgroundImage: `url('/images/banner1.jpeg')` }}
        >
          <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
            <h1
              className="sm:text-4xl text-2xl md:text-6xl font-bold heading leading-10 w-[80%]"
              // data-aos="zoom-in"
              // data-aos-delay="300"
            >
              Full Service Digital Marketing Agency
            </h1>
            <button className="btn p-3 text-white rounded-[100px] mt-3 transition-all">
              <Link href={"/contact"}>Book a free Consultation</Link>
            </button>
          </div>
        </SwiperSlide>

        <SwiperSlide
          className="relative w-full bg-cover bg-center"
          style={{ backgroundImage: `url('/images/banner2.jpeg')` }}
        >
          <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
                <h1 className="sm:text-4xl text-2xl md:text-6xl font-bold heading leading-10 w-[80%]" >Mobile: The Key to Your Business Success – We Optimize for Mobile Excellence</h1>
                <button className="btn p-3 text-white rounded-[100px] mt-3 transition-all"><Link href={"/contact"}>Book a free Consultation</Link></button>

            </div>
        </SwiperSlide>

        <SwiperSlide
          className="relative w-full bg-cover bg-center"
          style={{ backgroundImage: `url('/images/banner3.webp')` }}
        >
          <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
                <h1 className="sm:text-4xl text-2xl md:text-6xl font-bold heading leading-10 w-[80%]" >Maximize Your Reach with Multi-Channel Marketing Solutions</h1>
                <button className="btn p-3 text-white rounded-[100px] mt-3 transition-all"><Link href={"/contact"}>Book a free Consultation</Link></button>

            </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
