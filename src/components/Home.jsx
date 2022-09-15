import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import Headshot from '../assets/headshot.jpg'

const Home = () => {
  return (
    <div name='home' className='flex w-full h-screen justify-center bg-[#ffffff] pt-[80px]'>

      {/* container */}
      <div className='flex flex-col-reverse h-full items-start sm:flex-row max-w-[1000px] justify-center sm:items-center'> 

        {/* hero */}
        <div className='w-full sm:w-8/12 px-8 sm:pl-18 sm:pr-0 mx-auto flex flex-col justify-center h-fit sm:h-full font-mono text-[#5e5e5e]'>

          <p className='mt-8 text-xl'>Hi, my name is</p>
          <h1 className='text-5xl sm:text-6xl font-bold font-display py-4'>Christina Lu</h1>
          <h2 className='text-2xl sm:text-3xl font-bold'>I'm a Fullstack Developer.</h2>
          <div className='py-4'>

            {/* view my work button */}
            <button className='text-[#5e5e5e] group border px-6 py-3 my-2 flex items-center hover:bg-[#5e5e5e] hover:text-white hover:border-transparent rounded transition ease-in-out duration-300'>
              View My Work 
              <span className='group-hover:translate-x-[5px] transition ease-in-out duration-300'><HiArrowNarrowRight className='ml-3' /></span>
            </button>

          </div>
        </div>

        {/* headshot */}
        <div className='px-8 w-3/4 sm:w-[450px] max-w-[450px] '>
          <img src={Headshot} className='object-cover w-full rounded-xl'></img>
        </div>
      
      </div>
    </div>
  )
}

export default Home