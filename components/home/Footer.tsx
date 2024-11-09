import React from 'react'
import Image from 'next/image'
import logo from "../../public/images/logo.png"
import { FaLinkedin, FaInstagram , FaFacebook, FaTwitter } from "react-icons/fa";
import Link from 'next/link';
const Footer = () => {
  return (
    <>
    <div className=" w-full flex items-center justify-center bg text-white pb-4">
        <div className='w-[80%] flex lg:flex-row flex-col items-start justify-between'>

        <div className='flex flex-col'>
            <div className="w-[200px] h-[130px] ">
            <Image src={logo} alt=""  className='w-full h-fulll overflow-hidden'/>
            </div>
            <p className='text md:w-[23vw] ml-4 md:ml-0'>Your go-to for premium, punctual Full-service digital marketing agency Delivering exceptional digital marketing services on time, every time.</p>
        </div>

        <div className='flex flex-col items-start ml-4 md:ml-0'>
            <p className='font-bold mid-heading md:mt-[70px] mt-[20px]'>Services</p>
            <Link href={"/service/website_development"}>
            <p className='text hover:text-[#FF8E2B] transition-all'>Web Design & Development</p>
            </Link>
            <Link href={"/service/google_ads"}>
            <p className='text hover:text-[#FF8E2B] transition-all'>Google Ads</p>
            </Link>
            <Link href={"/service/social_media_marketing"}>
            <p className='text hover:text-[#FF8E2B] transition-all'>Social Media Marketing</p>
            </Link>
            <Link href={"/service/search_engine"}>
            <p className='text hover:text-[#FF8E2B] transition-all'>SEO</p>
            </Link>
            <Link href={"/service/branding"}>
            <p className='text hover:text-[#FF8E2B] transition-all'>Branding</p>
            </Link>
            <Link href={"/service/email_marketing"}>
            <p className='text hover:text-[#FF8E2B] transition-all'>Email Marketing</p>
            </Link>
        </div>
        <div className='flex flex-col items-start ml-4 md:ml-0'>
            <p className='font-bold mid-heading md:mt-[70px] mt-[20px]'>Company</p>
            <Link href={"/about"}>
            <p className='text hover:text-[#FF8E2B] transition-all'>About Us</p>
            </Link>
            {/* <p className='text hover:text-[#FF8E2B] transition-all'>Company Profile</p> */}
            <a href={"/images/CompanyProfile.pdf"} download className='text hover:text-[#FF8E2B] transition-all cursor-pointer'>Company Profile</a>
            <Link href={"/portfolio"}>
            <p className='text hover:text-[#FF8E2B] transition-all'>Case Studies</p>
            </Link>
            <Link href={"/contact"}>
            <p className='text hover:text-[#FF8E2B] transition-all'>Contact Us</p>
            </Link>
        </div>
        <div className='flex flex-col items-start ml-4 md:ml-0'>
            <p className='font-bold mid-heading md:mt-[70px] mt-[20px]'>Follow</p>
            <div className='flex flex-row gap-5'>
                <Link href={"https://www.facebook.com/profile.php?id=61562738654670"} className='text-xl hover:text-[#FF8E2B] transition-all'><FaFacebook/></Link>
                <Link href={"https://facebook.com"} className='text-xl hover:text-[#FF8E2B] transition-all'><FaTwitter/></Link>
                <Link href={"https://www.instagram.com/spearingsystems/"} className='text-xl hover:text-[#FF8E2B] transition-all'><FaInstagram/></Link>
                <Link href={"https://www.linkedin.com/company/spearing-systems/"} className='text-xl hover:text-[#FF8E2B] transition-all'><FaLinkedin/></Link>

            </div>
        </div>
        </div>

    </div>
    <div className='w-full  bg-[#0b1724] text-white flex lg:items-center items-start justify-center py-3'>
        <div className='w-[80%] flex lg:flex-row flex-col  lg:items-center justify-between  ml-4 md:ml-0'>

        <div className='flex flex-row gap-4 '>
            <p>Terms & condition</p>
            <p>Privacy Policy</p>
            <p>Sitemap</p>
        </div>

        <div className='md:mt-0 mt-6 '>&copy; Spearing Systems All rights reserved</div>
        </div>

    </div>
    </>
  )
}

export default Footer