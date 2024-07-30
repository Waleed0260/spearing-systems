"use client"
import React, { Suspense, lazy } from 'react';

// const Hero = lazy(() => import('@/components/home/Hero'));
// const About = lazy(() => import('@/components/home/About'));
// const Services = lazy(() => import('@/components/home/Services'));
// const Video = lazy(() => import('@/components/home/Video'));
// const Portfolio = lazy(() => import('@/components/home/Portfolio'));
// const Testimonial = lazy(() => import('@/components/home/Testimonial'));
// const Footer = lazy(() => import('@/components/home/Footer'));

import Hero from '@/components/home/Hero'
import About from '@/components/home/About'
import Services from '@/components/home/Services'
import Video from '@/components/home/Video'
import Portfolio from '@/components/home/Portfolio'
import Testimonial from '@/components/home/Testimonial'
import Footer from '@/components/home/Footer'
import Process from '@/components/home/Process';

export default function Page() {
  
  return (
    <>
    {/* <Suspense fallback={<p>Loading</p>}> */}
    <Hero />
      <About />
      <Services />
      <Video />
      <Portfolio />
      <Process/>
      <Testimonial />
      <Footer />
    {/* </Suspense> */}
    </>
  );
}
