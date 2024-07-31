"use client"
import Footer from '@/components/home/Footer';
import Loader from '@/components/home/Loader';
import React, {Suspense, lazy} from 'react'
const Testimonial = lazy(() => import('@/components/home/Testimonial'));
const Video = lazy(() => import('@/components/home/Video'));
const Hero = lazy(() => import('@/components/serviceDetail/Hero'));
const SecondSection = lazy(() => import('@/components/serviceDetail/SecondSection'));
const ThirdSection = lazy(() => import('@/components/serviceDetail/ThirdSection'));

const page = ({ params }: { params: { ID: string } }) => {
  return (
    <Suspense fallback={<Loader/>}>
      <Hero/>
      <SecondSection/>
      <ThirdSection/>
      {/* <Testimonial/> */}
      <Video/>
      <Footer/>
      </Suspense>
  )
}

export default page