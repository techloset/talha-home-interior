import React from 'react'

const interDesignProduct = () => {
    return (
        <div className='  font-popinsmedium sm:mx-[20px]   '>
            <div

                className=" lg:mt-[113px]  sm:mx-8 flex flex-col gap-10 vl:max-w-[1920px] xl:mx-auto font-popinsSemiBold sm:mt-[12%]"
            >
                <h2 className="sm:mx-16 lg:mx-auto px-6 sm:px-10 md:px-16 ms:px-[148px] text-purpD font-medium text-[20px] sm:text-[24px] md:text-[30px] lg:text-[36px] xl:text-center pt-6 xl:pb-[9px] mb-[-16px] xl:mb-0">
                    Our Interior Design Products
                </h2>
                <div className=" sm:mt-[3%] lg:mt-auto sm:mx-auto  sm:w-[104%] slg:w-[80%]  grid xl:grid-cols-10 max-md:grid-cols-5 grid-rows-2 gap-2 xl:gap-4 max-h-[70vh] px-6 sm:px-10 md:px-16 ms:px-[148px] xl:px-0 w-full xl:w-[80.333%] mx-auto [&>img]:w-[400px]  [&>img]:h-full ">
                    
                    <img src='/images/intDesPro1.png' alt="product1" className="col-span-2  " />
                    <img
                        src='/images/intDesPro3.png'
                        alt="product3"
                        className="xl:row-start-1 xl:row-end-3 col-start-3 col-span-3 row-span-3 "
                    />
                    <img src='/images/intDesPro2.png' alt="product2" className="col-span-2" />

                    <img
                        src='/images/intDesPro4.png'
                        alt="product4"
                        className="hidden xl:inline xl:col-span-2"
                    />
                    <img
                        src='/images/intDesPro5.png'
                        alt="product5"
                        className="hidden xl:inline xl:col-span-2"
                    />
                    <img
                        src='/images/intDesPro6.png'
                        alt="product6"
                        className="hidden xl:inline xl:row-start-1 xl:row-end-3 xl:col-start-8 xl:col-span-3"
                    />
                </div>

                {/* <button className="text-[16px] md:text-[20px] lg:text-[24px] font-semibold py-[20px] px-[80px] bg-purp text-white block mt-2 vl:px-[86px] vl:py-5 mx-auto">
                    View All
                </button> */}
            </div>


            <p className= 'hidden slg:block  slg:ml-auto slg:w-[785px] sm:ml-[40px] sm:w-[730px] text-[14px] sm:text-[22px] sm:mt-[4%] mt-[10px] mx-6 slg:mx-auto  lg:text-[27px] lg:mt-[30px] lg:w-[911px]  lg:h-[181px] font-[400] lg:m-auto  lg:text-center'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim
            </p>
            <p className=' slg:hidden slg:ml-auto slg:w-[785px] sm:ml-[70px] sm:w-[670px] text-[14px] sm:text-[22px] sm:mt-[4%] mt-[10px] mx-6 slg:mx-auto  lg:text-[27px] lg:mt-[30px] lg:w-[911px]  lg:h-[181px] font-[400] lg:m-auto  lg:text-center'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna  urna, porttitor rhoncus dolor purus non enim
            </p>

            <button className='flex justify-center m-auto bg-[#4B2A63]  p-1 w-[25%] sm:mt-[60px] sm:text-[24px] font-[600] sm:w-[270px] sm:h-[80px] sm:p-6 text-white mt-[3%] lg:mt-[49px]'>
                View all
            </button>


        </div>
    )
}

export default interDesignProduct