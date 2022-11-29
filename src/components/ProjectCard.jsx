import React, { Component } from 'react'

class ProjectCard extends Component {
    
    render() {
        return (
        
            <div data-aos='fade-up' className=' p-4 shadow-lg shadow-[#d6d6d6] group container rounded flex flex-col justify-center items-center mx-auto bg-[#ffffff] '>

                <div className='w-full h-full sm:h-[450px] bg-[#eeeeee]'> 
                    <img className='object-cover rounded w-full h-full shadow filter contrast-75 hover:contrast-100 ease-in-out duration-500' src={this.props.projectImg} alt={this.props.alt}/>
                </div>

                <div className='flex flex-col justify-center mt-4'>
                    {/* project title */}
                    <span className='text-lg text-center font-bold'>
                        {this.props.projectTitle}
                    </span>
                    {/* project subtitle */}
                    <span className='text-center text-sm font-bold'>
                        {this.props.projectSubtitle}
                    </span>
                    {/* project subtitle */}
                    <span className='text-center text-sm my-4'>
                        {this.props.desc}
                    </span>
                    <div>

                </div>
                    {/* buttons */}
                    <div className='pt-2 text-center'>
                        <a href={this.props.demo} target='_blank' rel="noreferrer">
                            <button className='text-sm text-center border border-[#4C433D] rounded px-4 py-2 m-2 bg-white font-bold hover:bg-[#4C433D] hover:text-[#ffffff] hover:border-[#4C433D] transition ease-in-out duration-300'>Demo</button>
                        </a>
                        <a href={this.props.code} target='_blank' rel="noreferrer">
                            <button className='text-sm text-center border border-[#4C433D] rounded px-4 py-2 m-2 bg-white font-bold hover:bg-[#4C433D] hover:text-[#ffffff] hover:border-[#4C433D] transition ease-in-out duration-300'>Code</button>
                        </a>
                    </div>
                </div>

            </div>
   
        )
    }
}

export default ProjectCard