import React from 'react'
import Image from 'next/image'
import logo from "../../public/images/logo.png"
import { FaLinkedin, FaInstagram , FaFacebook, FaTwitter } from "react-icons/fa";
import Link from 'next/link';

const Footer = () => {
  return (
    <>
    <div className="flex md:flex-row flex-col items-start justify-around  w-full p-6 bg text-white">
        <div className='flex flex-col'>
            <div className="w-[200px] h-[130px] ">
            <Image src={logo} alt=""  className='w-full h-fulll overflow-hidden'/>
            </div>
            <p className='text md:w-[23vw]'>Your go-to for premium, punctual Full-service digital marketing agency Delivering exceptional digital marketing services on time, every time.</p>
        </div>

        <div className='flex flex-col items-start'>
            <p className='font-bold mid-heading md:mt-[70px] mt-[20px]'>Services</p>
            <p className='text'>Web Design & Development</p>
            <p className='text'>Google Ads</p>
            <p className='text'>PPC</p>
            <p className='text'>Social Media Marketing</p>
            <p className='text'>Branding</p>
        </div>
        <div className='flex flex-col items-start'>
            <p className='font-bold mid-heading md:mt-[70px] mt-[20px]'>Company</p>
            <p className='text'>About Us</p>
            <p className='text'>Company Profile</p>
            <p className='text'>Case Studies</p>
            <p className='text'>Contact Us</p>
        </div>
        <div className='flex flex-col items-start'>
            <p className='font-bold mid-heading md:mt-[70px] mt-[20px]'>Follow</p>
            <div className='flex flex-row gap-5'>
                <Link href={"https://facebook.com"} className='text-xl hover:text-[#FF8E2B] transition-all'><FaFacebook/></Link>
                <Link href={"https://facebook.com"} className='text-xl hover:text-[#FF8E2B] transition-all'><FaTwitter/></Link>
                <Link href={"https://facebook.com"} className='text-xl hover:text-[#FF8E2B] transition-all'><FaInstagram/></Link>
                <Link href={"https://facebook.com"} className='text-xl hover:text-[#FF8E2B] transition-all'><FaLinkedin/></Link>

            </div>
        </div>
    </div>
    <div className='w-full flex md:flex-row flex-col justify-around bg-[#0b1724] text-white p-4'>
        <div className='flex flex-row gap-4'>
            <p>Terms & condition</p>
            <p>Privacy Policy</p>
            <p>Sitemap</p>
        </div>

        <div>&copy; Spearing Systems All rights reserved</div>
    </div>
    </>
  )
}

export default Footer