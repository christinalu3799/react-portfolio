import React from 'react'
import RestaurantManager from '../assets/restaurant-mgr.png'
import KrustyKrab from '../assets/krustykrab.png'
import Portfolio from '../assets/portfolio.png'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-fit text-[#5e5e5e] font-mono box-border'>

        {/* container */}
        <div className='max-w-[1000px] mx-auto px-8 sm:px-32 flex flex-col justify-center w-full h-full'>

            <div className='pb-4'>
                <p className='text-4xl font-bold inline border-b-4'>Work</p>
                <p className='py-8 sm:pb-4 text-sm'>// Check out some of my recent work!</p>
            </div>

            {/* container to hold all projects */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-6'>
                
            {/* ===================================================================== */}
                <div className='h-fit p-4 sm:h-[300px] shadow-lg shadow-[#929292] group container rounded flex flex-col justify-center items-center mx-auto '>

                    <div className='w-full h-full sm:h-[150px] bg-[#eeeeee]'> 
                        <img className='object-cover rounded w-full h-full shadow' src={Portfolio}/>
                    </div>
                    
                   
                    <div className='flex flex-col justify-center mt-4 transition duration-300 ease-in-out'>
                        {/* project title */}
                        <span className='mt-2 text-center text-sm font-bold'>
                            Personal Portfolio
                        </span>
                        {/* project subtitle */}
                        <span className='text-center text-xs font-bold'>
                            React | Tailwind CSS
                        </span>

                        {/* buttons */}
                        <div className='py-2 text-center'>
                            <a href='/'>
                                <button className='text-center border rounded px-4 py-2 m-2 bg-white text-[#5e5e5e] font-bold text-xs hover:bg-[#5e5e5e] hover:text-[#ffffff] hover:border-[#5e5e5e] transition ease-in-out duration-300'>Demo</button>
                            </a>
                            <a href='https://github.com/christinalu3799/react-portfolio' target='_blank'>
                                <button className='text-center border rounded px-4 py-2 m-2 bg-white text-[#5e5e5e] font-bold text-xs hover:bg-[#5e5e5e] hover:text-[#ffffff] hover:border-[#5e5e5e] transition ease-in-out duration-300'>Code</button>
                            </a>
                        </div>
                    </div>

                </div>
            {/* ===================================================================== */}
    
            </div>   

        </div>
    </div>
  )
}

export default Work