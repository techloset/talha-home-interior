import React from 'react'

const happyCustomer = () => {
    return (
        <div className=' mt-[10%]  lg:grid md:mt-[7%] font-popins'>

            <div class=' mx-5  lg:text-center '>
                <p className=' text-[18px]  lg:text-[36px] font-[500] lg:m-8'>Our Happy Customers</p>
                <p className='lg:w-[755px] text-[12px] mt-[10px] lg:m-auto  lg:text-[18px] lg:font-[400]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet
                    luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim</p>
            </div>

            <div className='realtive  z-0 lg:grid lg:grid-cols-12 lg:text-center lg:mt-[3%]' >

                <div className='hidden lg:block  lg:col-span-2 lg:mr-[60px] lg:m-auto'>
                    <img className=' w-full h-[420px] lg:w-[825px] lg:h-[446px]' src="/images/happyCustomer3.png" alt="" />
                </div>

                <div className='hidden lg:block lg:col-span-8 '>
                    <img className=' w-full h-[420px] lg:w-[1228px] lg:h-[536px] ' src="/images/happyCutomer1.png" alt="" />


                </div>
                {/* mobile background image */}
                <div className='lg:hidden  '>
                    <img className='h-[200px] w-[90%]  mx-auto' src="/images/happyCustomerMobile.png" alt="" />


                </div>

                <div className='hidden lg:block  lg:col-span-2  lg:m-auto '>
                    <img className=' w-full h-[420px] lg:w-[825px] lg:h-[446px]' src="/images/happyCutomer2.png" alt="" />

                </div>


            </div>



            <div className=' absolute w-[70%] left-11 sm:left-[15%] md:static  z-10 mt-[-140px]   bg-white lg:w-[738px] lg:h-[258px] lg:mt-[-205px] lg:mx-[28%]  lg:m-auto lg:text-center'>

                <img className=' mt-[-20px]  h-[40px] sm:h-[60px] lg:h-[78px] lg:mt-[-35px] m-auto ' src="/images/happyCustomer4.png" alt="" />

                <p className='hidden lg:block lg:text-[20px] lg:font-[400] lg:w-[541px]  lg:m-auto '>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Culpa ipsam iusto maxime molestias? Sint nam illo molestiae deserunt
                    necessitatibus esse consectetur porro
                    recusandae numquam tenetur, corrupti asperiores aut! Ipsum, libero.</p>


                <p className=' lg:hidden p-5  w-[80%] mx-auto  text-[10px]  text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis,
                    lectus magna fringilla urna, porttitor</p>

                <p className='text-[14px] text-center mt-[-10px] lg:mt-[0px] font-[600] lg:text-[22px]'>-Jeo Stanlee</p>
            </div>

        </div>
    )
}

export default happyCustomer