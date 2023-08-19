import React from 'react'

const happyCustomer = () => {
    return (
        <div className=' sm:mx-8 lg:mx-0 mt-[10%]  lg:grid lg:mt-[7%] font-popinsmedium'>

            <div class=' sm:mx-8  lg:text-center lg:ml-[200px] slg:mx-[163px]'>
                <p className=' text-[18px]  sm:text-[36px] font-[500] lg:m-8'>Our Happy Customers</p>
                <p className=' lg:w-[755px] text-[12px] mt-[10px] lg:m-auto sm:text-start sm:text-[16px]  lg:text-[18px] sm:font-[400] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet
                    luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim</p>
            </div>

            <div className='realtive  z-0 lg:grid lg:grid-cols-12 lg:text-center lg:mt-[3%]' >

                <div className='hidden lg:block  lg:col-span-2 lg:mr-[125px]  lg:m-auto'>
                    <img className=' w-full h-[420px] lg:w-[825px] lg:h-[446px]' src="/images/happyCustomer3.png" alt="" />
                </div>

                <div className='hidden lg:block lg:col-span-8 '>
                    <img className=' w-full h-[420px]   lg:h-[536px] ' src="/images/happyCutomer1.png" alt="" />


                </div>
                {/* mobile background image */}
                <div className='lg:hidden  sm:mt-[25px] slg:mx-[141px]'>
                    <img className='h-[200px] w-[100%]  sm:h-[378px]  mx-auto' src="/images/happyCustomerMobile.png" alt="" />


                </div>

                <div className='hidden lg:block  lg:col-span-2 lg:ml-[125px] lg:m-auto '>
                    <img className=' w-full h-[420px] lg:w-[821px] lg:h-[446px]' src="/images/happyCutomer2.png" alt="" />

                </div>


            </div>



            <div className=' absolute w-[70%] sm:left-[15%] slg:w-[680px] slg:ml-[40px] lg:ml-auto   sm:mt-[-262px]  lg:static  z-10   bg-white sm:h-[250px] lg:w-[738px]   lg:h-[250px] lg:mt-[-205px] lg:mx-[28%]  lg:m-auto lg:text-center'>

                <img className=' mt-[-20px] sm:mt-[-80px]  h-[40px] sm:h-[148px] lg:h-[148px] lg:mt-[-85px] m-auto ' src="/images/happyCustomer4.png" alt="" />

                <p className='hidden lg:block sm:text-[20px] sm:w-[541px] sm:font-[400] lg:w-[550px] lg:mt-[16px]  lg:m-auto font-popinsmedium '>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor</p>


                <p className=' lg:hidden p-5 sm:text-[20px]  w-[541px] mx-auto  text-[10px]  text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis,
                    lectus magna fringilla urna, porttitor</p>

                <p className='text-[14px] text-center mt-[-10px] lg:mt-[0px] font-[600] sm:text-[22px]'>-Jeo Stanlee</p>
            </div>

        </div>
    )
}

export default happyCustomer