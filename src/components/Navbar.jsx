// refcr - shortcut
import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../assets/logo.svg'
import {Link} from 'react-scroll'

const Navbar = () => {
    // toggle hamburger menu on click
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    return (
        <div className='sm:background-color fixed w-full h-[100px] flex justify-between items-center px-8 text-grey-300 font-mono z-10 max-w-[1200px]'>
            <div>
                <img src={Logo} alt='personal logo' style={{width: '70px'}}/>
            </div>

            {/* menu */}
            {/* display anything above small */}
            <ul className='hidden sm:flex text-color'>
                <li className='hover:underline underline-offset-4'>
                    <Link to="home" smooth={true} duration={500}>
                        home
                    </Link>
                </li>
                <li className='hover:underline underline-offset-4'>
                    <Link to="about" smooth={true} duration={500}>
                        about
                    </Link>
                </li>
                <li className='hover:underline underline-offset-4'>
                    <Link to="skills" smooth={true} duration={500}>
                        skills
                    </Link>
                </li>
                <li className='hover:underline underline-offset-4'>
                    <Link to="work" smooth={true} duration={500}>
                        work
                    </Link>
                </li>
                <li className='hover:underline underline-offset-4'>
                    <Link to="contact" smooth={true} duration={500}>
                        contact
                    </Link>
                </li>
            </ul>

            {/* hamburger */}
            <div onClick={handleClick} className='sm:hidden z-10'>
                {!nav ? <FaBars color='#221F1B'/> : <FaTimes color='#EDEAE3'/>}
            </div>

            {/* mobile menu */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#221F1B] text-[#EDEAE3] flex flex-col justify-center items-center'}>
                <li  className='py-6 text-2xl'>
                    <Link onClick={handleClick} to="home" smooth={true} duration={500}>
                        home
                    </Link>
                </li>
                <li className='py-6 text-2xl'>
                    <Link onClick={handleClick} to="about" smooth={true} duration={500}>
                        about
                    </Link>
                </li>
                <li className='py-6 text-2xl'>
                    <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
                        skills
                    </Link>
                </li>
                <li className='py-6 text-2xl'>
                    <Link onClick={handleClick} to="work" smooth={true} duration={500}>
                        work
                    </Link>
                </li>
                <li className='py-6 text-2xl'>
                    <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
                        contact
                    </Link>
                </li>
            </ul>
            
            {/* social icons */}
            <div className='hidden md:flex fixed flex-col bottom-20 left-0'>
                <ul>
                    <li className='w-[130px] h-[50px] flex justify-between items-center my-1 ml-[-75px] hover:ml-[-5px] duration-300 bg-[#4C433D] rounded'>
                        <a className='w-full flex justify-between items-center text-[#EDEAE3] text-xs'
                        href='https://www.linkedin.com/in/christinalu3799/' target='_blank' rel="noreferrer">
                            LinkedIn <FaLinkedin size={25} />
                        </a>
                    </li>
                    <li className='w-[130px] h-[50px] flex justify-between items-center my-1 ml-[-75px] hover:ml-[-5px] duration-300 bg-[#4C433D] rounded'>
                        <a className='w-full flex justify-between items-center text-[#EDEAE3] text-xs'
                        href='https://github.com/christinalu3799' target='_blank' rel="noreferrer">
                            GitHub <FaGithub size={25} />
                        </a>
                    </li>
                    <li className='w-[130px] h-[50px] flex justify-between items-center my-1 ml-[-75px] hover:ml-[-5px] duration-300 bg-[#4C433D] rounded'>
                        <a className='w-full flex justify-between items-center text-[#EDEAE3] text-xs'
                        href='mailto:contact@christinalu.me' target='_blank' rel="noreferrer">
                            Email <HiOutlineMail size={25} />
                        </a>
                    </li>
                    <li className='w-[130px] h-[50px] flex justify-between items-center my-1 ml-[-75px] hover:ml-[-5px] duration-300 bg-[#4C433D] rounded'>
                        <a className='w-full flex justify-between items-center text-[#EDEAE3] text-xs'
                        href='https://drive.google.com/file/d/1le062bv5yVDrKYchMyFB_hhcPtKl8ITE/view?usp=sharing' target='_blank' rel="noreferrer">
                            Resume <BsFillPersonLinesFill size={25} />
                        </a>
                    </li>
                </ul>

            </div>
        </div>
    )
}

export default Navbar