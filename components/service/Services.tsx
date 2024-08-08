import React from 'react'
import { FaRocket, FaIdCard } from "react-icons/fa";
import { ImPen } from "react-icons/im";
import { TbTargetArrow } from "react-icons/tb";
import { MdContentPasteGo } from "react-icons/md";
import { GrSystem } from "react-icons/gr";
import Link from 'next/link';
import { FaCode, FaSearch, FaBullhorn, FaShareAlt, FaGoogle } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';

const Services = () => {
        const services = [
            {
                id:1,
                icon: <FaShareAlt/>,
                heading:"SEM",
                text: "Engage, connect, and grow your audience on the platforms that matter most. Our social media marketing services deliver tailored content",
                href:"social_media_marketing"
            },
            {
                id:2,
                icon: <FaGoogle/>,
                heading:"PPC",
                text: "Maximize your ROI with expertly managed Google Ads campaigns. Our PPC specialists create targeted, data-driven campaigns that put your brand in front of high-intent customers",
                href:"page_per_click",
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
    <div className='flex flex-col items-center justify-center m-5 bg-transparent'>
        <p className='font-bold text'>What we offer</p>
        <p  className='font-bold text-5xl heading'> What We’re Offering Creative
        Digital Service</p>
        <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 m-8'>
            {services.map((item:any, index:any)=>{
                return (
                        <Link href={`/service-detail/${item.href}`} key={item.id}>
                    <div className='lg:w-[22vw] sm:w-[34vw] w-[70vw] h-[23rem] m-4 flex flex-col justify-center items-left border-[1px] border-black rounded-10px servicebox bg-[#f5f6f7] rounded-md' key={item.id}>
                        <div className='p-5'>
                        <p className='font-bold text-4xl '>{item.icon}</p>
                        <p className='font-bold text-3xl heading mt-3'>{item.heading}</p>
                        <p className='text mt-6'>{item.text}</p>
                        </div>
                    </div>
                        </Link>
                )
            })}
        </div>
    </div>
  )
}

export default Services