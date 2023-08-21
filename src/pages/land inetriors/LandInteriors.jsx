import React from 'react'

import LandCard from '../../component/land_card'

const LandInteriors = () => {

  const image16 = '/images/image_16.png'

  const imageuurl = '/images/calander.svg'
  const imageurl = '/images/landCard2.png'
  const imageUrl = '/images/landCard3.png'
  
  const tailwindClasses = 'md:flex  md:items-center ';
  // md:flex  md:items-center
  const img1Width1 = ' sm:w-[40px] sm:h-[40px]  md:w-[68px] md:h-[73px] w-[30px] h-[30px] lg:w-[68px] lg:h-[73px]  '
  const img1Width2 = 'sm:w-[50px] sm:h-[45px]  md:w-[72px] md:h-[72px] w-[35px] h-[35px] lg:w-[72px] lg:h-[72px] '
  const img1Width3 = 'sm:w-[42px] sm:h-[42px]  md:w-[62px] md:h-[62px] w-[30px] h-[30px] lg:w-[62px] lg:h-[62px] '
  // const textt = 'w-[50px]' 

  return (
    <div className='  lg:mt-[10%] mt-[10%] sm:mt-[46px] font-popinsmedium'>

      <div className=" lg:flex lg:justify-center lg:text-[36px]  font-[500]  text-center text-[26px] sm:text-[30px]">
        <h2>  Why LAND Interiors </h2>
      </div>

      <div className='sm:mb-[160px] sm:mt-[80px] lg:mb-0 lg:mx-[130px] lg:ml-[210px]  flex justify-around  items-center mt-[5%] lg:p-3  lg:mt-[95px] font-popinsmedium ' >
        <LandCard classess={tailwindClasses} imgh={img1Width1} text="50 days or we pay you rent " imagesr={imageuurl} />
        <LandCard classess={tailwindClasses} imgh={img1Width2} text="1500+happy Customer " imagesr={imageurl} />
        <LandCard classess={tailwindClasses} imgh={img1Width3} text="300+ design experties " imagesr={imageUrl} />
      </div>




      <div className='relative sm:static   lg:grid lg:grid-cols-6 lg:mt-[10%] sm:mt-[94px]  mt-[25%] '>

        <div className='absolute lg:static z-10 sm:w-[65%] slg:w-[60%]  h-[410px] w-[50%] text-center bg-white slg:h-[780px] sm:h-[835px]   bg-opacity-75  lg:z-10 lg:col-span-2   font-popins lg:text-center lg:p-3  lg:mt-[9%]  lg:w-[898px] lg:h-[808px]   '>

          <div className=' lg:h-[808px]  h-[410px] ml-[20px]   font-popinsSemiBold sm:ml-[60px]  slg:ml-[60px] slg:mt-[-10%] md:ml-[80px] lg:mt-[0]  '>
           
            <p className=' md:ml-[]    slg:text-[36px] text-[22px] mt-[5px]  w-[90%]   lg:mx-auto text-[#241330]  sm:text-[36px] lg:text-[36px] font-[500] lg:w-[501px] lg:text-center  lg:mt-[6%]   sm:mt-[10%] slg:mt-[20%] text-start'>Make your dream interior in</p>
            <p className=' md:ml-[]    text-[26px] sm:text-[48px]  text-start w-[250px] lg:mx-auto  text-[#241330]  lg:text-[48px] font-[500] sm:w-[301px]  lg:mt-[3%] slg:mt-[4%] sm:mt-[2%]' >3 easy steps</p>
            <p className='md:ml-[]    slg:mt-[62px]  text-[16px] slg:text-[36px]  mt-[20px] text-start w-[250px]  lg:mx-auto text-[#4B2A63]   sm:text-[36px] font-[600] sm:w-[133px]  lg:mt-[6%] sm:mt-[48px]' >Explore</p>
            <p className='md:ml-[]  sm:w-[95%] lg:text-center     sm:text-[22px]  text-[12px] text-start w-[90%] lg:mx-auto lg:w-[454px]   font-[400]   lg:mt-[2%] sm:mt-[8px] sm:text-start  ' >Explore more than just modular design ideas with our experts.</p>
            <p className='md:ml-[]    slg:mt-[32px]  text-[16px] slg:text-[36px]  mt-[20px] text-start  w-[250px] lg:mx-auto text-[#4B2A63]   sm:text-[36px] font-[600] sm:w-[126px]  lg:mt-[6%] sm:mt-[48px] '>Design</p>
            <p className=' md:ml-[]  sm:w-[95%] lg:text-center   text-[12px]  sm:text-[22px]  text-start w-[90%]  lg:mx-auto lg:w-[397px] lg:text-[18px] font-[400]  lg:mt-[2%] sm:mt-[8] sm:text-start  ' >Complete the designs with painting, flooring and other decor solutions</p>
            <p className='md:ml-[]    slg:mt-[32px] text-[16px] slg:text-[36px]  mt-[20px] text-start w-[250px] lg:mx-auto text-[#4B2A63]   sm:text-[36px] font-[600] sm:w-[154px]  lg:mt-[6%] sm:mt-[48px]'>Move-in</p>
            <p className='md:ml-[]  sm:w-[95%]  text-[12px] sm:text-[22px]  text-start w-[90%]  lg:mx-auto lg:w-[493px]   font-[400]  lg:mt-[2%]  sm:text-start sm:mt-[8px] lg:text-center slg:w-[537px] '>Move in with ease, with our hassle-free civil work and installation services.</p>
          </div>

        </div>

        <div className='  sm:static z-0 lg:col-span-4 '>

          <img src={image16} alt="" className='slg:w-full    h-[410px] w-[100%] sm:w-[1386px] sm:h-[835px] slg:h-[780px] lg:w-[1386px] lg:h-[924px] ' />

        </div>

      </div>



    </div>
  )
}

export default LandInteriors