"use client"
import Footer from '@/components/home/Footer';
import Header from '@/components/home/Header';
import Loader from '@/components/home/Loader';
import Benefits from '@/components/serviceDetail/Benefits';
import Help from '@/components/serviceDetail/Help';
import Results from '@/components/serviceDetail/Results';
import Tell from '@/components/serviceDetail/Tell';
import Testimonial from '@/components/serviceDetail/Testimonial';
import Visibility from '@/components/serviceDetail/Visibility';
import WhyUs from '@/components/serviceDetail/WhyUs';
import React, {Suspense, lazy} from 'react'

const page = ({ params }: { params: { ID: string } }) => {
  return (
    <Suspense fallback={<Loader/>}>
      <Header/>
      <Visibility/>
      <WhyUs/>
      <Help/>
      <Benefits/>
      <Results/>
      <Testimonial/>
      <Tell/>
      <Footer/>
      </Suspense>
  )
}

export default page