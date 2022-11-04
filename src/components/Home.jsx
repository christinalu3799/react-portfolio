import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import Headshot from '../assets/headshot.jpg'
import {Link} from 'react-scroll'
import Typewriter from 'typewriter-effect'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const Home = () => {
    // animate on scroll effect
    useEffect(()=>{
        Aos.init({
            duration:2000,
            offset:300
        })
    },[])
  return (
    <div name='home' className='flex w-full h-screen justify-center bg-[#ffffff] pt-[100px]'>

        {/* container */}
        <div className='flex w-full flex-col h-full items-start sm:flex-row max-w-[1000px] justify-center sm:items-center'> 

            {/* hero */}
            <div data-aos='fade-right' className='px-8 sm:px-0 w-3/4 sm:w-1/3 '>
                <img src={Headshot} className='object-cover sm:max-w-[300px]  rounded-xl' alt='headshot of girl'/>
            </div>

            <div data-aos='fade-left' className='w-full sm:w-2/3 px-8 sm:pl-18 sm:pr-0 mx-auto flex flex-col justify-center h-fit sm:h-full font-mono text-[#5e5e5e]'>
                <p className='mt-8 text-xl'>Hi, my name is</p>
                <h1 className='text-5xl sm:text-6xl font-bold font-display py-4'>Christina Lu</h1>
                <h2 className='text-xl font-bold'>
                    <Typewriter 
                        onInit={(typewriter) => {
                            typewriter
                                .typeString("I'm a Fullstack Software Engineer.")
                                .pauseFor(200)
                                .start();
                        }}
                    />
                </h2>
                {/* <h2 className='text-xl sm:text-2xl'>
                    <Typewriter 
                        onInit={(typewriter) => {
                            typewriter
                                .pauseFor(200)
                                .typeString("I love to code.")
                                .start();
                        }}
                    />
                </h2> */}
                <div className='py-4'>
                    {/* view my work button */}
                    <button >

                        <Link to="work" smooth={true} duration={500} className='text-[#5e5e5e] group border border-[#c0c0c0] px-6 py-3 my-2 flex items-center hover:bg-[#5e5e5e] hover:text-white hover:border-transparent rounded transition ease-in-out duration-300'>
                            View My Work 
                            <span className='group-hover:rotate-90 transition ease-in-out duration-300'><HiArrowNarrowRight className='ml-4' /></span>
                        </Link>
                    </button>

                </div>
            </div>
        
        </div>
    </div>
  )
}

export default Home