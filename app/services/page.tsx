"use client"
import Testimonial from '@/components/home/Testimonial'
import Video from '@/components/home/Video'
import Hero from '@/components/service/Hero'
import Services from '@/components/service/Services'
import React from 'react'

const page = () => {
  return (
    <>
    <Hero/>
    <Services/>
    <Testimonial/>
    <Video/>
    </>
  )
}

export default page