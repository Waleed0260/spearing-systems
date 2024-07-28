import Loader from '@/components/home/Loader'
import React, { Suspense, lazy } from 'react'
const Hero = lazy(() => import('@/components/portfolio/Hero'));
const Portfolio = lazy(() => import('@/components/portfolio/Portfolio'));

const page = () => {
  return (
    <Suspense fallback={<Loader/>}>
      <Hero/>
      <Portfolio/>
    </Suspense>
  )
}

export default page