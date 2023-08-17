import React from 'react'
// import imge from '../../assets/Artboard.png'

const footer = () => {
    return (
        // bg-[#F8F8F8]
        <div className='lg:bg-blue-500  sm:bg-white mt-[5%]  md:mt-[10%] lg:h-[619px]'>

            <div className='md:grid md:grid-cols-12'>

                <div className=' w-[80%]  mx-auto   md:col-span-5 md:mx-10 '>
                    <img className='bg-yellow-500 lg:mx-[80px]  w-[25%]  m-auto md:mx-0  md:w-[100px] md:ml-[-25px] lg:w-[111px] lg:h-[111px] lg:mt-[63px] ' src='/images/Artboard.png' alt="" />

                    <p className='bg-green-500 lg:mx-[80px] hidden md:block  md:text-[16px] lg:text-[18px] text-[#3D3D3D] font-[400] md:mt-[20px] lg:w-[419px] lg:h-[281px] lg:mt-[30px]' >We introduce our selves as  LAND Interior and Architectural
                        Design Consultancy – one of the best interior designers in Chennai.
                        Chennai Luxury Interior and Architectural Design Consultancy has challenged
                        the  conventional way of interior designing and given nw dimensions to the
                        art of interior designing.</p>

                    {/* Small devices content  */}
                    <div className=' w-[35%]  mx-auto  md:hidden'>
                        <p className='mt-[10px] text-[12px] sm:text-[16px]'>landinteriors@gmail.com</p>
                        <p className='mt-[5px] text-[10px] sm:text-[14px] '>+91 98987 65656</p>
                    </div>

                    {/* social links */}
                    <div className='mt-2 sm:mt-4 lg:mx-[100px]  flex justify-around md:mt-7  '>
                        <img className='w-[29px] h-[29px] ' src="/images/facebook.png" alt="" />
                        <img className='w-[29px] h-[29px]' src="/images/inkedin.png" alt="" />
                        <img className='w-[29px] h-[29px]' src="/images/twitter.png" alt="" />
                        <img className='w-[29px] h-[29px]' src="/images/youtube.png" alt="" />
                        <img className='w-[29px] h-[29px]' src="/images/instagram.png" alt="" />
                    </div>
                </div>
                {/*2rd column above SMALL DEVICES */}

                <div className='hidden md:block  md:col-span-2 bg-purple-500  lg:mt-[124px] '>
                    <p className=' md:text-[16px]  font-[600] md:mt-14'> WHAT WE DO</p>
                    <ul className='md:mt-8 md:text-[18px] font-[500] lg:w-[256px] lg:h-[183px] lg:mt-[33px] text-[#4F4F4F] bg-green-500 '>
                        <li>Interior Design</li>
                        <li>Kitchen</li>
                        <li>Ceiling</li>
                        <li>Bedroom</li>
                        <li>Smart Home</li>
                    </ul>
                </div>
                {/* 3rd column above SMALL DEVICES */}
                <div className='hidden md:block  md:col-span-5 md:mx-14 bg-orange-500 lg:ml-[155px] lg:mt-[119px]  '>

                    <p className='md:text-[16px] md:font-[600] md:mt-14'>Get in touch</p>

                    <p className=' md:w-[200px]  md:mt-8 text-[#4F4F4F]  md:text-[18px] md:font-[500] '>landinteriors@gmail.com
                        +91 98987 65656</p>

                    <ul className='flex justify-evenly gap-3 md:mt-[120px] md:text-[18px]'>
                        <li>About</li>
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