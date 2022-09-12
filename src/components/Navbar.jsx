// refcr - shortcut
import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../assets/logo.svg'

const Navbar = () => {
    // toggle hamburger menu on click
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)


    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-6 text-grey-300 font-mono'>
            <div>
                <img src={Logo} alt='Logo Image' style={{width: '55px'}}/>
            </div>

            {/* menu */}
            {/* display anything above medium */}
            <ul className='hidden sm:flex text-xs'>
                <li className='hover:underline underline-offset-4'>Home</li>
                <li className='hover:underline underline-offset-4'>About</li>
                <li className='hover:underline underline-offset-4'>Skills</li>
                <li className='hover:underline underline-offset-4'>Projects</li>
                <li className='hover:underline underline-offset-4'>Contact</li>
            </ul>

            {/* hamburger */}
            <div onClick={handleClick} className='sm:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* mobile menu */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#cecac5] flex flex-col justify-center items-center'}>
                <li className='py-6 text-2xl'>Home</li>
                <li className='py-6 text-2xl'>About</li>
                <li className='py-6 text-2xl'>Skills</li>
                <li className='py-6 text-2xl'>Projects</li>
                <li className='py-6 text-2xl'>Contact</li>
            </ul>
            
            {/* social icons */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#aaaaaa]'>
                        <a className='w-full flex justify-between items-center text-[#5e5e5e]'
                        href='/'>
                            LinkedIn <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#aaaaaa]'>
                        <a className='w-full flex justify-between items-center text-[#5e5e5e]'
                        href='/'>
                            GitHub <FaGithub size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#aaaaaa]'>
                        <a className='w-full flex justify-between items-center text-[#5e5e5e]'
                        href='/'>
                            Email <HiOutlineMail size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#aaaaaa]'>
                        <a className='w-full flex justify-between items-center text-[#5e5e5e]'
                        href='/'>
                            Resume <BsFillPersonLinesFill size={30} />
                        </a>
                    </li>
                </ul>

            </div>
        </div>
    )
}

export default Navbar