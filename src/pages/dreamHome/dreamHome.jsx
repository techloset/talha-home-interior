import React from 'react'

const dreamHome = () => {
    return (
        <div className='md:mx-14 h-[197px] font-popins mt-[8%]'>

            <p className='text-[28px] lg:text-[36px] font-[400]'>Let talk about your Dream home</p>

            <form action="" className='mt-[3%]'>

                <input className=' border-b-2 border-grey md:my-[35px] w-[39%] p-1 outline-none' type="text" placeholder='Name' />
                <input className='border-b-2 border-grey md:ml-[20px] w-[39%] p-1 outline-none' type="text" placeholder='Phone/Email' />
                <button className=' bg-[#4B2A63] md:ml-[20px] md:w-[14%] p-2 md:text-[15px] lg:text-[24px] md:text-[600] text-white cursor-pointer'>
                    Send
                </button>

            </form>
        </div>
    )
}

export default dreamHome