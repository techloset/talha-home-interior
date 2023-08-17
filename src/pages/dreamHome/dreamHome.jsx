import React from 'react'

const dreamHome = () => {
    return (
        <div className='mx-8   mt-[20%]  lg:h-[197px] font-popins lg:mt-[8%] lg:mx-60 '>

            <p className=' text-[18px]  lg:text-[36px] font-[400]'>Let talk about your Dream home</p>

            <form action="" className='   mt-[3%] '>

                <input className='flex sm:inline w-[80%] mx-auto border-b-2 border-grey p-1 lg:w-[456px]  outline-none lg:h-[80px]' type="text" placeholder='Name' />
                <input className='flex  sm:inline mt-[20px] w-[80%] mx-auto  border-b-2 border-grey  p-1 lg:w-[456px] outline-none lg:ml-[151px] lg:h-[80px]' type="text" placeholder='Phone/Email' />
                {/* <button className='flex items-center p-1 mt-[15px]  justify-center  w-[40%] sm:w-[20%]  bg-[#4B2A63] mx-auto md:ml-[20px] md:w-[14%] md:p-2 sm:text-[18px] md:text-[20px] lg:p-[0]  md:text-[600] lg:text-[24px] lg:w-[270px] lg:h-[80px] text-white cursor-pointer'>
                    Send
                </button> */}

                <button className='bg-[#4B2A63] lg:w-[270px] lg:h-[80px] lg:text-[24px] lg:font-[600]   text-white cursor-pointer lg:ml-[42px] '>
                    Send
                </button>


            </form>
            
        </div>
    )
}

export default dreamHome