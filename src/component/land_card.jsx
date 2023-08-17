import React from 'react'
import classNames from 'classnames'

const land_card = (props) => {
    const combinedClasses = classNames(props.classess, props.imgh)

    return (
        // <div className=' w-full flex justify-around text-center'>

        //     {/* <div className='ml-[50px] items-center text-[18px] font-[400]'  >

        //         <div className='ml-[50px]'><img src={props.imagesr} alt="Image" /></div>
        //         <div className=''>{props.text}</div>

        //     </div> */}

        // </div>

        <div className={combinedClasses}>

            <div className='md:mt-10'>

                <div className='md:flex md:justify-center'><img src={props.imagesr} alt="" className='' /></div>
                <div className=' lg:mt-[20px] flex justify-center lg:text-[18px] lg:font-[400] mt-[3px] text-[12px] text-center  w-[80px]  ml-[-22px] sm:text-[18px]  sm:w-[150px] sm:ml-[-47px] md:ml-[0px]  md:text-center md:w-[150px] md:text-[24px] '>{props.text}</div>
                {/* mt-[8px] text-[12px] flex justify-center text-center w-[80px] ml-[-20px]  md:flex md:justify-center  md:text-center md:w-[120px] md:text-[24px] */}

            </div>

        </div>
    )
}

export default land_card