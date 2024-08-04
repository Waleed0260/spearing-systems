"use client";
import React from "react";
import client1 from "../../public/images/client1.png";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useSwiper } from "swiper/react";
import {Autoplay, Navigation, Pagination} from "swiper/modules";
import SwiperCore from "swiper";
SwiperCore.use([Navigation]);
import test1 from "../../public/images/test1.png"
import test2 from "../../public/images/test2.png"
import test3 from "../../public/images/test3.png"
import test4 from "../../public/images/test4.png"
import test5 from "../../public/images/test5.png"

const Testimonial = () => {

  return (
    <div className="flex flex-col justify-center items-center p-4 m-5 mt-[130px] text-white ">
      <p className="font-bold text-2xl text-black">Testimonial</p>

      <Swiper
        // spaceBetween={50}
        slidesPerView={1}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
        modules={[Navigation]}
        className="w-[80%] bg-black"
      >
        <SwiperSlide>
          <div className="flex flex-row items-center justify-center p-4">
            <div className="flex md:flex-row flex-col items-center justify-around">
              <div className="w-[200px] h-[200px] rounded-[100px]">
                <Image
                  src={client1}
                  alt=""
                  style={{
                    height: "100%",
                    width: "100%",
                    borderRadius: "100px",
                  }}
                />
              </div>
              <div className="flex flex-col md:w-[60%]">
                <p className="text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                  tempora eos ipsum voluptatem quam maiores consectetur veniam
                  quos, sunt aspernatur. Minus eum voluptates pariatur illum
                  rerum. Quis, praesentium explicabo tempore culpa iste vel
                  expedita dolorem optio, voluptas doloribus minima maxime.
                </p>
                <div className="flex justify-between items-center">
                  <div className="mt-[10px]">
                    <b className="font-bold text-2xl heading">angela</b>
                    <p className="text">CTO, INTERPID</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-row items-center justify-center p-4">
            <div className="flex md:flex-row flex-col items-center justify-around">
              <div className="w-[200px] h-[200px] rounded-[100px]">
                <Image
                  src={client1}
                  alt=""
                  style={{
                    height: "100%",
                    width: "100%",
                    borderRadius: "100px",
                  }}
                />
              </div>
              <div className="flex flex-col md:w-[60%]">
                <p className="text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                  tempora eos ipsum voluptatem quam maiores consectetur veniam
                  quos, sunt aspernatur. Minus eum voluptates pariatur illum
                  rerum. Quis, praesentium explicabo tempore culpa iste vel
                  expedita dolorem optio, voluptas doloribus minima maxime.
                </p>
                <div className="flex justify-between items-center">
                  <div className="mt-[10px]">
                    <b className="font-bold text-2xl heading">angela</b>
                    <p className="text">CTO, INTERPID</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-row items-center justify-center p-4">
            <div className="flex md:flex-row flex-col items-center justify-around">
              <div className="w-[200px] h-[200px] rounded-[100px]">
                <Image
                  src={client1}
                  alt=""
                  style={{
                    height: "100%",
                    width: "100%",
                    borderRadius: "100px",
                  }}
                />
              </div>
              <div className="flex flex-col md:w-[60%]">
                <p className="text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                  tempora eos ipsum voluptatem quam maiores consectetur veniam
                  quos, sunt aspernatur. Minus eum voluptates pariatur illum
                  rerum. Quis, praesentium explicabo tempore culpa iste vel
                  expedita dolorem optio, voluptas doloribus minima maxime.
                </p>
                <div className="flex justify-between items-center">
                  <div className="mt-[10px]">
                    <b className="font-bold text-2xl heading">angela</b>
                    <p className="text">CTO, INTERPID</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

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
        }}        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        speed={1000}
        modules={[Navigation, Pagination, Autoplay]}
        loop={true}
        className="w-[80%] h-[80px] bg-black"
      >
        <SwiperSlide>
          <div className="w-[200px] h-[20px] m-[20px] ">
            <Image src={test1} alt=""/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[200px] h-[20px] m-[20px]">
            <Image src={test2} alt=""/>
          </div>
        </SwiperSlide> <SwiperSlide>
          <div className="w-[200px] h-[20px] m-[20px]">
            <Image src={test3} alt=""/>
          </div>
        </SwiperSlide> <SwiperSlide>
          <div className="w-[200px] h-[20px] m-[20px]">
            <Image src={test4} alt=""/>
          </div>
        </SwiperSlide> <SwiperSlide>
          <div className="w-[200px] h-[20px] m-[20px]">
            <Image src={test5} alt=""/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[200px] h-[20px] m-[20px]">
            <Image src={test5} alt=""/>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonial;
