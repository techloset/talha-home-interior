import React from 'react'

import LandCard from '../../component/land_card'

const LandInteriors = () => {

  const image16 = '/images/image_16.png'
  const imageuurl = '/images/landCard1.png'
  const imageurl = '/images/landCard2.png'
  const imageUrl = '/images/landCard3.png'
  const tailwindClasses = ' flex  items-center ';
  const img1Width1 = 'w-[68px] h-[73px]'
  const img1Width2 = 'w-[72px] h-[72px]'
  const img1Width3 = 'w-[62px] h-[62px]'
  // const textt = 'w-[50px]' 

  return (
    <div className='md:mt-[10%]'>

      <div className="font-popins flex justify-center text-[36px] font-[500]">
        <h2>  Why land Interiors </h2>
      </div>

      <div className='flex justify-around text-justify md:p-3 md:mt-[8%]'>
        <LandCard classess={tailwindClasses} imgh={img1Width1} text="50 days or we pay you rent " imagesr={imageuurl} />
        <LandCard classess={tailwindClasses} imgh={img1Width2} text="1500+happy Customer " imagesr={imageurl} />
        <LandCard classess={tailwindClasses} imgh={img1Width3} text="300+ design experties " imagesr={imageUrl} />
      </div>

      <div className=' grid md:grid-cols-6 md:mt-[10%]'>

        <div className='bg-white bg-opacity-75  md:z-10 md:col-span-2 h-[800px] font-popins md:text-center md:w-[140%] md:p-3 md:mt-[25%] '>
          <p className='md:text-[28px] font-[500] md:mt-[5%]'>Make your dream interior in</p>
          <p className='md:text-[38px] font-[500] md:mt-[4%] text-[#241330]' >3 easy steps</p>
          <p className='md:text-[30px] font-[600] md:mt-[20%] text-[#4B2A63]' >Explore</p>
          <p className='md:text-[18px] font-[400] md:mt-[1%]' >Explore more than just modular design ideas with our experts.</p>
          <p className='md:text-[30px] font-[600] md:mt-[13%] text-[#4B2A63]'>Design</p>
          <p className='md:text-[18px] font-[400] md:mt-[1%]'>Complete the designs with painting, flooring and other decor solutions</p>
          <p className='md:text-[30px] font-[600] md:mt-[15%] text-[#4B2A63]'>Move-in</p>
          <p className='md:text-[18px] font-[400] md:mt-[1%]'>Move in with ease, with our hassle-free civil work and installation services.</p>
        </div>
        <div className=' md:col-span-4 '> <img src={image16} alt="" style={{height:'924px' , objectfit: 'contain'}}/> </div>
        
        {/* <div className='grid grid-cols-2 object-cover'> <img src={image16} alt="" /></div> */}

        {/* <div className=' bg-contain bg-no-repeat h-[900px] bg-blue-500' style={{backgroundImage:`url(${image16})`}}></div> */}

      </div>

    </div>
  )
}

export default LandInteriors