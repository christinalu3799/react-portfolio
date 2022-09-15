import React from 'react'
import RestaurantManager from '../assets/restaurant-mgr.png'
import KrustyKrab from '../assets/krustykrab.png'
import Portfolio from '../assets/portfolio.png'
import ProjectCard from './ProjectCard'

const Work = (props) => {
  return (
    <div name='work' className='w-full md:h-fit text-[#5e5e5e] font-mono box-border'>

        {/* container */}
        <div className='max-w-[1000px] mx-auto px-8 sm:px-16 flex flex-col justify-center w-full h-full'>

            <div className='pb-4'>
                <p className='text-4xl font-bold inline border-b-4'>Work</p>
                <p className='py-8 sm:pb-4 text'>// Check out some of my recent work!</p>
            </div>

            {/* container to hold all projects */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-6'>
                
            {/* ===================================================================== */}
                <ProjectCard projectImg={Portfolio} projectTitle='Portfolio' projectSubtitle={'React | Tailwind CSS'} demo={'/'} code={'https://github.com/christinalu3799/react-portfolio'}/>
            {/* ===================================================================== */}
            {/* ===================================================================== */}
                <ProjectCard projectImg={RestaurantManager} projectTitle='Inventory Manager' projectSubtitle={'Node.js| Mongoose | Express'} demo={'restaurant-inventory-manager.herokuapp.com/'} code={'https://github.com/christinalu3799/restaurant-inventory-manager'}/>
                
            {/* ===================================================================== */}
            {/* ===================================================================== */}
                <ProjectCard projectImg={KrustyKrab} projectTitle='Racing Game' projectSubtitle={'HTML | CSS | JavaScript'} demo={'christinalu.me/race-to-the-krusty-krab/'} code={'https://github.com/christinalu3799/race-to-the-krusty-krab'}/>
            {/* ===================================================================== */}
                
            </div>   

        </div>
    </div>
  )
}

export default Work