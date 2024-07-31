import React from 'react'
import Image from 'next/image'
import logo from "../../public/images/logo.png"
const Footer = () => {
  return (
    <div className='flex flex-col justify-around text-white p-4 w-full  bg-black'>
        <div className='grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 justify-around'>
        <div className='flex flex-col gap-3'>
            <div className='h-[100px] w-[100px]'>
            <Image src={logo} alt="foor-img"/>
            </div>
            <b className='font-bold '>Say Hello</b>
            <p>Discover our app</p>
        </div>
        <div className='flex flex-col mt-4'>
            <p className='text-xl font-bold'>Links</p>
            <ul className='flex flex-col gap-4 mt-3'>
                <li className='font-bold'>About us</li>
                <li className='font-bold'>Meet our team</li>
                <li className='font-bold'>Case stories</li>
                <li className='font-bold'>Latest news</li>
                <li className='font-bold'>Contact</li>
            </ul>
        </div>
        <div className='flex flex-col mt-4'>
            <p className='text-xl font-bold'>Other links</p>
            <ul className='flex flex-col gap-4 mt-3'>
                <li className='font-bold'>Faq</li>
                <li className='font-bold'>Term of user</li>
                <li className='font-bold'>Disclaimer</li>
                <li className='font-bold'>Privacy Policy</li>
                {/* <li className='font-bold'>Contact</li> */}
            </ul>
        </div>

        <div className='flex flex-col mt-4'>
            <div className='text-xl font-bold'>Links</div>
            <p>1234567890</p>
            <p>needhelp@site.com</p>
        </div>
        </div>
        <div className='flex flex-row justify-around items-center'>
            <p>All rights reserved 2023 @mr</p>
            <div className='flex flex-row gap-2'>
                <p>Terms of use</p>
                <p>privacy policy</p>
            </div>
        </div>
    </div>
  )
}

export default Footer