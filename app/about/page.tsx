import React, {Suspense} from 'react'
import dynamic from 'next/dynamic'

const Faq = dynamic(() => import('@/components/about/Faq'));
const Growth = dynamic(() => import('@/components/about/Growth'));
const Hero = dynamic(() => import('@/components/about/Hero'));
const WhyUs = dynamic(() => import('@/components/about/WhyUs'));
import Loader from '@/components/home/Loader'
import Footer from '@/components/home/Footer';

const page = () => {
  return (
    <Suspense fallback={<Loader/>}>
      <Hero/>
      <Growth/>
      <WhyUs/>
      <Faq/>
      <Footer/>
      </Suspense>
  )
}

export default page