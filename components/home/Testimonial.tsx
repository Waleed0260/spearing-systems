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
            review: "Spearing Systems significantly improved our online presence. In just a few months, we experienced a 50% increase in organic traffic and a noticeable boost in lead generation. Their SEO expertise is unmatched.",
            name: "Jane D.",
            position: "Marketing Director"
        },
        {
            review: "We were struggling with low search rankings, but Spearing Systems' tailored SEO strategy turned things around. Now, our website consistently ranks on the first page, and customer inquiries have doubled.",
            name: "John S.",
            position: "Business Owner"
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
    <div className="flex flex-col justify-center items-center w-full ">
      <div className="w-[80%] flex flex-col items-center justify-center m-[30px]"></div>
      <p className="font-bold text-2xl m-3 heading text-center">What Our Clients Are Saying</p>

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
          className="w-full md:h-[180px] p-[15px]"
            >
                {testimonial?.map((item:any, index:any)=>{
                    return(
                        <SwiperSlide key={index}>
                            <div className='flex flex-col  justfiy-center p-3'>

                            <p className='text text-left text-xl'>{item.review}</p>
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
