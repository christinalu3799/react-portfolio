import React, {useState} from 'react'
import Wave from '../assets/wave.svg'
import {Link} from 'react-scroll'

const Contact = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    return (
        <div name='contact' className='w-full h-fit flex flex-col justify-center items-center py-16 font-mono background-color'>

            {/* wave */}
            <div className='w-screen mb-16'> 
                <img src={Wave} className='w-full' alt='wave section divider'></img>
            </div>

            <form 
                action='https://getform.io/f/e1d0dccd-6278-4cf3-b445-eaa4cc127c68' 
                className='flex flex-col max-w-[700px] w-full px-8 sm:px-16' 
                method='POST'
            >
                <div data-aos='slide-up'>
                    <p className='text-4xl font-display inline]'>Contact</p>
                    <p className='py-8'>Feel free to reach out to me about anything or just to say hi!</p>
                </div>
                <input className='p-2 border rounded outline-none' type="text" placeholder='Name' name='name' required />
                <input className='my-4 p-2 border rounded outline-none' type="email" placeholder='Email' name='email' required />
                <textarea className='p-2 border rounded outline-none resize-none' name="message" rows="10" placeholder='Message' required></textarea>

                <button className='border rounded border-[#4C433D] hover:bg-[#4C433D] hover:border-white hover:text-white px-4 py-3 my-8 mx-auto flex items-center transition ease-in-out duration-300'>Submit</button>
            </form>
            <button className='cursor-pointer'>
                <Link  onClick={handleClick} to="home" smooth={true} duration={500}>
                    Back to Top
                </Link>
            </button>
        </div>
    )
}

export default Contact