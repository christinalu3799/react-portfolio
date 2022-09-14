import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-fit flex justify-center items-center p-4 pt-16 bg-[#eeeeee] font-mono text-[#5e5e5e]'>
        <form action='https://getform.io/f/e1d0dccd-6278-4cf3-b445-eaa4cc127c68' className='flex flex-col max-w-[500px] w-full text-xs' method='POST'>
            <div className='pb-4'>
                <p className='text-4xl font-bold inline border-b-4'>Contact</p>
                <p className='py-4'>Feel free to reach out to me about anything or just to say hi!</p>
            </div>
            <input className='p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2' type="email" placeholder='Email' name='email' />
            <textarea className='p-2' name="message" rows="10" placeholder='Message'></textarea>

            <button className='text-[#5e5e5e] border rounded border-[#5e5e5e] hover:bg-[#5e5e5e] hover:border-white hover:text-white px-4 py-3 my-8 mx-auto flex items-center transition ease-in-out duration-300'>Submit</button>
        </form>
    </div>
  )
}

export default Contact