"use client"
import React, {useEffect, useState} from 'react'
// import dynamic from 'next/dynamic'

// const Faq = dynamic(() => import('@/components/about/Faq'));
// const Growth = dynamic(() => import('@/components/about/Growth'));
// const Hero = dynamic(() => import('@/components/about/Hero'));
// const WhyUs = dynamic(() => import('@/components/about/WhyUs'));
import Faq from '@/components/about/Faq'
import Growth from '@/components/about/Growth'
import Hero from '@/components/about/Hero'
import WhyUs from '@/components/serviceDetail/WhyUs'
import Loader from '@/components/home/Loader'
import Footer from '@/components/home/Footer';
import Testimonial from '@/components/home/Testimonial';
import CallTo from '@/components/home/CallTo';

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
    <>
      <Hero/>
      <Growth/>
      <WhyUs/>
      <Faq/>
      <Testimonial/>
      <CallTo/>
      <Footer/>
      </>
  )
}

export default page