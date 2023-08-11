import React from 'react'

const interDesignProduct = () => {
    return (
        <div className=' mt-[10%]  md:mt-[10%]font-popins'>

            {/* heading */}
            <div className='ml-[24px] sm:ml-[70px] md::ml-0 md:text-center text-[18px] sm:text-[28px]  font-popins md:text-[36px] font-[500]'>
                Our interior Design Products
            </div>

            {/* images  */}
            <div className=' mx-6 sm:mx-auto sm:w-[80%] grid grid-cols-2 mt-[5%] md:grid md:grid-cols-4 gap-1 md:mx-12  md:mt-[5%] '>

                <div className=' '>
                    <img className=' h-[125px]  w-full  sm:h-[163.5px] ' src="/images/intDesPro1.png" alt="" />
                    <img className='h-[125px] w-full mt-[5px] sm:h-[163.5px] md:mt-[5px]' src="/images/intDesPro2.png" alt="" />
                </div>

                <div className=''>
                    <img className=' h-[250px] w-full md:w-[222px] lg:w-full sm:h-[333px]' src="/images/intDesPro3.png" alt="" />
                </div>

                {/* images hidden above small screen */}
                <div className='hidden md:block '>
                    <img className='md:w-full md:h-[163.5px]' src="/images/intDesPro4.png" alt="" />
                    <img className='md:w-full md:h-[163.5px] md:mt-[5px]' src="/images/intDesPro5.png" alt="" />
                </div>

                <div className='hidden md:block'>
                    <img className='md:w-[222px] lg:w-full md:h-[333px]' src="/images/intDesPro6.png" alt="" />

                </div>

            </div>


            <p className=' text-[14px] sm:text-[16px] mt-[10px] mx-6 sm:m-14 md:mx-0   md:text-[18px] lg:text-[24px] font-[400] md:w-[50%] md:m-auto md:mt-[2%] md:text-center'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
                purus sit amet luctus venenatis, lectus magna fringilla urna,
                porttitor rhoncus dolor purus non enim
            </p>

            <button className='flex justify-center m-auto bg-[#4B2A63] md:p-2 p-1 w-[25%] sm:text-[18px] md:text-[20px] lg:text-[24px] font-[600] text-white mt-[3%]'>
                View All
            </button>
        </div>
    )
}

export default interDesignProduct