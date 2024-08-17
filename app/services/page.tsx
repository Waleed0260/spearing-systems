// "use client"
import WhyUs from '@/components/about/WhyUs';
import CallTo from '@/components/home/CallTo';
import Footer from '@/components/home/Footer';
import Loader from '@/components/home/Loader'
import Portfolio from '@/components/home/Portfolio';
import React, { Suspense, lazy } from 'react'
const Testimonial = lazy(() => import('@/components/home/Testimonial'));
const Video = lazy(() => import('@/components/home/Video'));
const Hero = lazy(() => import('@/components/service/Hero'));
const Services = lazy(() => import('@/components/service/Services'));
import { FloatingWhatsApp } from 'react-floating-whatsapp';
const page = () => {
  return (
    <div>
    {/* <Suspense fallback={<Loader/>}> */}
    <Hero/>
    <WhyUs/>
    <Services/>
    <Portfolio/>
    <Testimonial/>
    <CallTo/>
    {/* <Video/> */}
    <Footer/>
    {/* </Suspense> */}
    <FloatingWhatsApp
        phoneNumber="+923392073100"
        accountName="Spearing Systems"
        statusMessage="Replies within 15 minutes"
        chatMessage="Hello there! How can I help you ?"
        avatar='images/logoAvatar.png'
        chatboxHeight={350}
        buttonClassName="floating-whatsapp-button"
        />  
    </div>
  )
}

export default page