"use client";
import React, {useRef, useEffect} from "react";
import Header from "./Header";
import { Button } from "../ui/button";
import Link from "next/link";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Hero2 from "./Hero2";
// import banner from "../../public/images/banner.jpg";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { useSwiper } from "swiper/react";
// import { Autoplay } from "swiper/modules";
// import SwiperCore from "swiper";
// SwiperCore.use([Navigation]);

const Hero = () => {

  const videoRef = useRef(null);

  useEffect(() => {
      const video:any = videoRef.current;

      const handleTimeUpdate = () => {
          if (video.currentTime >= 7) {
              video.currentTime = 1; // Reset to 1 second
          }
      };

      video.addEventListener('timeupdate', handleTimeUpdate);

      return () => {
          video.removeEventListener('timeupdate', handleTimeUpdate);
      };
  }, []);
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
      <div className="relative w-full h-screen overflow-hidden">
            <video ref={videoRef} className="absolute top-0 left-0 w-full h-full object-cover" autoPlay loop muted>
                <source src="/images/banner.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
                <h1 className="text-4xl md:text-6xl font-bold heading">Full Service Digital Marketing Agency</h1>
                <p className="mt-4 text-lg md:text-2xl"> Targeting-success through Innovative Solutions with Proven Results</p>
                <button className="btn p-3 text-white rounded-[100px] mt-3 transition-all"><Link href={"/contact"}>Get Started Today</Link></button>

            </div>
        </div>
      {/* <div className="w-full flex relative">
        <div className="relative w-full bg-cover bg-center hero-animation">
          <video className="hero-video" autoPlay loop muted>
            <source src="/images/banner.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
          <div className="relative z-10 text-white flex items-center justify-center">
            <div className="flex items-center justify-center p-[100px] flex-col mt-[150px]">
              <p className="text-6xl heading">
                A <b className="font-bold">CREATIVE</b>Team
              </p>
              <Button
                className="mt-4 h-[60px] w-[250px] rounded-xl bg-transparent"
                variant={"outline"}
              >
                HAVE A PROJECT ?
              </Button>
            </div>
          </div>
        </div> */}
        {/* <Swiper
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

    </Swiper> */}
      </div>
    // </div>

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
  );
};

export default Hero;
