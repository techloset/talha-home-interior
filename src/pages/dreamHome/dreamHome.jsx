import React from 'react'

const dreamHome = () => {
  return (
    <div className='lg:w-[1513px] lg:mx-[203px] slg:mt-[124px] lg:mt-[99px]  '>
      
      <div className=" font-popinsmedium px-12   flex flex-col slg:gap-[89px]  ">
        <h2 className=" text-[20px]  sm:text-[36px]  font-[400] slg:ml-[141px] lg:ml-0">
          Let talk about your Dream home
        </h2>

        <div className="  ">

          <div className=" flex flex-col xl:flex-row  justify-between  ">

            <input
              type="text"
              placeholder="Name"
              className="slg:w-[787px] slg:mx-[147px]  lg:mx-0 lg:w-[456px] border-b-[3px] text-[24px] focus-visible:outline-none "
            />
            {/* sm:mt-[89px] lg:mt-0 slg:w-[786px] lg:w-[588px] */}

            <input
              type="text"
              placeholder="Email/Phone"
              className="slg:mt-[90px] lg:mt-0 slg:w-[787px] slg:mx-[147px]  lg:mx-0  lg:ml-[151px] lg:w-[588px]   border-b-[3px] text-[24px]   focus-visible:outline-none"
            />
            <button className=" sm:mt-[64px] lg:mt-0 slg:ml-[365px] lg:ml-[42px] text-[16px] md:text-[20px] xl:text-[24px] font-semibold py-[22px] px-[104px] bg-[#4B2A63] text-white block mx-auto xl:mx-0 ">
              Send
            </button>
          </div>

        </div>
      </div>

    </div>
  )
}

export default dreamHome