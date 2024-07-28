import Faq from '@/components/about/Faq'
import Growth from '@/components/about/Growth'
import Hero from '@/components/about/Hero'
import WhyUs from '@/components/about/WhyUs'
import React from 'react'

const page = () => {
  return (
    <div>
      <Hero/>
      <Growth/>
      <WhyUs/>
      <Faq/>
    </div>
  )
}

export default page