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
    </div>
  )
}

export default page