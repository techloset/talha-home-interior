import React from 'react'
import WhatWeDoCards from '../../component/whatWeDoCards'

const WhatWeDo = () => {
    const image1 = '/images/whatImage1.png'
    const image2 = '/images/whatImage2.png'
    const image3 = '/images/whatImage3.png'
    const image4 = '/images/whatImage4.png'

    const img1Width = 'md:w-[] md:h-[] md:ml-[25px] '

    return (
        <div className='md:mt-[10%] font-popins'>

            <div className='md:text-[36px] font[500] text-center'>
                <p>What We Do?</p>
            </div>

            <div className='md:flex md:justify-around text-center md:m-[8%] '>
                <WhatWeDoCards classes={img1Width} imgeUrl={image1} text='Modular Kitchen' />
                <WhatWeDoCards classes={img1Width} imgeUrl={image2} text='Bedroom' />
                <WhatWeDoCards classes={img1Width} imgeUrl={image3} text='Living room' />
                <WhatWeDoCards classes={img1Width} imgeUrl={image4} text='Home office' />
            </div>

            
                <p className=' text-center md:w-[75%] md:m-auto text-[18px] font-[400]'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo,
                    vel fringilla est ullamcorper eget nulla
                </p>
            

        </div>
    )
}

export default WhatWeDo