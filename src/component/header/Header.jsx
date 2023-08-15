import React from 'react'
// import image from '../../assets/Artboard.png'
import image1 from '../../assets/imag.png'


const Header = () => {
    return (
        <div className=' '> 

            <div className=' md:h-[274px] bg-[#F8F8F8] font-popins '>

                <div className='   md:grid md:grid-cols-2 md:gap-1 flex justify-between mx-2'>

                    <div className='md:mt-8 '>
                        <img src='/images/Artboard.png' alt="" className=' w-[80px] md:w-[110px] lg:w-[110px] ' />
                    </div>

                    <div className='hidden md:grid md:grid-cols-2 text-[#451A64] md:text-[16px] lg:text-[20px] md:font-[500]  md:ml-[-20px]' >

                        <div className='  md:flex md:justify-center md:items-center md:text-center md:ml-[-20px] md:w-min-[175px]'>Join as Desig Expert</div>
                        <div className=' md:flex md:justify-center md:items-center md:text-center md:ml-[-25px] '>Partner with LAND interiors</div>

                    </div>

                    <div className=' md:hidden lg:hidden flex  justify-center items-center'>
                        <img src="/images/menu.png" alt="" className='w-[40px] ' />
                    </div>



                </div>

                <div className=' hidden md:grid md:grid-cols-1 text-[20px]  font-[400] leading-8 mt-[20px]'>

                    <div className='grid md:gird-cols-5 gap-10 grid-flow-col  m-auto '  >
                        <div className=''> About</div>
                        <div className=''> Project</div>
                        <div className=''> studio</div>
                        <div className=''> blog</div>
                        <div className=''> Contact</div>
                    </div>

                </div>

            </div>


            <div className='md:grid md:grid-cols-2 mt-[30px]'>

                <div className='relative z-0 '> <img src={image1} alt="" className='sm:w-[100%] md:w-[1090px] md:h-[613px] h-[390px]' /> </div>


  {/* //////////////////////////text area/////////////////////////////////// */}

                <div className='bg-white sm:h-[170px] sm:mt-[-135px] relative z-10 md:static mt-[-87px] w-[80%] p-3 m-auto bg-opacity-75   md:ml-[-55px] md:mt-[110px]  md:h-[430px] text-center  '>

                    <div className='sm:mt-[15px]  md:mt-[90px] md:ml-[40px]  '>

                        <p className='md:text-[30px] md:font-[200] sm:text-[22px] sm:font-[400] '>Get personalised home interiors </p>
                        <p className='lg:text[48px] md:text-[40px] md:font-[600] md:mb-[10px] sm:text-[22px] sm:font-[600]'>in just 50 days</p>
                        <button className='bg-[#4B2A63] lg:p-6 cursor-pointer text-[white] md:text-[20px] md:font-[600] sm:p-2 text-[13px] sm:text-[16px] font-[400] p-1  '>SPEAK WITH A ONLINE CONSULTANT</button>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default Header