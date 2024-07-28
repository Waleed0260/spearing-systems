import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import logo from "../../public/images/logo.png"
import Link from 'next/link'
const Header = () => {
  return (
    <div className='flex flex-row items-center justify-around w-full text-white relative z-10 bg-[#0D2137]'>
        <div className='h-[100px] w-[100px]'>
            <Image src={logo} alt="" height={200} width={200}/>
        </div>
        <div>
            <ul className='flex flex-row gap-4 relative z-10 text-white'>
                <li className='list-none mid-heading'><Link href={"/"}>Home</Link></li>
                <li className='list-none mid-heading'><Link href={"/about"}>About</Link></li>
                <li className='list-none mid-heading'><Link href={"/portfolio"}>Portfolio</Link></li>
                {/* <li className='list-none mid-heading'>Page</li> */}
                <li className='list-none mid-heading'><Link href={"/services"}>Services</Link></li>
                <li className='list-none mid-heading'>Blog</li>
            </ul>
        </div>
        <div>
            <Button>CONTACT US</Button>
        </div>
    </div>
  )
}

export default Header