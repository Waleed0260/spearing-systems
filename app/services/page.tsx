"use client"
import WhyUs from '@/components/about/WhyUs';
import CallTo from '@/components/home/CallTo';
import Footer from '@/components/home/Footer';
import Loader from '@/components/home/Loader'
import Portfolio from '@/components/home/Portfolio';
import React, { lazy, useEffect, useState } from 'react'
const Testimonial = lazy(() => import('@/components/home/Testimonial'));
const Video = lazy(() => import('@/components/home/Video'));
const Hero = lazy(() => import('@/components/service/Hero'));
const Services = lazy(() => import('@/components/service/Services'));

const page = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 10);

    // Cleanup the timer
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <div>
    {/* <Suspense fallback={<Loader/>}> */}
    <Hero/>
    <WhyUs/>
    <Services/>
    {/* <Portfolio/> */}
    <Testimonial/>
    <CallTo/>
    {/* <Video/> */}
    <Footer/>
    {/* </Suspense> */}
    </div>
  )
}

export default page