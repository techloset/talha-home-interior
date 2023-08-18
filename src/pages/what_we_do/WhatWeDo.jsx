import React from 'react'
import WhatWeDoCards from '../../component/whatWeDoCards'

const WhatWeDo = () => {
    const image1 = '/images/whatImage1.png '
    const image2 = '/images/whatImage2.png'
    const image3 = '/images/whatImage3.png'
    const image4 = '/images/whatImage4.png'

    const img1Width = 'w-[75%]  m-[10px] sm:mx-auto  lg:mx-0  lg:w-[286px] lg:h-[340px]  '


    return (

        <div className=' mt-[10%] sm:mx-8 lg:mx-0   lg:mt-[10%] font-popinsmedium '>

            <div className=' w-[70%]  slg:mx-[158px] lg:mx-auto text-start text-[18px] mx-auto sm:mx-[110px]     lg:w-auto sm:text-[36px] font-[500] lg:text-center'>
                <p>What We Do?</p>
            </div>

            <div className=' grid grid-cols-2 text-center mx-auto sm:w-[80%]   mt-[5%] w-[90%] lg:w-auto lg:mx-[72px]   lg:flex lg:justify-around  lg:m-[5%]  '>
                <WhatWeDoCards classes={img1Width} imgeUrl={image1} text='Modular Kitchen' />
                <WhatWeDoCards classes={img1Width} imgeUrl={image2} text='Bedroom' />
                <WhatWeDoCards classes={img1Width} imgeUrl={image3} text='Living room' />
                <WhatWeDoCards classes={img1Width} imgeUrl={image4} text='Home office' />
            </div>


            <p className='hidden lg:block lg:text-center  lg:m-auto lg:text-[18px] md:font-[400] lg:w-[1041px] lg:h-[144px] '>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo,
                vel fringilla est ullamcorper eget nulla
            </p>

        </div>
    )
}

export default WhatWeDo