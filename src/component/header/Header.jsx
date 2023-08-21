import React from 'react'
// import image from '../../assets/Artboard.png'
import image1 from '../../assets/imag.png'


const Header = () => {
    return (
        <div className=' font-popinsmedium '>

            <div className='   bg-[#f8f8f8] mt-[-15px]  lg:h-[274px] sm:h-[210px] '>

                <div className='sm:mt-[15px]   lg:grid lg:grid-cols-2 lg:gap-1 flex justify-between mx-2'>

                    <div className='lg:mt-[37px] lg:ml-[37px] sm:mt-[39px] sm:ml-[23px] '>
                        <img src='/images/Artboard.png' alt="" className=' w-[80px] :w-[110px] sm:w-[133px] lg:w-[111px] lg:h-[111px] ' />
                    </div>

                    <div className=' hidden lg:grid lg:grid-cols-2 text-[#451A64] lg:text-[20px] font-[500] lg:ml-[100px] ' >

                        <div className='  lg:flex lg:justify-center lg:items-center   lg:ml-[135px]'>Join as Desig Expert</div>
                        <div className=' lg:flex lg:justify-center lg:items-center  lg:ml-[-25px] '>Partner with LAND interiors</div>

                    </div>

                    <div className=' lg:hidden flex  justify-center items-center sm:mt-[72px] mr-[64px]'>
                        <img src="/images/menu.png" alt="" className='w-[40px] sm:w-[66px] ' />
                    </div>



                </div>

                <div className=' lg:mt-[35px]   hidden lg:grid lg:grid-cols-1 lg:text-[20px]  font-[400] leading-8 mt-[20px]'>

                    <div className='grid lg:mb-[58px] lg:gird-cols-5 gap-20 grid-flow-col lg:mt-[20px]  m-auto '  >
                        <div className=''> About</div>
                        <div className=''> Project</div>
                        <div className=''> Studio</div>
                        <div className=''> Blog</div>
                        <div className=''> Contact</div>
                    </div>

                </div>

            </div>


            <div className='lg:grid lg:grid-cols-2  lg:mt-[68px]'>

                <div className='relative z-0 '> <img src={image1} alt="" className='sm:w-[1090px] sm:h-[757px] h-[390px] md:w-full lg:w-[1090px] lg:h-[613px] ' /> </div>


                {/* //////////////////////////text area/////////////////////////////////// */}

                <div className='bg-white slg:mx-[47px]  lg:mx-0 sm:h-[404px] sm:mt-[-355px] relative z-10 lg:static mt-[-87px] w-[80%] sm:w-[91%] p-3 m-auto bg-opacity-75    lg:mt-[110px] 
                 text-center slg:w-[997px] lg:h-[404px] lg:ml-[-120px] '>

                    <div className=' -mt-0   '>

                        <p className=' sm:mt-[61px] sm:text-[36px]   sm:font-[400] lg:ml-[160px] lg:mr-[236px] lg:w-[576px]  lg:mt-[61px] '>Get personalised home interiors </p>
                        <p className=' sm:mt-[11px] sm:text-[48px]  sm:font-[600] lg:w-[352px] lg:ml-[279px] lg:mr-[348px] '>in just 50 days</p>
                        <button className=' bg-[#4B2A63] sm:mt-[50px] sm:w-[630px] sm:text-[30px] sm:font-[600] sm:h-[96px] lg:ml-[110px] lg:mr-[208px] cursor-pointer text-[white] sm:p-[0px] text-[12px] p-1  font-[400]   '>SPEAK WITH A ONLINE CONSULTANT</button>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Header