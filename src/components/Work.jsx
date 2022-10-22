import React from 'react'
import RestaurantManager from '../assets/restaurant-mgr.png'
import KrustyKrab from '../assets/krustykrab.png'
import Portfolio from '../assets/portfolio.png'
import ProjectCard from './ProjectCard'
import Wave from '../assets/wave.svg'
import GITRipped from '../assets/gitripped.png'

const Work = (props) => {
  return (
    <div name='work' className='w-full md:h-fit text-[#5e5e5e] font-mono box-border'>
        {/* wave */}
        <div className='w-full my-8'> 
            <img src={Wave} className='w-full' alt='wave section divider'></img>
        </div> 

        {/* container */}
        <div className='max-w-[1000px] mx-auto px-8 sm:px-16 flex flex-col justify-center w-full h-fulls'>

            <div data-aos='fade-right' className='pb-16'>
                <p className='text-4xl font-bold inline border-b-4'>Work</p>
                {/* <p className='py-8 sm:pb-4 text'>Check out some of my recent work!</p> */}
            </div>

            {/* container to hold all projects */}
            <div className='grid sm:grid-cols-2 gap-6'>
                
            {/* ===================================================================== */}
                <ProjectCard 
                    projectImg={Portfolio} 
                    alt={'screenshot of portfolio'} 
                    projectTitle='Portfolio'
                    projectSubtitle={'React | Tailwind CSS'} 
                    demo={'/'} 
                    code={'https://github.com/christinalu3799/react-portfolio'}/>
            {/* ===================================================================== */}
                <ProjectCard 
                    projectImg={RestaurantManager} 
                    alt={'screenshot of login page for inventory manager app'}  projectTitle='Inventory Manager' 
                    projectSubtitle={'Mongoose | Express | Node.js'} 
                    demo={'https://restaurant-inventory-manager.herokuapp.com/'} 
                    code={'https://github.com/christinalu3799/restaurant-inventory-manager'}/>
            {/* ===================================================================== */}
                <ProjectCard 
                    projectImg={KrustyKrab} 
                    alt={'screenshot of krusty krab racing game'}  
                    projectTitle='Racing Game' 
                    projectSubtitle={'HTML | CSS | JavaScript'} 
                    demo={'https://christinalu3799.github.io/race-to-the-krusty-krab/'} 
                    code={'https://github.com/christinalu3799/race-to-the-krusty-krab'}/>
            {/* ===================================================================== */}
                <ProjectCard 
                    projectImg={GITRipped} 
                    alt={'screenshot of gitripped application'}  projectTitle='GITRipped' 
                    projectSubtitle={'MERN Stack'} 
                    demo={'https://gitripped-app.herokuapp.com/'} 
                    code={'https://github.com/pgarbrecht/gitripped-frontend'}/>
            {/* ===================================================================== */}
                
            </div>   

        </div>
    </div>
  )
}

export default Work