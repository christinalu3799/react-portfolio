import React from 'react'
import Wave from '../assets/wave.svg'

const About = () => {
 
  return (
    <div name='about' className='w-full h-fit text-[#5e5e5e]'>

        <div className='flex flex-col justify-center items-center w-full h-full font-mono'>

            {/* wave */}
            <div className=' w-full mb-16'> 
                <img src={Wave} className='w-full' alt='png of wave section divider'></img>
            </div>

            {/* title */}
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8' data-aos='fade-right'> 
                <div className='sm:text-right pb-8 pl-8'>
                    <p className='text-4xl font-bold inline border-b-4'>
                        About
                    </p>
                </div>
                <div>
              
                </div>
            </div>
{/* 
            <Zoom>
                <p>This text will be revealed on scroll!!</p>
            </Zoom> */}
            {/* about me */}
            <div className='max-w-[1000px] px-8 py-2 sm:px-16 sm:py-4 w-full grid sm:grid-cols-2 gap-8'>
                <div className='text-xl sm:text-lg sm:text-right font-bold'>
                    <p data-aos='fade-right'>I'm Christina, a fullstack developer. </p>
                </div>
                <div>
                    <p data-aos='fade-left'>I love to create beautiful and functional experiences from scratch.</p>
                </div>
            </div>

            <div className='max-w-[1000px] px-8 py-4 sm:px-16 sm:py-4 w-full grid sm:grid-cols-2 gap-8'>
                <div className='text-xl sm:text-lg sm:text-right font-bold'>
                    <p data-aos='fade-right'>How I got here:</p>
                </div>
                <div data-aos='fade-left'>
                    <p>My passion for software development stemmed from my last role at a law firm where I had the opportunity to work on the company site.</p>
                    <br></br>
                    <p> Watching the ideas in my mind come to life in the browser was like magic to me and I've been hooked ever since.</p>
                </div>
            </div>

            <div className='max-w-[1000px] px-8 py-4 sm:px-16 sm:py-4 w-full grid sm:grid-cols-2 gap-8'>
                <div className='text-xl sm:text-lg sm:text-right font-bold'>
                    <p data-aos='fade-right'>What am I up to?</p>
                </div>
                <div data-aos='fade-left'>
                    <p>I am currently a coding bootcamp student on track to graduate in November of 2022. </p>
                    <br></br>
                    <p>By then, I will have accumulated over 450 hours of coding experience and knowledge on product development fundamentals, object-oriented programming, MVC frameworks, data modeling, and team collaboration strategies.</p>
                </div>
            </div>

            <div className='max-w-[1000px] px-8 py-4 sm:px-16 sm:py-4 w-full grid sm:grid-cols-2 gap-8'>
                <div className='text-xl sm:text-lg sm:text-right font-bold'>
                    <p data-aos='fade-right'>What's next?</p>
                </div>
                <div data-aos='fade-left'>
                    <p>I am actively seeking an entry level software engineer role to work on functional projects using intentional and user-focused design.</p>
                    <br></br>
                    <p>Leveraging my experience in the legal, hospitality, and education services industry, I am confident in my ability to work effectively with people from all backgrounds. </p>
                </div>
            </div>
            
        </div>


    </div>
  )
}

export default About