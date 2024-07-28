"use client"
import Loader from '@/components/home/Loader';
import React, {Suspense, lazy} from 'react'
const Hero = lazy(() => import('@/components/portfolioDetail/Hero'));
const Role = lazy(() => import('@/components/portfolioDetail/Role'));
const Solution = lazy(() => import('@/components/portfolioDetail/Solution'));
const Client = lazy(() => import('@/components/portfolioDetail/Client'));

const page = ({ params }: { params: { ID: string } }) => {
  return (
    <div className='w-full flex flex-col items-center justify-center'>
      <Suspense fallback={<Loader/>}>
        <Hero/>
        <Role/>
        <Client/>
        <Solution/>
      </Suspense>
    </div>
  )
}

export default page