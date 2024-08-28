"use client"
// import Contact from '@/components/Contact'
import Consultation from '@/components/home/Consultation'
import Footer from '@/components/home/Footer'
import Header from '@/components/home/Header'
import React, {useEffect, useState} from 'react'
import Loader from '@/components/home/Loader'
import Hero from '@/components/portfolio/Hero'
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
    <Header/>
    <Hero text="Contact Us"/>
    <div>
    {/* <Contact/> */}
    <Consultation/>
    </div>
    <Footer/>
    </>
  )
}

export default page