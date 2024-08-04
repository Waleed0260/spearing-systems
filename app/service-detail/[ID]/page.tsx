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
import React, {Suspense, useEffect} from 'react'

const page = ({ params }: { params: { ID: string } }) => {
  useEffect(() => {
    fetch('/api/serviceDetails/search_engine')
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);
  return (
    <Suspense fallback={<Loader/>}>
      <Header color="[#0D2137]"/>
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