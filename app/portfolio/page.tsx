import CallTo from '@/components/home/CallTo';
import Footer from '@/components/home/Footer';
import Loader from '@/components/home/Loader'
import Testimonial from '@/components/home/Testimonial';
import React, { Suspense, lazy } from 'react'
const Hero = lazy(() => import('@/components/portfolio/Hero'));
const Portfolio = lazy(() => import('@/components/portfolio/Portfolio'));

const page = () => {
  return (
    <Suspense fallback={<Loader/>}>
      <Hero/>
      <Portfolio/>
      <Testimonial/>
      <CallTo/>
      <Footer/>
    </Suspense>
  )
}

export default page