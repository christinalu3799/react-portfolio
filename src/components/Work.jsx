import React from 'react'
import ProjectManager from '../assets/project-mgr.png'
import RestaurantManager from '../assets/restaurant-mgr.png'
import KrustyKrab from '../assets/krustykrab.png'
import Portfolio from '../assets/portfolio.png'
import ProjectCard from './ProjectCard'
import Wave from '../assets/wave.svg'
import GITRipped from '../assets/gitripped.png'

const Work = (props) => {
  return (
    <div name='work' className='w-full md:h-fit font-mono box-border background-color'>
        {/* wave */}
        <div className='w-full my-8'> 
            <img src={Wave} className='w-full' alt='wave section divider'></img>
        </div> 

        {/* container */}
        <div className='max-w-[1000px] mx-auto px-8 sm:px-16 flex flex-col justify-center w-full h-fulls'>

            <div data-aos='fade-right' className='py-16'>
                <p className='text-4xl font-display inline'>Work</p>
            </div>

            {/* container to hold all projects */}
            <div className='grid sm:grid-cols-1 gap-6'>
                
            {/* ===================================================================== */}
                <ProjectCard 
                    projectImg={ProjectManager} 
                    alt={'screenshot of project manager application'}  projectTitle='Simple Tracker' 
                    projectSubtitle={'React | Flask | PostgreSQL'} 
                    desc={'An easy-to-use project manager for freelancers and independent contractors.'}
                    demo={'https://projectxmanager.herokuapp.com'} 
                    code={'https://github.com/christinalu3799/project-manager-frontend'}/>
            {/* ===================================================================== */}
                <ProjectCard 
                    projectImg={Portfolio} 
                    alt={'screenshot of portfolio'} 
                    projectTitle='Portfolio'
                    projectSubtitle={'React | Tailwind CSS'} 
                    desc={'My developer portfolio created with React and styled with Tailwind.'}
                    demo={'/'} 
                    code={'https://github.com/christinalu3799/react-portfolio'}/>
            {/* ===================================================================== */}
                {/* <ProjectCard 
                    projectImg={RestaurantManager} 
                    alt={'screenshot of login page for inventory manager app'}  projectTitle='Inventory Manager' 
                    projectSubtitle={'Mongoose | Express | Node.js'} 
                    demo={'https://restaurant-inventory-manager.herokuapp.com/'} 
                    code={'https://github.com/christinalu3799/restaurant-inventory-manager'}/> */}
            {/* ===================================================================== */}
                <ProjectCard 
                    projectImg={KrustyKrab} 
                    alt={'screenshot of krusty krab racing game'}  
                    projectTitle='2-Player Racing Game' 
                    projectSubtitle={'HTML | CSS | JavaScript'} 
                    desc={'A racing game based on my favorite childhood show. May the swiftest Patty Wagon win.'}
                    demo={'https://christinalu3799.github.io/race-to-the-krusty-krab/'} 
                    code={'https://github.com/christinalu3799/race-to-the-krusty-krab'}/>
            {/* ===================================================================== */}
                <ProjectCard 
                    projectImg={GITRipped} 
                    alt={'screenshot of gitripped application'}  projectTitle='GITRipped - Workout App' 
                    projectSubtitle={'MERN Stack'} 
                    desc={'A simple application created with 2 other developers that allows users to browse and save different exercises.'}
                    demo={'https://gitripped-app.herokuapp.com/'} 
                    code={'https://github.com/pgarbrecht/gitripped-frontend'}/>
            {/* ===================================================================== */}
                
            </div>   

        </div>
    </div>
  )
}

export default Work