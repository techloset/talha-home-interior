import React from 'react'

const interDesignProduct = () => {
    return (
        <div className='md:mt-[10%]'>

            <div className='md:text-center font-popins md:text-[36px] font-[500]'>
                Our interior Design Products
            </div>

            <div className='md:grid md:grid-cols-4 md:gap-3 md:mx-12  md:mt-[5%] bg-red-500 '>
                   
                <div className=''>
                    <img className='md:w-full md:h-[163.5px] ' src="/images/intDesPro1.png" alt="" />
                    <img className='md:w-full md:h-[163.5px] md:mt-[5px]' src="/images/intDesPro2.png" alt="" />
                </div>

                <div className=''>
                    <img className='md:w-[222px] lg:w-full md:h-[333px]' src="/images/intDesPro3.png" alt="" />

                </div>

                <div className=''>
                    <img className='md:w-full md:h-[163.5px]' src="/images/intDesPro4.png" alt="" />
                    <img className='md:w-full md:h-[163.5px] md:mt-[5px]' src="/images/intDesPro5.png" alt="" />
                </div>

                <div className=''>
                    <img className='md:w-[222px] lg:w-full md:h-[333px]' src="/images/intDesPro6.png" alt="" />

                </div>
                
            </div>


            <p className='md:text-[18px] font-[400] md:w-[50%] md:m-auto md:mt-[2%] md:text-center'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
                purus sit amet luctus venenatis, lectus magna fringilla urna,
                porttitor rhoncus dolor purus non enim
            </p>

            <button className='md:flex md:justify-center md:m-auto bg-[#4B2A63] md:p-3 md:w-[25%] md:text-[20px] lg:text-[24px] md:text-[600] text-white md:mt-[3%]'>
                View All
            </button>
        </div>
    )
}

export default interDesignProduct