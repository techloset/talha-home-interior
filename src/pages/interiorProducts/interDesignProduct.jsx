import React from 'react'

const interDesignProduct = () => {
    return (
        <div className=' mt-[10%]  lg:mt-[10%] font-popins '>

            {/* heading */}
            <div className='ml-[24px] sm:ml-[70px]  lg:text-center text-[18px] sm:text-[28px]  font-popins lg:text-[36px] font-[500]  '>
                Our interior Design Products
            </div>

            {/* images  */}
            <div className=' mx-6  sm:mx-auto sm:w-[80%]  grid grid-cols-2 mt-[5%] lg:grid lg:grid-cols-4 gap-1   lg:mt-[5%] '>

                <div className=' lg:ml-[60px] '>
                    <img className=' h-[125px]  w-full  sm:h-[163.5px] lg:w-[313px] lg:h-[330px]' src="/images/intDesPro1.png" alt="" />
                    <img className='h-[125px] w-full mt-[5px] sm:h-[163.5px] lg:mt-[5px] lg:w-[318px] lg:h-[330px] ' src="/images/intDesPro2.png" alt="" />
                </div>

                <div className='lg:mx-[5px]'>
                    <img className=' h-[250px] w-full md:w-[222px] sm:h-[333px] lg:w-[452px] lg:h-[676px] ' src="/images/intDesPro3.png" alt="" />
                </div>

                {/* images hidden above small screen */}
                <div className='hidden lg:block '>
                    <img className='lg:w-[313px] lg:h-[330px]' src="/images/intDesPro4.png" alt="" />
                    <img className=' lg:mt-[5px] lg:w-[313px] lg:h-[330px]' src="/images/intDesPro5.png" alt="" />
                </div>

                <div className='hidden lg:block lg:ml-[-60px]'>
                    <img className=' lg:w-[452px] lg:h-[676px]' src="/images/intDesPro6.png" alt="" />

                </div>

            </div>


            <p className=' text-[14px] sm:text-[16px] mt-[10px] mx-6 sm:m-14    lg:text-[18px] lg:w-[611px] lg:h-[81px] font-[400] lg:m-auto lg:mt-[2%] lg:text-center'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
                purus sit amet luctus venenatis, lectus magna fringilla urna,
                porttitor rhoncus dolor purus non enim
            </p>

            <button className='flex justify-center m-auto bg-[#4B2A63]  p-1 w-[25%] sm:text-[18px]  lg:text-[24px] font-[600] lg:w-[270px] lg:h-[80px lg:p-6 text-white mt-[3%]'>
                View All
            </button>
        </div>
    )
}

export default interDesignProduct