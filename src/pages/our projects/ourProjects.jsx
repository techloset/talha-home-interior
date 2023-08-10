import React from 'react'

const ourProjects = () => {
    return (
        <div className='md:mt-[10%] '>

            <div className='md:grid md:grid-cols-12 md:gap-2 md:mx-10'>

                <div className=' md:col-span-3'>
                    <img className='md:w-[377px] md:h-[309px] md:mb-[5%]  lg:h-[350px] ' src="/images/ourProject1.png" alt="" />
                    <img className='md:w-[385px] md:h-[194px] ' src="/images/ourProject2.png" alt="" />
                </div>

                <div className='md:col-span-3'>
                    <img className='md:w-[385px] md:h-[189px] md:mb-[5%]' src="/images/ourProject3.png" alt="" />
                    <img className='md:w-[378px] md:h-[313px] lg:h-[350px] ' src="/images/ourProject4.png" alt="" />

                </div>

                <div className=' md:ml-[-32px] md:col-span-6 md:h-[450px]  bg-white bg-opacity-75  md:z-10  font-popins md:text-center  md:p-3 md:mt-[5%]' >
                    <div className='md:w-full md:m-auto md:mt-[6%]'>
                        <p className='md:text-[36px] text-[#241330] font-[500]'>Our Projects</p>
                        <p className='md:w-[100%] md:text-center md:m-[5%] md:mt-[10%] md:text-[18] font-[400]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna,
                            porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla</p>
                        <p className='md:w-[100%] md:text-center md:m-[5%] md:mt-[7%] md:text-[18] font-[400]'> magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo,
                         vel fringilla est ullamcorper eget nulla</p>
                         
                    </div>
                    <button className='bg-[#4B2A63] md:p-3 md:w-[40%] text-white'>View All</button>
                </div>



            </div>

        </div>
    )
}

export default ourProjects