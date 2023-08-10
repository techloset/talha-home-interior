import React from 'react'

const ourProjects = () => {
    return (
        <div className='mt-[10%]  md:mt-[10%] '>

            <p className='text-[18px] text-[#241330] font-[500] mx-8 md:hidden '>Our Projects</p>

            <div className='grid grid-cols-12 gap-2 w-[90%] mx-auto mt-[8%]  md:grid md:grid-cols-12 md:gap-2 md:mx-10'>

                <div className='col-span-6 mx-auto md:col-span-3  '>
                    <img className='w-[250px] mb-[5%]  md:w-[377px] md:h-[309px] lg:h-[300px] md:mb-[5%]   ' src="/images/ourProject1.png" alt="" />
                    <img className='w-[250px] md:w-[385px] md:h-[194px] ' src="/images/ourProject2.png" alt="" />
                </div>

                <div className='col-span-6 mx-auto  md:col-span-3'>
                    <img className='w-[250px] mb-[5%] md:w-[385px] md:h-[189px] md:mb-[5%]' src="/images/ourProject3.png" alt="" />
                    <img className='w-[250px] md:w-[378px] md:h-[313px]  lg:h-[300px] ' src="/images/ourProject4.png" alt="" />

                </div>

                <div className='col-span-12  md:ml-[-32px] md:col-span-6 md:h-[450px]  bg-white bg-opacity-75  md:z-10  font-popins md:text-center  md:p-3 md:mt-[5%]' >
                    <div className='md:w-full md:m-auto md:mt-[6%]'>
                        <p className='hidden sm:block  md:text-[36px] text-[#241330] font-[500] '>Our Projects</p>
                        <p className='text-start text-[14px] mt-[6%]   md:w-[100%] md:text-center md:m-[5%] md:mt-[10%] md:text-[18] font-[400]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna,
                            porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla</p>
                        <p className=' text-[14px] mt-[6%]  md:w-[100%] md:text-center md:m-[5%] md:mt-[7%] md:text-[18] font-[400]'> magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo,
                            vel fringilla est ullamcorper eget nulla</p>

                    </div>
                    <button className='mt-[7%] w-[40%] flex justify-center mx-auto   bg-[#4B2A63] md:p-3 md:w-[40%] text-white'>View All</button>
                </div>



            </div>

        </div>
    )
}

export default ourProjects