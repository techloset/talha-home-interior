import React from 'react'

const happyCustomer = () => {
    return (
        <div className='md:grid md:mt-[7%]'>

            <div class='md:text-center '>
                <p className='md:text-[36px] md:font-[500] md:m-8'>Our Happy Customers</p>
                <p className='md:w-[60%] md:m-auto md:text-[15px] lg:text-[18px] md:font-[400]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet
                    luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim</p>
            </div>

            <div className='md:grid md:grid-cols-12 md:text-center md:mt-[3%]' >

                <div className='bg-blue-500 md:col-span-2'>

                </div>

                <div className=' md:col-span-8 '>
                    <img className=' ' src="/images/happyCutomer1.png" alt="" />

                </div>
                
                <div className='md:col-span-2 bg-yellow-500'></div>

            </div>



            <div className='bg-white md:w-[50%]  md:mt-[-100px] m-auto md:text-center'>

                <img className=' md:h-[78px] md:mt-[-35px] m-auto ' src="/images/happyCustomer4.png" alt="" />

                <p className='md:text-[12px] lg:text-[20px] lg:font-[400] md:w-[80%] md:m-auto '>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Culpa ipsam iusto maxime molestias? Sint nam illo molestiae deserunt
                    necessitatibus esse consectetur porro
                    recusandae numquam tenetur, corrupti asperiores aut! Ipsum, libero.</p>
                <p className='font-[600] text-[20px] lg:text-[22px]'>-Jeo Stanlee</p>
            </div>

        </div>
    )
}

export default happyCustomer