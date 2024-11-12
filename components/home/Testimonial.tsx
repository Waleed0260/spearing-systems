"use client";
import React, {useEffect, useRef} from "react";
import client1 from "../../public/images/client1.png";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {Autoplay, Navigation, Pagination} from "swiper/modules";
import SwiperCore from "swiper";
SwiperCore.use([Navigation]);
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
// import { Swiper as SwiperRef } from 'swiper/types';
const Testimonial = () => {
    // const swiperRef = useRef<SwiperRef | null>(null); // Correct ref type

    // useEffect(() => {
    //   if (swiperRef.current) {
    //     swiperRef.current.update(); // Update swiper if the ref is set
    //   }
    // }, []);
    const testimonial = [
        {
            review: "Spearing Systems significantly improved our online presence. In just a few months, we experienced a 50% increase in organic traffic and a noticeable boost in lead generation. Their SEO expertise is unmatched.",
            name: "Jane D.",
            position: "Marketing Director"
        },
        {
            review: "Spearing Systems completely revamped our PPC strategy. We've seen a 40% increase in leads while simultaneously reducing our ad spend. Their insights and strategies made a significant impact on our business.",
            name: "Anna K.",
            position: "Retail Business Owner"
        },
        {
            review: "Their expertise in managing Google Ads has been a game-changer for us. We saw a 35% increase in online sales within three months, which exceeded our expectations. Highly recommend their services.",
            name: "Mark S.",
            position: "E-commerce Manager"
        },
        {
            review: "Spearing Systems delivers professional, creative, and data-driven solutions. Their approach is focused on achieving tangible results, and they've consistently exceeded our expectations. We're thrilled with the outcomes.",
            name: "Tom W.",
            position: "Tech Startup CEO"
        },
        {
            review: "Their expertise in automation and segmentation has greatly improved our customer retention. We've seen a noticeable improvement in our overall marketing efficiency and customer engagement.",
            name: "John D.",
            position: "Tech Startup Founder"
        }
    ];
    
    

  return (
    <div className="flex flex-col justify-center items-center w-full mb-6 mt-6">
      {/* <div className="lg:max-w-[1000px] w-[80%] flex flex-col items-center justify-center m-[30px]"></div> */}
      <p className="font-bold md:text-4xl text-2xl m-3 heading text-center">What Our Clients Are Saying</p>

      <div className="sm:w-[80%] w-[90vw] relative">
      <Swiper
    //   ref={swiperRef}
  slidesPerView={1}
  modules={[Autoplay, Pagination, Navigation]}
  loop={true}
  autoplay={{
    delay: 3000,
    disableOnInteraction: false,
  }}
//   navigation={true}
  navigation={{
    nextEl: ".custom-next", // Custom class for the next button
    prevEl: ".custom-prev", // Custom class for the previous button
  }}
  className="w-full flex items-center justify-center relative"
>
  {testimonial?.map((item: any) => {
    return (
      <SwiperSlide className="flex items-center justify-center w-full">
        <div className="w-[90%] md:w-[50%] relative left-[20px] md:left-[300px]"> {/* Centering with `items-center` */}
          <p className="text text-left text-xl">{item.review}</p>
          <p className="heading">{item.name}</p>
          <p className="mid-heading">{item.position}</p>
        </div>
      </SwiperSlide>
    );
  })}
   <div className="custom-prev md:flex hidden absolute top-1/2 left-4 transform -translate-y-1/2 bg-[#FF8E2B] text-black h-12 w-12 text-white rounded-full flex items-center justify-center cursor-pointer z-50 text-3xl">
        <FaAngleLeft/>
      </div>
      <div className="custom-next md:flex hidden absolute top-1/2 right-4 transform -translate-y-1/2 bg-[#FF8E2B] text-black h-12 w-12 rounded-full flex items-center justify-center cursor-pointer z-50 text-3xl text-white">
        <FaAngleRight/>
      </div>
</Swiper>

        </div>
    </div>
  );
};

export default Testimonial;
