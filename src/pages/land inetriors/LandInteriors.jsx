import React from 'react'

import LandCard from '../../component/land_card'

const LandInteriors = () => {

  const image16 = '/images/image_16.png'
  const imageuurl = '/images/landCard1.png'
  const imageurl = '/images/landCard2.png'
  const imageUrl = '/images/landCard3.png'
  const tailwindClasses = 'md:flex  md:items-center ';
  // md:flex  md:items-center
  const img1Width1 = 'md:w-[68px] md:h-[73px] w-[30px] h-[30px] '
  const img1Width2 = 'md:w-[72px] md:h-[72px] w-[35px] h-[35px] '
  const img1Width3 = 'md:w-[62px] md:h-[62px] w-[30px] h-[30px] '
  // const textt = 'w-[50px]' 

  return (
    <div className='  md:mt-[10%] mt-[10%]'>

      <div className="font-popins md:flex md:justify-center md:text-[36px] font-[500] text-center text-[26px] ">
        <h2>  Why Land Interiors </h2>
      </div>

      <div className=' flex justify-around items-center mt-[5%] md:p-3 md:mt-8 ' >
        <LandCard classess={tailwindClasses} imgh={img1Width1} text="50 days or we pay you rent " imagesr={imageuurl} />
        <LandCard classess={tailwindClasses} imgh={img1Width2} text="1500+happy Customer " imagesr={imageurl} />
        <LandCard classess={tailwindClasses} imgh={img1Width3} text="300+ design experties " imagesr={imageUrl} />
      </div>

      <div className='relative sm:static   md:grid md:grid-cols-6 md:mt-[10%]   mt-[25%]'>



        <div className='absolute md:static z-10 h-[410px] w-[60%] text-center   bg-white bg-opacity-75  md:z-10 md:col-span-2 md:h-[700px] lg:h-[85%] font-popins md:text-center md:w-[140%] md:p-3 md:mt-[25%] '>



          <p className='text-[13px] mt-[8%]   md:text-[24px] lg:text-[30px] font-[700] md:mt-[5%]  md:w-[300px] md:-ml-[-45px] lg:w-[80%] lg:ml-[50px]'>Make your dream interior in</p>
          <p className='text-[16px] mt-[6%] w-[80%] mx-auto  md:text-[34px] lg:text-[44px] font-[00] md:mt-[4%]  text-[#241330]   md:w-[300px] md:-ml-[-45px] lg:w-[400px] lg:ml-[50px]' >3 easy steps</p>
          <p className='text-[14px] mt-[10%]   md:text-[26px] lg:text-[36px] font-[600] md:mt-[20%]  lg:mt-[8%] text-[#4B2A63]  md:w-[300px] md:-ml-[-45px] lg:w-[400px] lg:ml-[50px]' >Explore</p>
          <p className='text-[12px] mt-[3%] w-[80%] mx-auto  md:text-[14px] lg:text-[18px] font-[400] md:mt-[1%]  md:w-[300px] md:-ml-[-45px]  lg:w-[400px] lg:ml-[50px]' >Explore more than just modular design ideas with our experts.</p>
          <p className='text-[14px] mt-[8%]   md:text-[26px] lg:text-[36px] font-[600] md:mt-[20%] lg:mt-[8%]  text-[#4B2A63]  md:w-[300px] md:-ml-[-45px] lg:w-[400px] lg:ml-[50px]'>Design</p>
          <p className='text-[12px] mt-[3%] w-[80%] mx-auto  md:text-[14px] lg:text-[18px] font-[400] md:mt-[1%]  md:w-[300px] md:-ml-[-45px]  lg:w-[400px] lg:ml-[50px]' >Complete the designs with painting, flooring and other decor solutions</p>
          <p className='text-[14px] mt-[8%]   md:text-[26px] lg:text-[36px] font-[600] md:mt-[20%] lg:mt-[8%] text-[#4B2A63]  md:w-[300px] md:-ml-[-45px] lg:w-[400px] lg:ml-[50px]'>Move-in</p>
          <p className='text-[12px] mt-[3%] w-[80%] mx-auto  md:text-[14px] lg:text-[18px] font-[400] md:mt-[1%]   md:w-[300px] md:-ml-[-45px]  lg:w-[400px] lg:ml-[50px]'>Move in with ease, with our hassle-free civil work and installation services.</p>


        </div>


        <div className='  sm:static z-0 md:col-span-4 '>

          <img src={image16} alt="" className=' md:h-[900px]  h-[410px] w-[100%] ' />

        </div>

      </div>



    </div>
  )
}

export default LandInteriors