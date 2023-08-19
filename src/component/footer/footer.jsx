import React from 'react'
// import imge from '../../assets/Artboard.png'

const footer = () => {
    return (
        // bg-[#F8F8F8]
        <div className=' bg-[#F8F8F8]   mt-[5%]    lg:h-[619px]'>

            <div className='lg:grid lg:grid-cols-12'>

                <div className=' w-[80%]   mx-auto lg:col-span-5 lg:mx-10 '>
.
                   <div className='slg:mt-[20px] '>
                   <img className='     w-[25%]  m-auto    lg:ml-[171px] lg:mt-[63px] sm:w-[111px] sm:h-[111px]  ' src='/images/Artboard.png' alt="" />
                   </div>

                    <p className='  hidden lg:block lg:ml-[201px]   lg:text-[18px] text-[#3D3D3D] font-[400] lg:w-[389px] lg:h-[281px] lg:mt-[30px]' >We introduce our selves as  LAND Interior and Architectural
                        Design Consultancy – one of the best interior designers in Chennai.
                        Chennai Luxury Interior and Architectural Design Consultancy has challenged
                        the  conventional way of interior designing and given nw dimensions to the
                        art of interior designing.</p>

                    {/* Small devices content  */}
                    <div className=' w-[80%]  mx-auto  lg:hidden sm:mt-[6%]'>
                        <p className=' sm:w-[310px] sm:mx-auto text-center mt-[10px] text-[12px] sm:text-[24px] sm:font-[500] '>landinteriors@gmail.com</p>
                        <p className=' sm:mt-[3%] sm:mx-auto sm:w-[310px] text-center mt-[5px] text-[10px] sm:text-[24px] sm:font-[500]  '>+91 98987 65656</p>
                    </div>

                    {/* social links */}
                    <div className='mt-2 sm:mt-9 sm:mx-[115px] lg:mx-[100px]  flex justify-around lg:mt-7  '>
                        <img className='w-[29px] h-[29px]  sm:w-[48px] sm:h-[48px]' src="/images/facebook.png" alt="" />
                        <img className='w-[29px] h-[29px] sm:w-[48px] sm:h-[48px]' src="/images/inkedin.png" alt="" />
                        <img className='w-[29px] h-[29px] sm:w-[48px] sm:h-[48px]' src="/images/twitter.png" alt="" />
                        <img className='w-[29px] h-[29px] sm:w-[48px] sm:h-[48px]' src="/images/youtube.png" alt="" />
                        <img className='w-[29px] h-[29px] sm:w-[48px] sm:h-[48px]' src="/images/instagram.png" alt="" />
                    </div>
                </div>
                {/*2rd column above SMALL DEVICES */}

                <div className='hidden lg:block  lg:col-span-2  lg:mt-[124px] font-popinsmedium'>
                    <p className='lg:text-[16px]  font-[600] '> WHAT WE DO</p>
                    <ul className='lg:text-[18px] font-[500]  lg:w-[226px] lg:h-[183px] lg:mt-[33px] text-[#4F4F4F] '>
                        <li className='lg:mb-[10px]'>Interior Design</li>
                        <li className='lg:mb-[10px]'>Kitchen</li>
                        <li className='lg:mb-[10px]'>Ceiling</li>
                        <li className='lg:mb-[10px]'>Bedroom</li>
                        <li>Smart Home</li>
                    </ul>
                </div>
                {/* 3rd column above SMALL DEVICES */}
                <div className='hidden lg:block  lg:col-span-5 md:mx-14  lg:mr-[371px] lg:mt-[119px]  '>

                    <p className='lg:text-[16px] lg:font-[600] '>Get in touch</p>

                    <p className=' lg:w-[200px]  lg:mt-8 text-[#4F4F4F]  lg:text-[18px] lg:font-[500] '>landinteriors@gmail.com
                        +91 98987 65656</p>

                    <ul className='flex justify-evenly lg:flex lg:justify-between gap-3 lg:mt-[120px] lg:ml-[30px] lg:text-[18px] lg:w-[650px]  '>
                        <li className='lg:flex lg:justify-around'>About</li>
                        <li>Projects</li>
                        <li>Studio</li>
                        <li>Blog</li>
                        <li>Contact</li>
                    </ul>
                </div>

            </div>

        </div>
    )
}

export default footer