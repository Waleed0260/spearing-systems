"use client";
import React from "react";
import client1 from "../../public/images/client1.png";
import Image from "next/image";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useSwiper } from "swiper/react";
import {Navigation} from "swiper/modules";
import SwiperCore from "swiper";
SwiperCore.use([Navigation]);

const Testimonial = () => {
  const swiper = useSwiper();

  return (
    <div className="flex flex-col justify-center items-center p-4 m-5 text-white ">
      <p className="font-bold text-2xl text-black">Testimonial</p>

      <Swiper
        // spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        modules={[Navigation]}
        className="w-[80%] bg-black"
      >
        <SwiperSlide>
          <div className="flex flex-row items-center justify-center">
            <div className="flex flex-row items-center justify-around">
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
              <div className="flex flex-col w-[60%]">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                  tempora eos ipsum voluptatem quam maiores consectetur veniam
                  quos, sunt aspernatur. Minus eum voluptates pariatur illum
                  rerum. Quis, praesentium explicabo tempore culpa iste vel
                  expedita dolorem optio, voluptas doloribus minima maxime.
                </p>
                <div className="flex justify-between items-center">
                  <div>
                    <b className="font-bold">angela</b>
                    <p>CTO, INTERPID</p>
                  </div>
                  <div className="flex flex-row gap-2 relative right-6">
                      <button className="swiper-button-prev bg-transparent border-[1px] border-white p-8 rounded-[100px] text-2xl font-bold p-6 text-white">
                        {/* <FaAngleLeft /> */}
                      </button>

                      <button className="swiper-button-next bg-transparent border-[1px] border-white p-8 rounded-[100px] text-2xl font-bold p-6 text-white">
                      {/* <FaAngleRight /> */}
                      </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-row items-center justify-center">
            <div className="flex flex-row items-center justify-around">
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
              <div className="flex flex-col w-[60%]">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                  tempora eos ipsum voluptatem quam maiores consectetur veniam
                  quos, sunt aspernatur. Minus eum voluptates pariatur illum
                  rerum. Quis, praesentium explicabo tempore culpa iste vel
                  expedita dolorem optio, voluptas doloribus minima maxime.
                </p>
                <div className="flex justify-between items-center">
                  <div>
                    <b className="font-bold">angela</b>
                    <p>CTO, INTERPID</p>
                  </div>
                  <div className="flex flex-row gap-2 relative right-6">
                      <button className="swiper-button-prev bg-transparent border-[1px] border-white p-8 rounded-[100px] text-2xl font-bold p-6 text-white">
                        {/* <FaAngleLeft /> */}
                      </button>

                      <button className="swiper-button-next bg-transparent border-[1px] border-white p-8 rounded-[100px] text-2xl font-bold p-6 text-white">
                      {/* <FaAngleRight /> */}
                      </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-row items-center justify-center">
            <div className="flex flex-row items-center justify-around">
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
              <div className="flex flex-col w-[60%]">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                  tempora eos ipsum voluptatem quam maiores consectetur veniam
                  quos, sunt aspernatur. Minus eum voluptates pariatur illum
                  rerum. Quis, praesentium explicabo tempore culpa iste vel
                  expedita dolorem optio, voluptas doloribus minima maxime.
                </p>
                <div className="flex justify-between items-center">
                  <div>
                    <b className="font-bold">angela</b>
                    <p>CTO, INTERPID</p>
                  </div>
                  <div className="flex flex-row gap-2 relative right-6">
                      <button className="swiper-button-prev bg-transparent border-[1px] border-white p-8 rounded-[100px] text-2xl font-bold p-6 text-white">
                        {/* <FaAngleLeft /> */}
                      </button>

                      <button className="swiper-button-next bg-transparent border-[1px] border-white p-8 rounded-[100px] text-2xl font-bold p-6 text-white">
                      {/* <FaAngleRight /> */}
                      </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

const NextArrow = (props: any) => {
  const { onClick } = props;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    // <></>
    <div
      className="bg-transparent border-white border-[1px] rounded-[100px] bg-gray-700"
      onClick={onClick}
    >
      <p className="text-2xl font-bold p-6">
        <FaAngleRight />
        <Slider {...settings} className="w-[70%] m-3">
          <div className="flex flex-row items-center justify-center">
            <div className="flex flex-row items-center justify-around">
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
              <div className="flex flex-col w-[60%]">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                  tempora eos ipsum voluptatem quam maiores consectetur veniam
                  quos, sunt aspernatur. Minus eum voluptates pariatur illum
                  rerum. Quis, praesentium explicabo tempore culpa iste vel
                  expedita dolorem optio, voluptas doloribus minima maxime.
                </p>
                <div className="flex justify-between items-center">
                  <div>
                    <b className="font-bold">angela</b>
                    <p>CTO, INTERPID</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Add more slides as needed */}
          <div className="flex flex-row items-center justify-center">
            <div className="flex flex-row items-center justify-around">
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
              <div className="flex flex-col w-[60%]">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                  tempora eos ipsum voluptatem quam maiores consectetur veniam
                  quos, sunt aspernatur. Minus eum voluptates pariatur illum
                  rerum. Quis, praesentium explicabo tempore culpa iste vel
                  expedita dolorem optio, voluptas doloribus minima maxime.
                </p>
                <div className="flex justify-between items-center">
                  <div>
                    <b className="font-bold">angela</b>
                    <p>CTO, INTERPID</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-row items-center justify-center">
            <div className="flex flex-row items-center justify-around">
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
              <div className="flex flex-col w-[60%]">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                  tempora eos ipsum voluptatem quam maiores consectetur veniam
                  quos, sunt aspernatur. Minus eum voluptates pariatur illum
                  rerum. Quis, praesentium explicabo tempore culpa iste vel
                  expedita dolorem optio, voluptas doloribus minima maxime.
                </p>
                <div className="flex justify-between items-center">
                  <div>
                    <b className="font-bold">angela</b>
                    <p>CTO, INTERPID</p>
                  </div>

                  <div className="flex flex-row">
                    <PrevArrow />
                    <NextArrow />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </p>
    </div>
  );
};

const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    // <></>
    <div
      className="bg-transparent border-white border-[1px] rounded-[100px]"
      onClick={onClick}
    >
      <p className="text-2xl font-bold p-6">
        <FaAngleLeft />
      </p>
    </div>
  );
};

export default Testimonial;
