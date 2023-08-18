import React from 'react'

const ourProjects = () => {
    return (
        <div className='mt-[10%] bg-[#F5FCFF]  lg:mt-[10%] font-popinsmedium'>

            {/* heading */}
            <p className='text-[18px] text-[#241330]  sm:ml-[7%] slg:ml-[10%] font-[500] mx-8 sm:text-[36px] lg:hidden '>Our Projects</p>

            {/* images */}
            <div className='  sm:w-[700px] lg:w-auto  slg:w-[960px] grid grid-cols-2 sm:mt-[4%]  mx-auto mt-[8%]  lg:grid lg:grid-cols-12 lg:gap-2 '>

                <div className=' mx-auto lg:col-span-3  sm:mr-[4px] '>
                    <img className='w-[250px] sm:w-[377px]  sm:h-[379px]  mb-[5%]  sm:mb-[2%] lg:w-[377px]  lg:h-[379px] lg:mb-[5%]   ' src="/images/ourProject1.png" alt="" />
                    <img className='w-[250px]  lg:w-[385px] lg:h-[194px]  sm:w-[378px] sm:h-[194px]' src="/images/ourProject2.png" alt="" />
                </div>

                <div className=' mx-auto  lg:col-span-3 lg:-mx-2 sm:ml-[4px]   '>
                    <img className='w-[250px]  mb-[5%] sm:mb-[2%] lg:mb-[5%]  lg:h-[189px] lg:w-[382px] sm:h-[189px] sm:w-[382px]' src="/images/ourProject3.png" alt="" />
                    <img className='w-[250px]   lg:w-[378px] lg:h-[379px] sm:w-[378px] sm:h-[379px]' src="/images/ourProject4.png" alt="" />

                </div>

                {/* text */}
                <div className='col-span-12 slg:w-[80%] slg:ml-[90px] bg-white  lg:col-span-6   bg-opacity-75  lg:z-10   lg:text-center  lg:p-3 lg:mt-[5%]  lg-w[997px] lg:h-[519px] lg:ml-[-160px]   ' >
                    <div className='lg:w-full lg:m-auto lg:mt-[6%]   '>

                        <p className='hidden lg:block  lg:text-[36px] text-[#241330] font-[500] lg:mt-[4%] lg:w-[219px] text-center mx-auto'>Our Projects</p>

                        <p className=' text-center text-[15px] mt-[6%]    lg:text-center lg:ml-[-2%]  lg:text-[18px] font-[400]  lg:mt-[4%] lg:w-[860px] sm:text-[24px]  sm:h-[180px] sm:text-start'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna,
                            porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla</p>
                        <p className=' text-[15px] mt-[5%]   lg:text-center lg:m-[5%]  lg:mt-[-12px] lg:ml-[-2%] lg:text-[18px] font-[400] lg:w-[860px] sm:text-[24px] sm:mt-[2px]  sm:h-[180px]'>
                            magna fringilla urna, porttitor rhoncus dolor purus non enim praesent
                            elementum facilisis leo,vel fringilla est ullamcorper eget nulla</p>

                        <button className='mt-[7%] w-[40%] p-1 flex justify-center mx-auto sm:text-[24px]  bg-[#4B2A63] sm:mt-[-10px] font-popinsSemiBold sm:p-5 text-white sm:w-[270px] sm:h-[80px] lg:text-[24px] lg:font-[600] lg:mt-[-12%]'>View All</button>
                    </div>
                </div>



            </div>

        </div>
    )
}

export default ourProjects