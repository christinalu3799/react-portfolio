import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen text-[#5e5e5e]'>
        <div className='flex flex-col justify-center items-center w-full h-full font-mono'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'> 
                <div className='sm:text-right pb-8 pl-8'>
                    <p className='text-3xl font-bold inline border-b border-[#5e5e5e]'>
                        About
                    </p>
                </div>
                <div>
              
                </div>
            </div>

            <div className='max-w-[1000px] px-8 sm:px-16 w-full grid sm:grid-cols-2 gap-8'>
                <div className='sm:text-right font-bold'>
                    <p>Hello! I'm Christina, a self-taught fullstack web developer. </p>
                </div>
                <div className='text-sm'>
                    <p>I love to create beautiful and functional experiences from scratch. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore ad corporis nihil neque ullam tempora asperiores, exercitationem architecto voluptates? Nobis excepturi officiis qui natus maxime commodi est perferendis sed nostrum.</p>
                </div>
            </div>
                
        </div>
    </div>
  )
}

export default About