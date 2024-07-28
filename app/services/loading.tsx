import React from 'react'
import logo from "../../public/images/logo.png"
import Image from 'next/image'
const loading = () => {
  return (
    <div className='w-full h-[100vh] bg-[#0D2137] flex items-center justify-center'>
        <div className='w-[200px] h-[100px]'>
            <Image src={logo} alt="logo"/>
        </div>
    </div>
  )
}

export default loading