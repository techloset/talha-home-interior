import React from 'react'

const ourProjects = () => {
    return (
        <div className='mt-[10%]  lg:mt-[10%]  font-popins '>

            {/* heading */}
            <p className='text-[18px] text-[#241330] font-[500] mx-8 sm:text-[26px] lg:hidden '>Our Projects</p>

            {/* images */}
            <div className=' grid grid-cols-12 gap-2 w-[90%] mx-auto mt-[8%]  lg:grid lg:grid-cols-12 lg:gap-2 '>

                <div className='col-span-6 mx-auto lg:col-span-3  '>
                    <img className='w-[250px] mb-[5%] sm:w-[320px] sm:mb-[2%] md:w-[377px]  lg:h-[379px] lg:mb-[5%]   ' src="/images/ourProject1.png" alt="" />
                    <img className='w-[250px] sm:w-[320px]  lg:w-[385px] lg:h-[194px] ' src="/images/ourProject2.png" alt="" />
                </div>

                <div className='col-span-6 mx-auto  lg:col-span-3 lg:-mx-2'>
                    <img className='w-[250px] mb-[5%] sm:w-[320px] sm:mb-[2%] lg:h-[189px] lg:mb-[5%] lg:w-[382px]' src="/images/ourProject3.png" alt="" />
                    <img className='w-[250px]  sm:w-[320px] lg:w-[378px] lg:h-[379px] ' src="/images/ourProject4.png" alt="" />

                </div>
                {/* text */}
                <div className='col-span-12  lg:col-span-6   bg-white bg-opacity-75  lg:z-10  font-popins lg:text-center  lg:p-3 lg:mt-[5%]  lg-w[997px] lg:h-[519px] lg:ml-[-140px]   ' >
                    <div className='lg:w-full lg:m-auto lg:mt-[6%]   '>

                        <p className='hidden lg:block  lg:text-[36px] text-[#241330] font-[500] lg:mt-[4%] lg:w-[219px] text-center mx-auto'>Our Projects</p>
                        <p className=' text-center text-[15px] mt-[6%]    lg:text-center lg:m-[5%]  lg:text-[18px] font-[400]  lg:mt-[4%] lg:w-[860px]'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna,
                            porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla</p>
                        <p className=' text-[15px] mt-[5%]  md:w-[100%] lg:text-center lg:m-[5%]  lg:mt-[-12px] lg:text-[18px] font-[400] lg:w-[860px]'>
                            magna fringilla urna, porttitor rhoncus dolor purus non enim praesent
                            elementum facilisis leo,vel fringilla est ullamcorper eget nulla</p>

                        <button className='mt-[7%] w-[40%] p-1 flex justify-center mx-auto sm:text-[18px] sm:w-[25%]  bg-[#4B2A63]  lg:p-5 text-white lg:w-[270px] lg:h-[80px] lg:text-[24px] lg:font-[600] '>View All</button>
                    </div>
                </div>



            </div>

        </div>
    )
}

export default ourProjects