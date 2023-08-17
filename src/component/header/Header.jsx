import React from 'react'
// import image from '../../assets/Artboard.png'
import image1 from '../../assets/imag.png'


const Header = () => {
    return (
        <div className='font-popins '>

            <div className='  lg:-[1920px] lg:-[274px]  '>

                <div className='   lg:grid lg:grid-cols-2 lg:gap-1 flex justify-between mx-2'>

                    <div className='lg:mt-8 '>
                        <img src='/images/Artboard.png' alt="" className=' w-[80px] :w-[110px] sm:w-[133px] lg:w-[111px] lg:h-[111px] ' />
                    </div>

                    <div className=' hidden lg:grid lg:grid-cols-2 text-[#451A64] lg:text-[20px] font-[500] lg:ml-[100px] ' >

                        <div className='  lg:flex lg:justify-center lg:items-center   lg:ml-[135px]'>Join as Desig Expert</div>
                        <div className=' lg:flex lg:justify-center lg:items-center  lg:ml-[-25px] '>Partner with LAND interiors</div>

                    </div>

                    <div className=' lg:hidden flex  justify-center items-center'>
                        <img src="/images/menu.png" alt="" className='w-[40px] sm:w-[66px] ' />
                    </div>



                </div>

                <div className=' lg:mt-[35px]  hidden lg:grid lg:grid-cols-1 lg:text-[20px]  font-[400] leading-8 mt-[20px]'>

                    <div className='grid lg:gird-cols-5 gap-20 grid-flow-col lg:mt-[20px]  m-auto '  >
                        <div className=''> About</div>
                        <div className=''> Project</div>
                        <div className=''> studio</div>
                        <div className=''> blog</div>
                        <div className=''> Contact</div>
                    </div>

                </div>

            </div>


            <div className='lg:grid lg:grid-cols-2 mt-[30px] lg:mt-[60px]'>

                <div className='relative z-0 '> <img src={image1} alt="" className='sm:w-[1090px] sm:h-[757px] h-[390px] lg:w-[1090px] lg:h-[613px] ' /> </div>


                {/* //////////////////////////text area/////////////////////////////////// */}

                <div className='bg-white sm:h-[170px] sm:mt-[-135px] relative z-10 lg:static mt-[-87px] w-[80%] p-3 m-auto bg-opacity-75    lg:mt-[110px] 
                 text-center lg:w-[997px] lg:h-[404px] lg:ml-[-120px] '>

                    <div className=' -mt-0 sm:mt-[15px] lg:mr-[110px]    lg:mt-[90px] lg:ml-[40px]'>

                        <p className=' lg:text-[36px] lg:font-[400] sm:text-[22px] sm:font-[400] lg:mt-[61px]'>Get personalised home interiors </p>
                        <p className=' lg:text-[48px]  sm:text-[22px] sm:font-[600]'>in just 50 days</p>
                        <button className='bg-[#4B2A63] lg:mt-[50px] lg:w-[630px] lg:text-[30px] lg:font-[600] lg:h-[96px] cursor-pointer text-[white] sm:p-2 text-[12px] p-1 sm:text-[16px] font-[400]   '>SPEAK WITH A ONLINE CONSULTANT</button>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Header