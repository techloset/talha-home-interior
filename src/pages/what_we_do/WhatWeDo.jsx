import React from 'react'
import WhatWeDoCards from '../../component/whatWeDoCards'

const WhatWeDo = () => {
    const image1 = '/images/whatImage1.png'
    const image2 = '/images/whatImage2.png'
    const image3 = '/images/whatImage3.png'
    const image4 = '/images/whatImage4.png'

    const img1Width = 'w-[75%] mx-auto m-[10px] md:mx-0 md:w-full md:mx-0  md:ml-[25px] '
   

    return (

        <div className=' mt-[10%] sm:mx-8 md:mx-0   md:mt-[10%] font-popins '>

            <div className=' w-[70%] text-start text-[18px] mx-auto sm:mx-0 sm:text-[30px]    md:w-auto md:text-[36px] font-[500] md:text-center'>
                <p>What We Do?</p>
            </div>

            <div className=' grid grid-cols-2 text-center mx-auto  mt-[5%] w-[90%] sm:w-auto   md:flex md:justify-around  md:m-[5%] '>
                <WhatWeDoCards classes={img1Width} imgeUrl={image1} text='Modular Kitchen' />
                <WhatWeDoCards classes={img1Width} imgeUrl={image2} text='Bedroom' />
                <WhatWeDoCards classes={img1Width} imgeUrl={image3} text='Living room' />
                <WhatWeDoCards classes={img1Width} imgeUrl={image4} text='Home office' />
            </div>


            <p className='hidden md:block md:text-center md:w-[75%] md:m-auto md:text-[18px] md:font-[400] '>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo,
                vel fringilla est ullamcorper eget nulla
            </p>

        </div>
    )
}

export default WhatWeDo