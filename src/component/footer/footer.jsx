import React from 'react'
// import imge from '../../assets/Artboard.png'

const footer = () => {
    return (
        <div className=''>

            <div className='md:grid md:grid-cols-12'>

                <div className='md:col-span-5 md:mx-10'>
                    <img className='md:w-[100px] md:ml-[-25px]' src='/images/Artboard.png' alt="" />

                    <p className='md:text-[16px] lg:text-[18px] text-[#3D3D3D] font-[400] md:mt-[20px]' >We introduce our selves as  LAND Interior and Architectural
                        Design Consultancy – one of the best interior designers in Chennai.
                        Chennai Luxury Interior and Architectural Design Consultancy has challenged
                        the  conventional way of interior designing and given nw dimensions to the
                        art of interior designing.</p>

                    <div className='md:flex md:justify-around md:mt-7'>
                        <img className='w-[29px] h-[29px] ' src="/images/facebook.png" alt="" />
                        <img className='w-[29px] h-[29px]' src="/images/inkedin.png" alt="" />
                        <img className='w-[29px] h-[29px]' src="/images/twitter.png" alt="" />
                        <img className='w-[29px] h-[29px]' src="/images/youtube.png" alt="" />
                        <img className='w-[29px] h-[29px]' src="/images/instagram.png" alt="" />
                    </div>
                </div>


                <div className=' md:col-span-2 '>
                    <p className=' md:text-[16px]  font-[600] md:mt-14'> WHAT WE DO</p>
                    <ul className='md:mt-8 md:text-[18px] font-[500]  text-[#4F4F4F]'>
                        <li>Interior Design</li>
                        <li>Kitchen</li>
                        <li>Ceiling</li>
                        <li>Bedroom</li>
                        <li>Smart Home</li>
                    </ul>
                </div>

                <div className=' md:col-span-5 md:mx-14 '>

                    <p className='md:text-[16px] md:font-[600] md:mt-14'>Get in touch</p>

                    <p className=' md:w-[200px]  md:mt-8 text-[#4F4F4F]  md:text-[18px] md:font-[500] '>landinteriors@gmail.com
                        +91 98987 65656</p>

                    <ul className='flex justify-evenly gap-3 md:mt-[120px]'>
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