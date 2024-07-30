"use client"
import Image from 'next/image'
import React, {useState, useEffect} from 'react'
import { Button } from '../ui/button'
import logo from "../../public/images/logo.png"
import Link from 'next/link'
const Header = () => {
    const [bgColor, setBgColor] = useState('[#ffffff]');
    // const[color, setColor] = useState("[#ffffff]")

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 1) {
          setBgColor('[#0D2137]');
        } else {
          setBgColor('[#ffffff]');
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
  return (
    <div className={`flex flex-row items-center justify-around w-full fixed transition-all z-50 bg-${bgColor}`}>
        <div className='h-[100px] w-[100px] relative z-10'>
            <Image src={logo} alt="" height={200} width={200}/>
        </div>
        <div>
            <ul className={`flex flex-row gap-4 relative z-10 text-white`}>
                <li className='list-none mid-heading'><Link href={"/"}>Home</Link></li>
                <li className='list-none mid-heading'><Link href={"/about"}>About</Link></li>
                <li className='list-none mid-heading'><Link href={"/portfolio"}>Portfolio</Link></li>
                {/* <li className='list-none mid-heading'>Page</li> */}
                <li className='list-none mid-heading'><Link href={"/services"}>Services</Link></li>
                <li className='list-none mid-heading'>Blog</li>
            </ul>
        </div>
        <div className='relative z-10'>
            <Button>CONTACT US</Button>
        </div>
    </div>
  )
}

export default Header