import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useSwiper } from "swiper/react";
import {Autoplay, Navigation, Pagination} from "swiper/modules";

const Testimonial = () => {
    const testimonial = [
        {
            id:1,
            review:"Spearing Systems transformed our online presence. Within months, we saw a 50% increase in organic traffic and a significant boost in lead generation. Their SEO expertise is unparalleled.",
            name:"Jane D",
            position:"Marketing Director"
        },
        {
            id:2,
            review:"We were struggling with poor search rankings, but Spearing Systems' tailored SEO strategy changed everything. Our website now ranks on the first page, and our customer inquiries have doubled!",
            name:"John S",
            position:"Business Owner"
        },
        {
            id:3,
            review:"The team at Spearing Systems is exceptional. Their deep understanding of SEO and dedication to our success resulted in a 40% increase in online sales. Highly recommend their services!",
            name:"Emily R",
            position:"Exommerce Manager"
        },
        {
            id:4,
            review:"From day one, Spearing Systems impressed us with their professionalism and knowledge. Thanks to their SEO efforts, our local business has never been more visible, attracting more customers than ever",
            name:"Michaet T",
            position:"Store Manager"
        },
    ]
  return (
    <div className='w-full flex items-center justify-center'>
        <div className="w-[70%] m-[30px]">
            <Swiper
            slidesPerView={1}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          speed={1000}
          modules={[Navigation, Pagination, Autoplay]}
          loop={true}
          className="w-full "
            >
                {testimonial.map((item)=>{
                    return(
                        <SwiperSlide key={item.id}>
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
  )
}

export default Testimonial