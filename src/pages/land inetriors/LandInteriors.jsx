import React from 'react'

import LandCard from '../../component/land_card'

const LandInteriors = () => {

  const image16 = '/images/image_16.png'

  const imageuurl = '/images/calander.svg'
  const imageurl = '/images/landCard2.png'
  const imageUrl = '/images/landCard3.png'
  
  const tailwindClasses = 'md:flex  md:items-center ';
  // md:flex  md:items-center
  const img1Width1 = 'sm:w-[40px] sm:h-[40px]  md:w-[68px] md:h-[73px] w-[30px] h-[30px] lg:w-[68px] lg:h-[73px]  '
  const img1Width2 = 'sm:w-[50px] sm:h-[45px]  md:w-[72px] md:h-[72px] w-[35px] h-[35px] lg:w-[72px] lg:h-[72px] '
  const img1Width3 = 'sm:w-[42px] sm:h-[42px]  md:w-[62px] md:h-[62px] w-[30px] h-[30px] lg:w-[62px] lg:h-[62px] '
  // const textt = 'w-[50px]' 

  return (
    <div className='  lg:mt-[10%] mt-[10%] font-popinsmedium'>

      <div className=" lg:flex lg:justify-center lg:text-[36px]  font-[500]  text-center text-[26px] sm:text-[30px]">
        <h2>  Why LAND Interiors </h2>
      </div>

      <div className='  flex justify-around items-center mt-[5%] lg:p-3  lg:mt-[95px] font-popinsmedium ' >
        <LandCard classess={tailwindClasses} imgh={img1Width1} text="50 days or we pay you rent " imagesr={imageuurl} />
        <LandCard classess={tailwindClasses} imgh={img1Width2} text="1500+happy Customer " imagesr={imageurl} />
        <LandCard classess={tailwindClasses} imgh={img1Width3} text="300+ design experties " imagesr={imageUrl} />
      </div>

      <div className='relative sm:static   lg:grid lg:grid-cols-6 lg:mt-[10%]   mt-[25%]'>



        <div className='absolute lg:static z-10 sm:w-[60%] h-[410px] sm:h-[924px]  w-[50%] text-center bg-white   bg-opacity-75  lg:z-10 lg:col-span-2   font-popins lg:text-center lg:p-3  lg:mt-[9%]  lg:w-[898px] lg:h-[808px]   '>



          {/* <p className='bg-green-500 text-[13px] mt-[8%] sm:text-[20px] sm:mt-[5%]   font-[500]  '>Make your dream interior in</p>
          <p className='bg-yellow-500 text-[16px] mt-[6%] sm:text-[26px] sm:mt-[3%]  w-[80%] mx-auto   font-[700]  text-[#241330] ' >3 easy steps</p>
          <p className='bg-green-500 text-[14px] mt-[10%] sm:text-[20px] sm:mt-[3%]  text-[#4B2A63] ' >Explore</p>
          <p className='bg-yellow-500 text-[12px] mt-[3%] sm:text-[13px] sm:mt-[3%]  w-[80%] mx-auto font-[400] ' >Explore more than just modular design ideas with our experts.</p>
          <p className='bg-green-500 text-[14px] mt-[8%] sm:text-[20px] sm:mt-[3%] font-[600]text-[#4B2A63] '>Design</p>
          <p className='bg-yellow-500 text-[12px] mt-[3%] sm:text-[13px] sm:mt-[3%]  w-[80%] mx-auto  md:text-[14px] font-[400]  ' >Complete the designs with painting, flooring and other decor solutions</p>
          <p className='bg-green-500 text-[14px] mt-[8%] sm:text-[20px] sm:mt-[3%] font-[600]  text-[#4B2A63]  md:w-[300px] '>Move-in</p>
          <p className='bg-yellow-500 text-[12px] mt-[3%] sm:text-[13px] sm:mt-[3%]  w-[80%] mx-auto font-[400] md:mt-[1%]  '>Move in with ease, with our hassle-free civil work and installation services.</p> */}

          <div className='  h-[410px] ml-[20px] lg:text-center font-popinsSemiBold  sm:ml-[60px] slg:mt-[-10%] md:ml-[80px] lg:mt-[0]  '>
           
            <p className=' md:ml-[]    slg:mt-[23%] slg:text-[36px] text-[22px] mt-[5px]  w-[90%] sm:w-auto  lg:mx-auto text-[#241330] sm:text-[36px] lg:text-[36px] font-[500] lg:w-[501px] lg:text-center  lg:mt-[6%]   sm:mt-[20%] text-start'>Make your dream interior in</p>
            <p className=' md:ml-[]    text-[26px] slg:text-[48px]  text-start w-[250px] lg:mx-auto  text-[#241330]  sm:text-[36px] lg:text-[48px] font-[500] sm:w-[301px]  lg:mt-[3%] sm:mt-[6%]' >3 easy steps</p>
            <p className='md:ml-[]    slg:mt-[62px]  text-[16px] slg:text-[36px]  mt-[20px] text-start w-[250px]  lg:mx-auto text-[#4B2A63]   sm:text-[36px] font-[600] sm:w-[133px]  lg:mt-[6%] sm:mt-[14%]' >Explore</p>
            <p className='md:ml-[]      slg:text-[22px]  text-[12px] text-start w-[90%] sm:w-auto lg:mx-auto lg:w-[348px]  sm:text-[18px] font-[400]   lg:mt-[2%] sm:mt-[5%] sm:text-start' >Explore more than just modular design ideas with our experts.</p>
            <p className='md:ml-[]    slg:mt-[32px]  text-[16px] slg:text-[36px]  mt-[20px] text-start  w-[250px] lg:mx-auto text-[#4B2A63]   sm:text-[36px] font-[600] sm:w-[126px]  lg:mt-[6%] sm:mt-[14%]'>Design</p>
            <p className=' md:ml-[]    text-[12px]  slg:text-[22px]  text-start w-[90%] sm:w-auto lg:mx-auto lg:w-[397px]  sm:text-[18px] font-[400]  lg:mt-[2%] sm:mt-[5%] sm:text-start' >Complete the designs with painting, flooring and other decor solutions</p>
            <p className='md:ml-[]    slg:mt-[32px] text-[16px] slg:text-[36px]  mt-[20px] text-start w-[250px] lg:mx-auto text-[#4B2A63]   sm:text-[36px] font-[600] sm:w-[154px]  lg:mt-[6%] sm:mt-[14%]'>Move-in</p>
            <p className='md:ml-[]    text-[12px] slg:text-[22px]  text-start w-[90%] sm:w-auto lg:mx-auto lg:w-[493px]  sm:text-[18px] font-[400]  lg:mt-[2%]  sm:text-start sm:mt-[3%] lg:text-center'>Move in with ease, with our hassle-free civil work and installation services.</p>
          </div>

        </div>


        <div className='  sm:static z-0 lg:col-span-4 '>

          <img src={image16} alt="" className='slg:w-full    h-[410px] w-[100%] sm:w-[1386px] sm:h-[924px] ' />

        </div>

      </div>



    </div>
  )
}

export default LandInteriors