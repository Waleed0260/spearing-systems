// "use client"
import React, { useEffect } from "react";
import { FaCode, FaSearch, FaBullhorn, FaShareAlt, FaGoogle } from 'react-icons/fa';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import { FaArrowRight } from "react-icons/fa6";
import { Button } from "../ui/button";
import { FaChartLine } from "react-icons/fa";
import Link from "next/link";
import { FaGooglePlusG } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Services = () => {

  const services = [
    {
      id: 1,
      icon: <FaCode />,
      heading: "Web Development",
      text: "Transform your online presence with visually stunning, responsive websites that captivate and convert. At Spearing Systems, we blend creativity with cutting-edge technology to build digital experiences that not only look amazing but drive real results.",
      href:"website_development"
    },
    {
      id: 2,
      icon: <FaSearch />,
      heading: "SEO",
      text: "Unlock the power of search engines with our proven SEO strategies. We’ll propel your website to the top of search results, ensuring your brand gets noticed by the right audience at the right time, driving organic traffic and boosting your business.",
      href:"search_engine"
    },
    {
      id: 3,
      icon: <FaBullhorn />,
      heading: "Branding",
      text: "Elevate your brand with a distinct identity that resonates. Our branding services are tailored to craft a memorable and impactful presence that tells your story and sets you apart from the competition, creating a lasting impression on your audience.",
      href:"branding"
    },
    {
      id: 4,
      icon: <FaChartLine />,
      heading: "Social Media Marketing",
      text: "Engage, connect, and grow your audience on the platforms that matter most. Our social media marketing services deliver tailored content and strategic campaigns that spark conversations and build a loyal community around your brand.",
      href:"social_media_marketing"
    },
    {
      id: 5,
      icon: <FaGooglePlusG />,
      heading: "Google Ads/PPC",
      text: "Maximize your ROI with expertly managed Google Ads campaigns. Our PPC specialists create targeted, data-driven campaigns that put your brand in front of high-intent customers, driving clicks, conversions, and measurable growth.",
      href:"google_ads"
    },
    {
      id: 6,
      icon: <MdEmail />,
      heading: "Email Marketing",
      text: "Unlock the full potential of email marketing with Spearing Systems. Our comprehensive services are designed to increase engagement, drive sales, and build lasting customer relationships.",
      href:"email_marketing"
    }
];
  return (
    <div
      className="flex flex-col justify-center items-center "
      data-aos="fade-up"
    >
      <b className="font-bold text-3xl heading">Services</b>
      <Swiper
        // navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        // slidesPerView={3}
        pagination={{ clickable: true }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          480: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          1050: {
            slidesPerView: 3,
          },
        }}
        loop={true}
        autoplay={{
          delay: 3000, // 3 seconds delay
          disableOnInteraction: false, // autoplay continues after user interaction
        }}
        className="sm:w-[80%] w-[98vw] md:h-[580px] sm:h-[630px] h-[550px] mr-[20px] sm:mr-0 mt-4"
      >
        {services.map((item) => {
          return (
            <SwiperSlide key={item.id} className="flex justify-between items-center ">
              <Link className="flex flex-col gap-3 lg:w-[90%] md:w-[35vw] sm:w-[34vw] w-[90vw] md:h-[500px] sm:h-[600px] h-[480px] servicebox transition-all items-center  bg-[#f2f2f2]  ml-3 shadow-2xl cursor-pointer relative" href={`/service/${item.href}`}>
                <p className=" text-4xl mt-[30px] bg-[#FF8E2B] p-5 rounded-[100px]">{item.icon}</p>
                <b className="font-bold text-2xl mid-heading mt-[15px] text-center">{item.heading}</b>
                <p className="w-[90%] text-left text text-sm">{item.text}</p>
                <p className='font-bold text-xl bg-gray-700 bg-opacity-20 text-center p-[15px] mt-[10px] flex items-center rounded-[100px] icon absolute bottom-10'><FaArrowRight/></p>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Link href={"/services"}>
      <button className="btn p-3 transition-all text-white rounded-[100px]" data-aos="fade-up" data-aos-delay="300x">View All Services</button>
      
      </Link>
    </div>
  );
};

export default Services;
