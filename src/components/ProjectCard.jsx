import React, { Component } from 'react'

class ProjectCard extends Component {
    
    render() {
        console.log(this.state)
        return (
        
            <div className='h-fit p-4 sm:h-[300px] shadow-lg shadow-[#929292] group container rounded flex flex-col justify-center items-center mx-auto '>

                <div className='w-full h-full sm:h-[150px] bg-[#eeeeee]'> 
                    <img className='object-cover rounded w-full h-full shadow' src={this.props.projectImg} alt={this.props.alt}/>
                </div>

                <div className='flex flex-col justify-center mt-4 transition duration-300 ease-in-out'>
                    {/* project title */}
                    <span className='mt-2 text-center font-bold'>
                        {this.props.projectTitle}
                    </span>
                    {/* project subtitle */}
                    <span className='text-center text-sm font-bold mt-2'>
                        {this.props.projectSubtitle}
                    </span>

                    {/* buttons */}
                    <div className='py-2 text-center'>
                        <a href={this.props.demo} target='_blank' rel="noreferrer">
                            <button className='text-center border rounded px-4 py-2 m-2 bg-white text-[#5e5e5e] font-bold hover:bg-[#5e5e5e] hover:text-[#ffffff] hover:border-[#5e5e5e] transition ease-in-out duration-300'>Demo</button>
                        </a>
                        <a href={this.props.code} target='_blank' rel="noreferrer">
                            <button className='text-center border rounded px-4 py-2 m-2 bg-white text-[#5e5e5e] font-bold hover:bg-[#5e5e5e] hover:text-[#ffffff] hover:border-[#5e5e5e] transition ease-in-out duration-300'>Code</button>
                        </a>
                    </div>
                </div>

            </div>
   
        )
    }
}

export default ProjectCard