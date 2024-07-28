import React from 'react'

const Numbers = () => {
  return (
    <div className='w-[100%] bg-white text-black border-b-2 border-blue-900'>

        <div className='flex flex-row justify-around items-center p-12'>
            <div className='flex flex-col'>
                <p className='font-bold text-2xl'>256</p>
                <p>Project Completed</p>
            </div>

            <div className='flex flex-col'>
                <p className='font-bold text-2xl'>860</p>
                <p>Cups Completed</p>
            </div>
            <div className='flex flex-col'>
                <p className='font-bold text-2xl'>200</p>
                <p>Satisfied Clients</p>
            </div>
            <div className='flex flex-col'>
                <p className='font-bold text-2xl'>800</p>
                <p> experts available</p>
            </div>
        </div>
    </div>
  )
}

export default Numbers