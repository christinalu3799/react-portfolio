import React from 'react'
import Wave from '../assets/wave.svg'

const About = () => {
  return (
    <div name='about' className='w-full h-fit text-[#5e5e5e]'>

        

        <div className='flex flex-col justify-center items-center w-full h-full font-mono'>

            {/* wave */}
            <div className=' w-screen mb-16'> 
                <img src={Wave} className='w-full'></img>
            </div>

            {/* title */}
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'> 
                <div className='sm:text-right pb-8 pl-8'>
                    <p className='text-3xl font-bold inline border-b border-[#5e5e5e]'>
                        About
                    </p>
                </div>
                <div>
              
                </div>
            </div>

            {/* about me */}
            <div className='max-w-[1000px] px-8 py-2 sm:px-16 sm:py-4 w-full grid sm:grid-cols-2 gap-8'>
                <div className='sm:text-right font-bold'>
                    <p>Hello! I'm Christina, a self-taught fullstack web developer. </p>
                </div>
                <div className='text-sm'>
                    <p>I love to create beautiful and functional experiences from scratch.</p>
                </div>
            </div>

            <div className='max-w-[1000px] px-8 py-2 sm:px-16 sm:py-4 w-full grid sm:grid-cols-2 gap-8'>
                <div className='sm:text-right font-bold'>
                    <p>How I got here</p>
                </div>
                <div className='text-sm'>
                    <p>My passion for web development began when I was asked to maintain the website of a law firm I used to work at. Watching the ideas in my mind come to life in the browser was like magic to me, and I never got sick of it.</p>
                </div>
            </div>

            <div className='max-w-[1000px] px-8 py-2 sm:px-16 sm:py-4 w-full grid sm:grid-cols-2 gap-8'>
                <div className='sm:text-right font-bold'>
                    <p>What am I up to?</p>
                </div>
                <div className='text-sm'>
                    <p>I am currently a coding bootcamp student on track to graduate in November of 2022. By then, I will have accumulated over 450 hours of coding experience and knowledge on product development fundamentals, object-oriented programming, MVC frameworks, data modeling, and team collaboration strategies.</p>
                </div>
            </div>
            
            {/* wave */}
            <div className='w-screen mt-16'> 
                <img src={Wave} className='w-full'></img>
            </div>
        </div>


    </div>
  )
}

export default About