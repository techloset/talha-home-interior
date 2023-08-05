import React from 'react'
import image from '../../assets/Artboard.png'
import image1 from '../../assets/imag.png'


const Header = () => {
    return (
        <div>

            <div className='bg-[#F8F8F8] h-[274px]'>

                <div className='grid md:grid-cols-2 gap-1 '>

                    <div className='mt-8'>
                        <img src={image} alt="" />
                    </div>

                    <div className=' grid md:grid-cols-2 text-[#451A64] md:text-[20px] md:font-[500]  ml-[-20px]' >
                        {/* <div className=' bg-blue-500  flex justify-center items-center text-center ml-[20px]'>Join as Design Expert</div> */}
                        {/* <div className=' bg-red-500 w-[195px] flex justify-center items-center text-center mr-[20px]'>Partner with LAND Interiors</div> */}
                        <div className='  md:flex md:justify-center md:items-center md:text-start ml-[-43px]'>Join as Desig Expert</div>
                        <div className=' md:flex md:justify-center md:items-center md:text-center ml-[-25px] w-[265px]  '>Partner with LAND interiors</div>
                    </div>


                </div>

                <div className=' grid md:grid-cols-1 text-[20px] font-[400] leading-8 mt-[20px]'>

                    <div className='grid md:gird-cols-5 gap-10 grid-flow-col  m-auto '  >
                        <div className=''> About</div>
                        <div className=''> Project</div>
                        <div className=''> studio</div>
                        <div className=''> blog</div>
                        <div className=''> Contact</div>
                    </div>

                </div>

            </div>


            <div className='grid md:grid-cols-2 mt-[30px]'>

                <div> <img src={image1} alt="" className='  md:w-[1090px] md:h-[613px]' /> </div>


                <div className='bg-purple-400 bg-opacity-75  md:ml-[-85px] md:mt-[108px] md:w-full md:h-[404px] text-center '>

                    <div className=''>
                   
                    <p className='text-[36px] font-[400]'>Get personalised home interiors </p>
                    <p className='text-[48px] font-[600]'>in just 50 days</p>
                    <button className='bg-[#4B2A63] cursor-pointer text-[white] text-[30px] font-[600]'>SPEAK WITH A ONLINE CONSULTANT</button>
                    
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Header