"use client";
import React from "react";
import client1 from "../../public/images/client1.png";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {Autoplay, Navigation, Pagination} from "swiper/modules";
import SwiperCore from "swiper";
SwiperCore.use([Navigation]);
import test1 from "../../public/images/test1.png"
import test2 from "../../public/images/test2.png"
import test3 from "../../public/images/test3.png"
import test4 from "../../public/images/test4.png"
import test5 from "../../public/images/test5.png"

const Testimonial = () => {

  const testimonial = [
    {
        review: "Spearing Systems transformed our online presence. Within months, we saw a 50% increase in organic traffic and a significant boost in lead generation. Their SEO expertise is unparalleled.",
        name: "Jane D.",
        position: "Marketing Director"
    },
    {
        review: "We were struggling with poor search rankings, but Spearing Systems' tailored SEO strategy changed everything. Our website now ranks on the first page, and our customer inquiries have doubled!",
        name: "John S.",
        position: "Business Owner"
    },
    {
        review: "Spearing Systems transformed our PPC strategy. We've seen a 40% increase in leads with reduced ad spend.",
        name: "Anna K.",
        position: "Retail Business Owner"
    },
    {
        review: "Their expertise in Google Ads management boosted our online sales by 35% within three months.",
        name: "Mark S.",
        position: "E-commerce Manager"
    },
    {
        review: "Professional, creative, and data-driven. Spearing Systems delivers results.",
        name: "Tom W.",
        position: "Tech Startup CEO"
    },
    {
        review: "Their expertise in automation and segmentation has greatly improved our customer retention.",
        name: "John D.",
        position: "Tech Startup Founder"
    }
];

  return (
    <div className="flex flex-col justify-center items-center w-full ">
      <div className="w-[80%] flex flex-col items-center justify-center m-[30px]"></div>
      <p className="font-bold text-2xl m-3 heading">What Our Clients Are Saying</p>

      <div className="w-[70%]">
            <Swiper
            slidesPerView={1}
          modules={[Navigation, Pagination, Autoplay]}
          pagination={{clickable:true}}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          className="w-full md:h-[150px] p-[30px]"
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
  );
};

export default Testimonial;
