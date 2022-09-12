// refcr - shortcut
import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import Logo from '../assets/logo.svg'

const Navbar = () => {
    // toggle hamburger menu on click
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)


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
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* mobile menu */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#cecac5] flex flex-col justify-center items-center'}>
                <li className='py-6 text-3xl'>Home</li>
                <li className='py-6 text-3xl'>About</li>
                <li className='py-6 text-3xl'>Skills</li>
                <li className='py-6 text-3xl'>Projects</li>
                <li className='py-6 text-3xl'>Contact</li>
            </ul>
            
            {/* social icons */}
            <div className='hidden'></div>
        </div>
    )
}

export default Navbar