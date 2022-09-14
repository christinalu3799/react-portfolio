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
        <div className='fixed w-full h-[80px] flex justify-between items-center px-6 text-grey-300 font-mono'>
            <div>
                <img src={Logo} alt='Logo Image' style={{width: '55px'}}/>
            </div>

            {/* menu */}
            {/* display anything above small */}
            <ul className='hidden sm:flex text-xs text-[#5e5e5e]'>
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
                {!nav ? <FaBars color='#5e5e5e'/> : <FaTimes color='#ffffff'/>}
            </div>


            {/* mobile menu */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#5e5e5e] text-[#ffffff] flex flex-col justify-center items-center'}>
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
            <div className='hidden md:flex fixed flex-col bottom-1 left-0'>
                <ul>
                    <li className='w-[130px] h-[50px] flex justify-between items-center my-1 ml-[-75px] hover:ml-[-5px] duration-300 bg-[#72919F] rounded'>
                        <a className='w-full flex justify-between items-center text-[#ffffff] text-xs'
                        href='https://www.linkedin.com/in/christinalu3799/' target='_blank'>
                            LinkedIn <FaLinkedin size={25} />
                        </a>
                    </li>
                    <li className='w-[130px] h-[50px] flex justify-between items-center my-1 ml-[-75px] hover:ml-[-5px] duration-300 bg-[#72919f] rounded'>
                        <a className='w-full flex justify-between items-center text-[#ffffff] text-xs'
                        href='https://github.com/christinalu3799' target='_blank'>
                            GitHub <FaGithub size={25} />
                        </a>
                    </li>
                    <li className='w-[130px] h-[50px] flex justify-between items-center my-1 ml-[-75px] hover:ml-[-5px] duration-300 bg-[#72919f] rounded'>
                        <a className='w-full flex justify-between items-center text-[#ffffff] text-xs'
                        href='mailto:christina.lu3799@gmail.com' target='_blank'>
                            Email <HiOutlineMail size={25} />
                        </a>
                    </li>
                    <li className='w-[130px] h-[50px] flex justify-between items-center my-1 ml-[-75px] hover:ml-[-5px] duration-300 bg-[#72919f] rounded'>
                        <a className='w-full flex justify-between items-center text-[#ffffff] text-xs'
                        href='https://drive.google.com/file/d/103R4L61n0ONW2HID07CaawojnFtiBe9y/view?usp=sharing' target='_blank'>
                            Resume <BsFillPersonLinesFill size={25} />
                        </a>
                    </li>
                </ul>

            </div>
        </div>
    )
}

export default Navbar