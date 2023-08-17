import React from 'react'

import LandCard from '../../component/land_card'

const LandInteriors = () => {

  const image16 = '/images/image_16.png'
  const imageuurl = '/images/landCard1.png'
  const imageurl = '/images/landCard2.png'
  const imageUrl = '/images/landCard3.png'
  const tailwindClasses = 'md:flex  md:items-center ';
  // md:flex  md:items-center
  const img1Width1 = 'sm:w-[40px] sm:h-[40px]  md:w-[68px] md:h-[73px] w-[30px] h-[30px] lg:w-[68px] lg:h-[73px]  '
  const img1Width2 = 'sm:w-[50px] sm:h-[45px]  md:w-[72px] md:h-[72px] w-[35px] h-[35px] lg:w-[72px] lg:h-[72px] '
  const img1Width3 = 'sm:w-[42px] sm:h-[42px]  md:w-[62px] md:h-[62px] w-[30px] h-[30px] lg:w-[62px] lg:h-[62px] '
  // const textt = 'w-[50px]' 

  return (
    <div className='  lg:mt-[10%] mt-[10%] font-popins'>

      <div className=" lg:flex lg:justify-center lg:text-[36px]  font-[500]  text-center text-[26px] sm:text-[30px]">
        <h2>  Why LAND Interiors </h2>
      </div>

      <div className='flex justify-around items-center mt-[5%] lg:p-3  lg:mt-[95px]' >
        <LandCard classess={tailwindClasses} imgh={img1Width1} text="50 days or we pay you rent " imagesr={imageuurl} />
        <LandCard classess={tailwindClasses} imgh={img1Width2} text="1500+happy Customer " imagesr={imageurl} />
        <LandCard classess={tailwindClasses} imgh={img1Width3} text="300+ design experties " imagesr={imageUrl} />
      </div>

      <div className='relative sm:static   lg:grid lg:grid-cols-6 lg:mt-[10%]   mt-[25%]'>



        <div className='absolute md:static z-10 h-[410px] w-[50%] text-center bg-white   bg-opacity-75  lg:z-10 lg:col-span-2   font-popins lg:text-center lg:p-3  lg:mt-[9%]  lg:w-[898px] lg:h-[808px]   '>



          {/* <p className='bg-green-500 text-[13px] mt-[8%] sm:text-[20px] sm:mt-[5%]   font-[500]  '>Make your dream interior in</p>
          <p className='bg-yellow-500 text-[16px] mt-[6%] sm:text-[26px] sm:mt-[3%]  w-[80%] mx-auto   font-[700]  text-[#241330] ' >3 easy steps</p>
          <p className='bg-green-500 text-[14px] mt-[10%] sm:text-[20px] sm:mt-[3%]  text-[#4B2A63] ' >Explore</p>
          <p className='bg-yellow-500 text-[12px] mt-[3%] sm:text-[13px] sm:mt-[3%]  w-[80%] mx-auto font-[400] ' >Explore more than just modular design ideas with our experts.</p>
          <p className='bg-green-500 text-[14px] mt-[8%] sm:text-[20px] sm:mt-[3%] font-[600]text-[#4B2A63] '>Design</p>
          <p className='bg-yellow-500 text-[12px] mt-[3%] sm:text-[13px] sm:mt-[3%]  w-[80%] mx-auto  md:text-[14px] font-[400]  ' >Complete the designs with painting, flooring and other decor solutions</p>
          <p className='bg-green-500 text-[14px] mt-[8%] sm:text-[20px] sm:mt-[3%] font-[600]  text-[#4B2A63]  md:w-[300px] '>Move-in</p>
          <p className='bg-yellow-500 text-[12px] mt-[3%] sm:text-[13px] sm:mt-[3%]  w-[80%] mx-auto font-[400] md:mt-[1%]  '>Move in with ease, with our hassle-free civil work and installation services.</p> */}

          <div className='text-center '>
            <p className=' mx-auto text-[#241330] lg:text-[36px] lg:font-[500] lg:w-[501px] text-center  lg:mt-[6%]'>Make your dream interior in</p>
            <p className=' mx-auto  text-[#241330]  lg:text-[48px] lg:font-[500] lg:w-[301px]  lg:mt-[3%]' >3 easy steps</p>
            <p className=' mx-auto text-[#4B2A63]   lg:text-[36px] lg:font-[600] lg:w-[133px]  lg:mt-[6%]' >Explore</p>
            <p className=' mx-auto lg:w-[348px]  lg:text-[18px] lg:font-[400]   lg:mt-[2%]' >Explore more than just modular design ideas with our experts.</p>
            <p className=' mx-auto text-[#4B2A63]   lg:text-[36px] lg:font-[600] lg:w-[126px]  lg:mt-[6%]'>Design</p>
            <p className='  mx-auto lg:w-[397px]  lg:text-[18px] lg:font-[400]  lg:mt-[2%]' >Complete the designs with painting, flooring and other decor solutions</p>
            <p className=' mx-auto text-[#4B2A63]   lg:text-[36px] lg:font-[600] lg:w-[154px]  lg:mt-[6%]'>Move-in</p>
            <p className='  mx-auto lg:w-[493px]  lg:text-[18px] lg:font-[400]  lg:mt-[2%]'>Move in with ease, with our hassle-free civil work and installation services.</p>
          </div>

        </div>


        <div className='  sm:static z-0 lg:col-span-4 '>

          <img src={image16} alt="" className='   h-[410px] w-[100%] lg:w-[1386px] lg:h-[924px] ' />

        </div>

      </div>



    </div>
  )
}

export default LandInteriors