// refcr - shortcut
import React from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import Logo from '../assets/logo.svg'

const Navbar = () => {
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#cecac5] text-grey-300 font-mono'>
        <div>
            <img src={Logo} alt='Logo Image' style={{width: '55px'}}/>
        </div>

        {/* menu */}
        {/* display anything above medium */}
        <ul className='hidden md:flex text-xs'>
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Contact</li>
        </ul>


        {/* hamburger */}
        <div className='hidden'>
            <FaBars />
        </div>

        {/* mobile menu */}
        <ul className='hidden'>
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Contact</li>
        </ul>
        
        {/* social icons */}
        <div className='hidden'></div>
    </div>
  )
}

export default Navbar