"use client"
import Contact from '@/components/Contact'
// import Consultation from '@/components/home/Consultation'
import Footer from '@/components/home/Footer'
import Header from '@/components/home/Header'
import React, {useEffect, useState} from 'react'
import Loader from '@/components/home/Loader'
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
    <div>
    <Contact/>
    </div>
    <Footer/>
    </>
  )
}

export default page