"use client"

import Footer from '@/components/home/Footer'
import Header from '@/components/home/Header'
import { Button } from '@/components/ui/button'
import React from 'react'
import { useRouter } from 'next/navigation'
const error = () => {
    const router = useRouter()
  return (
    <>
<Header color="[#0D2137]"/>
    <div className='relative top-[80px] text-white'>
        <p>Something went wrong</p>
        <Button variant={"destructive"} onClick={()=>router.replace("/")}>GO BACK TO HOMEPAGE</Button>
    </div>
    <Footer/>
    </>
  )
}

export default error