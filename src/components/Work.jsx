import React from 'react'
import RestaurantManager from '../assets/restaurant-mgr.png'
import KrustyKrab from '../assets/krustykrab.png'
import Portfolio from '../assets/portfolio.png'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-[#5e5e5e] font-mono'>

        {/* container */}
        <div className='max-w-[1000px] mx-auto px-8 sm:px-32 flex flex-col justify-center w-full h-full'>

            <div className='pb-4'>
                <p className='text-4xl font-bold inline border-b-4'>Work</p>
                <p className='py-8 sm:pb-4 text-sm'>// Check out some of my recent work!</p>
            </div>

            {/* container to hold all projects */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-6'>
                
            {/* ===================================================================== */}
                <div style={{backgroundImage: `url(${Portfolio})`}} className='shadow-lg shadow-[#929292] group container rounded flex justify-center items-center mx-auto content-div px-4'>

                    {/* hover effect */}
                    <div className='opacity-0 group-hover:opacity-100 flex flex-col justify-center transition duration-300 ease-in-out'>
                        <span className='text-center text-sm font-bold'>
                            Personal Portfolio
                        </span>
                        <span className='text-center text-xs font-bold'>
                            React | Tailwind 
                        </span>
                        {/* buttons */}
                        <div className='pt-4 text-center'>
                            <a href='/'>
                                <button className='text-center rounded px-4 py-3 m-2 bg-white text-[#5e5e5e] font-bold text-xs'>Demo</button>
                            </a>
                            <a href='/'>
                                <button className='text-center rounded px-4 py-3 m-2 bg-white text-[#5e5e5e] font-bold text-xs'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${RestaurantManager})`}} className='shadow-lg shadow-[#929292] group container rounded flex justify-center items-center mx-auto content-div px-4'>

                    {/* hover effect */}
                    <div className='opacity-0 group-hover:opacity-100 flex flex-col justify-center transition duration-300 ease-in-out'>
                        <span className='text-center text-sm font-bold'>
                            Full CRUD application
                        </span>
                        <span className='text-center text-xs font-bold'>
                            // short description
                        </span>
                        {/* buttons */}
                        <div className='pt-4 text-center'>
                            <a href='/'>
                                <button className='text-center rounded px-4 py-3 m-2 bg-white text-[#5e5e5e] font-bold text-xs'>Demo</button>
                            </a>
                            <a href='/'>
                                <button className='text-center rounded px-4 py-3 m-2 bg-white text-[#5e5e5e] font-bold text-xs'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${KrustyKrab})`}} className='shadow-lg shadow-[#929292] group container rounded flex justify-center items-center mx-auto content-div px-4'>

                    {/* hover effect */}
                    <div className='opacity-0 group-hover:opacity-100 flex flex-col justify-center transition duration-300 ease-in-out'>
                        <span className='text-center text-sm font-bold'>
                            2-Player racing game
                        </span>
                        <span className='text-center text-xs font-bold'>
                            // short description
                        </span>
                        {/* buttons */}
                        <div className='pt-4 text-center'>
                            <a href='/'>
                                <button className='text-center rounded px-4 py-3 m-2 bg-white text-[#5e5e5e] font-bold text-xs'>Demo</button>
                            </a>
                            <a href='/'>
                                <button className='text-center rounded px-4 py-3 m-2 bg-white text-[#5e5e5e] font-bold text-xs'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

            </div>   
            {/* ===================================================================== */}

        </div>
    </div>
  )
}

export default Work