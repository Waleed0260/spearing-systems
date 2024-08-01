// "use client"
import React, { useEffect } from "react";
import { GoLightBulb } from "react-icons/go";
import { PiBeerBottleDuotone, PiTimerBold } from "react-icons/pi";
import { TbTargetArrow } from "react-icons/tb";
import { FcSmartphoneTablet } from "react-icons/fc";
import { FaPenRuler } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import { FaArrowRight } from "react-icons/fa6";

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);
  const services = [
    {
      id: 1,
      icon: <GoLightBulb />,
      heading: "DEVELOPMENT",
      text: "Need something changed or is there something not quite working Aellente",
    },
    {
      id: 2,
      icon: <PiBeerBottleDuotone />,
      heading: "MARKETING",
      text: "Need something changed or is there something not quite working Aellente",
    },
    {
      id: 3,
      icon: <PiTimerBold />,
      heading: "DESIGNING",
      text: "Need something changed or is there something not quite working Aellente",
    },
    {
      id: 4,
      icon: <FcSmartphoneTablet />,
      heading: "BRANDING",
      text: "Need something changed or is there something not quite working Aellente",
    },
    {
      id: 5,
      icon: <TbTargetArrow />,
      heading: "PPC",
      text: "Need something changed or is there something not quite working Aellente",
    },
    {
      id: 6,
      icon: <FaPenRuler />,
      heading: "ADS",
      text: "Need something changed or is there something not quite working Aellente",
    },
  ];

  return (
    <div
      className="flex flex-col justify-center items-center p-6"
      data-aos="fade-up"
    >
      <b className="font-bold text-3xl heading">Services</b>
      {/* <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 p-4 gap-3'>
            {services.map((item:any, index:any)=>{
                return(
                    <div className='flex flex-col gap-3' key={item.id}>

                    <p className='text-blue-600 text-4xl'>{item.icon}</p>
                    <b className='font-bold text-3xl mid-heading'>{item.heading}</b>
                    <p>{item.text}</p>
                    </div>
                )
            })}
        </div> */}
      <Swiper
        // navigation={true}
        modules={[Pagination, Navigation]}
        // slidesPerView={3}
        pagination={{ clickable: true }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          480: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          980: {
            slidesPerView: 4,
          },
        }}
        loop={true}
        className="w-[88%] h-[420px] flex items-center justify-center"
      >
        {services.map((item) => {
          return (
            <SwiperSlide key={item.id} className="flex justify-center items-center">
              <div className="flex flex-col gap-3 lg:w-[19vw] md:w-[33vw] w-[71vw] h-[368px] servicebox transition-all items-center  bg-[#f2f2f2] m-[20px] lg:ml-[20px] sm:ml-[40px] ml-[9px]" key={item.id}>
                <p className=" text-6xl mt-[30px]">{item.icon}</p>
                <b className="font-bold text-3xl mid-heading mt-[15px]">{item.heading}</b>
                <p className="w-[70%] text-center text">{item.text}</p>
                <p className='font-bold text-xl bg-gray-700 bg-opacity-20 text-center p-[15px] mt-[10px] flex items-center rounded-[100px]'><FaArrowRight/></p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Services;
