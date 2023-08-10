import React from 'react'

const happyCustomer = () => {
    return (
        <div className=' mt-[10%]  md:grid md:mt-[7%] font-popins'>

            <div class=' mx-5  md:text-center '>
                <p className=' text-[18px]  md:text-[36px] font-[500] md:m-8'>Our Happy Customers</p>
                <p className=' text-[12px] mt-[10px]  md:w-[60%] md:m-auto md:text-[15px] lg:text-[18px] md:font-[400]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet
                    luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim</p>
            </div>

            <div className='realtive  z-0 md:grid md:grid-cols-12 md:text-center md:mt-[3%]' >

                <div className='bg-blue-500 md:col-span-2'>

                </div>

                <div className='hidden sm:block md:col-span-8 '>
                    <img className='hidden sm:block  ' src="/images/happyCutomer1.png" alt="" />


                </div>
                <div className='md:hidden  '>
                    <img className='h-full w-[90%] mx-auto' src="/images/happyCustomerMobile.png" alt="" />


                </div>

                <div className='md:col-span-2 bg-yellow-500'></div>

            </div>



            <div className=' absolute w-[75%] left-14 sm:static  z-10 mt-[-100px]   bg-white md:w-[50%]  md:mt-[-100px] md:m-auto md:text-center'>

                <img className=' mt-[-20px]  h-[40px] md:h-[78px] md:mt-[-35px] m-auto ' src="/images/happyCustomer4.png" alt="" />

                <p className='hidden sm:block   md:text-[14px] lg:text-[20px] lg:font-[400] md:w-[80%] md:m-auto '>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Culpa ipsam iusto maxime molestias? Sint nam illo molestiae deserunt
                    necessitatibus esse consectetur porro
                    recusandae numquam tenetur, corrupti asperiores aut! Ipsum, libero.</p>


                <p className=' md:hidden p-5  w-[80%] mx-auto  text-[10px]  text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, 
                lectus magna fringilla urna, porttitor</p>

                <p className='text-[14px] text-center font-[600] md:text-[20px] lg:text-[22px]'>-Jeo Stanlee</p>
            </div>

        </div>
    )
}

export default happyCustomer