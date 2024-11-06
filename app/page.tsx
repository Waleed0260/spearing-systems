"use client"
import React, {useState, useEffect} from 'react';
import Hero from '@/components/home/Hero'
import About from '@/components/home/About'
import Services from '@/components/home/Services'
import Testimonial from '@/components/home/Testimonial'
import Footer from '@/components/home/Footer'
import Process from '@/components/home/Process';
import Loader from '@/components/home/Loader';
import Consultation from '@/components/home/Consultation';
import Technologies from '@/components/home/Technologies';
import Slider from '@/components/home/Slider';
import Portfolio from '@/components/home/Portfolio';
import Script from 'next/script';
import CreativeWebsite from '@/components/home/CreativeWebsite';
import Interior from '@/components/home/Interior';
export default function Page() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 100);

    // Cleanup the timer
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <>
    <Hero />
    <Slider/>
    <div className='w-full flex justify-center'>
      <About />
    </div>
      <Services />
      <CreativeWebsite/>
      <Process/>
      {/* <Portfolio/> */}
      <Interior/>
      <Testimonial/>
      <Consultation/>
      <Footer />

    </>
  );
}
