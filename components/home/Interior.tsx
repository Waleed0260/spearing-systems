import React from 'react'

const Interior = () => {
  return (
    <div className='bg-[#0D2137] w-full flex items-center justify-center'>
        <div className="w-[80%] flex flex-row justify-between items-center m-[30px]">
            <div>
            <h1 className='heading text-2xl font-bold'>The ultimate guide of digital marketing for interior design </h1>
            </div>
            <div >
            <form action="" className="flex items-center">
  <input
    type="email"
    placeholder="Enter your Email"
    className="w-full max-w-lg px-4 py-2 bg-white bg-opacity-75 text-gray-800 rounded-l-md focus:outline-none"
  />
  <button
    type="submit"
    className="px-4 py-2 bg-[#FF8E2B] text-white font-semibold rounded-r-md hover:bg-orange-600"
  >
    SUBMIT
  </button>
</form>
            </div>
        </div>
    </div>
  )
}

export default Interior