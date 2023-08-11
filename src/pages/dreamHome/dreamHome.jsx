import React from 'react'

const dreamHome = () => {
    return (
        <div className='mx-8   mt-[20%] md:mx-14 md:h-[197px] font-popins md:mt-[8%]'>

            <p className=' text-[18px] md:text-[28px] lg:text-[36px] font-[400]'>Let talk about your Dream home</p>

            <form action="" className='   mt-[3%]'>

                <input className='flex sm:inline w-[80%] mx-auto border-b-2 border-grey md:my-[35px] md:w-[39%] p-1 outline-none' type="text" placeholder='Name' />
                <input className='flex  sm:inline mt-[20px] w-[80%] mx-auto  border-b-2 border-grey md:ml-[20px] md:w-[39%] p-1 outline-none' type="text" placeholder='Phone/Email' />
                <button className='flex items-center p-1 mt-[15px]  justify-center mx-auto w-[40%] sm:w-[20%]  bg-[#4B2A63] md:ml-[20px] md:w-[14%] md:p-2 sm:text-[18px] md:text-[20px] lg:text-[24px] md:text-[600] text-white cursor-pointer'>
                    Send
                </button>


            </form>
            
        </div>
    )
}

export default dreamHome