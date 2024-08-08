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

export default function Page() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

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
      <Process/>
      {/* <Portfolio/> */}
      <Portfolio/>
      <Testimonial/>
      <Technologies/>
      {/* <Testimonial /> */}
      <Consultation/>
      <Footer />
    </>
  );
}
