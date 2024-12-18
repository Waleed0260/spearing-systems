import React from 'react'
import Link from 'next/link';
import { FaCode, FaSearch, FaBullhorn, FaShareAlt, FaGoogle } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const Services = () => {
        const services = [
            {
                id:1,
                icon: <FaShareAlt/>,
                heading:"SMM",
                text: "Engage, connect, and grow your audience on the platforms that matter most. Our social media marketing services deliver tailored content",
                href:"social_media_marketing"
            },
            {
                id:2,
                icon: <FaGoogle/>,
                heading:"PPC",
                text: "Maximize your ROI with expertly managed Google Ads campaigns. Our PPC specialists create targeted, data-driven campaigns that put your brand in front of high-intent customers",
                href:"google_ads",
            },
            {
                id:3,
                icon: <FaSearch/>,
                heading:"SEO",
                text: "Unlock the power of search engines with our proven SEO strategies. We’ll propel your website to the top of search results, ensuring your brand gets noticed by the right audience at the right time.",
                href:"search_engine"
            },
            {
                id:4,
                icon: <FaBullhorn/>,
                heading:"BRANDING",
                text: "Elevate your brand with a distinct identity that resonates. Our branding services are tailored to craft a memorable and impactful presence",
                href:"branding",
            },
            {
                id:5,
                icon: <FaCode/>,
                heading:"WEBSITE DEVELOPMENT",
                text: "Transform your online presence with visually stunning, responsive websites that captivate and convert",
                href:"website_development"
            },
            {
                id:6,
                icon: <FaEnvelope/>,
                heading:"Email Marketing",
                text: "Need something changed or is there something not quite working Aellente humour or randomised words",
                href:"email_marketing"
            },
        ]
  return (
    <div className='w-full flex items-center justify-center'>

    <div className='flex flex-col sm:items-center items-start justify-center w-[80%] mt-6'>
        <p className='font-bold text'>What we offer</p>
        <p  className='font-bold md:text-4xl text-2xl heading sm:text-center leading-tight'> What We’re Offering Creative
        Digital Service</p>
        <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 mt-5'>
            {services.map((item:any)=>{
                return (
                        <Link href={`/service/${item.href}`} key={item.id}>
                    <div className='lg:w-[95%] sm:w-[34vw] w-[80vw] h-[23rem] sm:m-4 mt-3 sm:mt-0 flex flex-col justify-center items-left border-[1px] border-[#38393b] rounded-10px servicebox bg-[#f5f6f7] rounded-md' key={item.id}>
                        <div className='p-5'>
                        <p className='font-bold text-4xl '>{item.icon}</p>
                        <p className='font-bold sm:text-3xl text-2xl heading mt-3'>{item.heading}</p>
                        <p className='text mt-6'>{item.text}</p>
                        <div className="flex flex-row gap-2 items-center cursor-pointer mt-3">
            <p className="text-[#FF8e2B] underline">See the full detail</p>
            <p className="text-[#FF8e2B] text-xl">
              <FaRegArrowAltCircleRight />
            </p>
          </div>
                        </div>
                    </div>
                        </Link>
                )
            })}
        </div>
    </div>
    </div>
  )
}

export default Services