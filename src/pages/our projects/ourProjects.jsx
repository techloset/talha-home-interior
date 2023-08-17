import React from 'react'

const ourProjects = () => {
    return (
        <div className='mt-[10%]  md:mt-[10%]  font-popins '>

            {/* heading */}
            <p className='text-[18px] text-[#241330] font-[500] mx-8 sm:text-[26px] md:hidden '>Our Projects</p>

            {/* images */}
            <div className=' grid grid-cols-12 gap-2 w-[90%] mx-auto mt-[8%]  md:grid md:grid-cols-12 md:gap-2 '>

                <div className='col-span-6 mx-auto md:col-span-3  lg:mx-7'>
                    <img className='w-[250px] mb-[5%] sm:w-[320px] sm:mb-[2%] md:w-[377px] md:h-[309px] lg:h-[379px] md:mb-[5%]   ' src="/images/ourProject1.png" alt="" />
                    <img className='w-[250px] sm:w-[320px]  md:w-[385px] md:h-[194px] ' src="/images/ourProject2.png" alt="" />
                </div>

                <div className='col-span-6 mx-auto  md:col-span-3 lg:-mx-2'>
                    <img className='w-[250px] mb-[5%] sm:w-[320px] sm:mb-[2%] md:w-[385px] md:h-[189px] md:mb-[5%] lg:w-[382px]' src="/images/ourProject3.png" alt="" />
                    <img className='w-[250px] md:w-[378px] sm:w-[320px] md:h-[313px] lg:w-[378px] lg:h-[379px] ' src="/images/ourProject4.png" alt="" />

                </div>
                {/* text */}
                <div className='col-span-12  md:ml-[-32px] md:col-span-6 md:h-[450px]  bg-white bg-opacity-75  md:z-10  font-popins md:text-center  md:p-3 md:mt-[5%]  lg-w[997px] lg:h-[519px] lg:ml-[-140px]   ' >
                    <div className='md:w-full md:m-auto md:mt-[6%]   '>

                        <p className='hidden md:block  md:text-[36px] text-[#241330] font-[500] lg:mt-[4%] lg:w-[219px] text-center mx-auto'>Our Projects</p>
                        <p className=' text-center text-[15px] mt-[6%]   md:w-[100%] md:text-center md:m-[5%] md:mt-[10%] md:text-[18px] font-[400]  lg:mt-[4%] lg:w-[860px]'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna,
                            porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla</p>
                        <p className=' text-[15px] mt-[5%]  md:w-[100%] md:text-center md:m-[5%] md:mt-[7%] lg:mt-[-12px] md:text-[18px] font-[400] lg:w-[860px]'> 
                        magna fringilla urna, porttitor rhoncus dolor purus non enim praesent
                         elementum facilisis leo,vel fringilla est ullamcorper eget nulla</p>

                    <button className='mt-[7%] w-[40%] p-1 flex justify-center mx-auto sm:text-[18px] sm:w-[25%]  bg-[#4B2A63] md:p-3 md:w-[40%] lg:p-5 text-white lg:w-[270px] lg:h-[80px] lg:text-[24px] lg:font-[600] '>View All</button>
                    </div>
                </div>



            </div>

        </div>
    )
}

export default ourProjects