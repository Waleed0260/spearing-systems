"use client"
import Testimonial from '@/components/home/Testimonial'
import Video from '@/components/home/Video'
import Hero from '@/components/serviceDetail/Hero'
import SecondSection from '@/components/serviceDetail/SecondSection'
import ThirdSection from '@/components/serviceDetail/ThirdSection'
import React from 'react'

const page = ({ params }: { params: { ID: string } }) => {
  return (
    <div>
      <Hero/>
      <SecondSection/>
      <ThirdSection/>
      <Testimonial/>
      <Video/>
    </div>
  )
}

export default page