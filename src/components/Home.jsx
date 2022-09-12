import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#ffffff]'>
      {/* container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full font-mono text-[#5e5e5e]'>
        <p className=''>Hi, my name is</p>
        <h1 className='text-5xl sm:text-6xl font-bold font-display py-4'>Christina Lu</h1>
        <h2 className='text-2xl sm:text-3xl font-bold'>I'm a Fullstack Developer.</h2>
        <div className='py-4'>
          <button>View My Work <HiArrowNarrowRight /></button>
        </div>
      </div>
    </div>
  )
}

export default Home