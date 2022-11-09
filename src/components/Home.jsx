import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import Headshot from '../assets/headshot1.jpg'
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
        <div name='home' className='flex w-full h-screen justify-center background-color pt-[100px]'>

            {/* container */}
            <div className='flex w-full flex-col h-full items-start md:flex-row max-w-[1200px] justify-center md:items-center'> 

                {/* hero */}
                <div data-aos='fade-right' className='px-8 w-[80%] md:w-1/3 '>
                    <img src={Headshot} 
                        className='object-cover w-full rounded-xl' 
                        alt='headshot of girl'/>
                </div>

                <div data-aos='fade-left' className='w-full md:h-full md:w-2/3 px-8 mx-auto flex flex-col justify-center h-fit font-mono text-color'>
                    <p className='mt-8 text-lg md:text-xl'>Hi, my name is</p>
                    <h1 className='text-4xl md:text-6xl font-bold font-display py-4'>Christina Lu</h1>
                    <h2 className='text-lg md:text-xl font-bold'>
                        <Typewriter 
                            onInit={(typewriter) => {
                                typewriter
                                    .typeString("I'm a Fullstack Software Engineer.")
                                    .pauseFor(200)
                                    .start();
                            }}
                        />
                    </h2>
                    <div className='py-4'>
                        {/* view my work button */}
                        <button >

                            <Link to="work" smooth={true} duration={500} className='text-color group border border-[#4C433D] px-6 py-3 my-2 flex items-center hover:bg-[#221F1B] hover:text-white hover:border-transparent rounded transition ease-in-out duration-300'>
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