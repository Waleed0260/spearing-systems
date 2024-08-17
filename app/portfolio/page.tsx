import CallTo from '@/components/home/CallTo';
import Footer from '@/components/home/Footer';
import Loader from '@/components/home/Loader'
import Testimonial from '@/components/home/Testimonial';
import React, { Suspense, lazy } from 'react'
const Hero = lazy(() => import('@/components/portfolio/Hero'));
const Portfolio = lazy(() => import('@/components/portfolio/Portfolio'));
import { FloatingWhatsApp } from 'react-floating-whatsapp';
const page = () => {
  return (
    <Suspense fallback={<Loader/>}>
      <Hero/>
      <Portfolio/>
      <Testimonial/>
      <CallTo/>
      <Footer/>
      <FloatingWhatsApp
        phoneNumber="+923392073100"
        accountName="Spearing Systems"
        statusMessage="Replies within 15 minutes"
        chatMessage="Hello there! How can I help you ?"
        avatar='images/logoAvatar.png'
        chatboxHeight={350}
        buttonClassName="floating-whatsapp-button"
        />  
    </Suspense>
  )
}

export default page