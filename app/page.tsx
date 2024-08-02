"use client"
import React, {useState, useEffect} from 'react';
import Hero from '@/components/home/Hero'
import About from '@/components/home/About'
import Services from '@/components/home/Services'
import Video from '@/components/home/Video'
import Portfolio from '@/components/home/Portfolio'
import Testimonial from '@/components/home/Testimonial'
import Footer from '@/components/home/Footer'
import Process from '@/components/home/Process';
import Loader from '@/components/home/Loader';

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
    <div className='w-full flex justify-center'>
      <About />
    </div>
      <Services />
      <Video />
      <Portfolio />
      <Process/>
      <Testimonial />
      <Footer />
    </>
  );
}
