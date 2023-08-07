import React from 'react'
import classNames from 'classnames'

const land_card = (props) => {
    const combinedClasses = classNames(props.classess , props.imgh )

    return (
        // <div className=' w-full flex justify-around text-center'>

        //     {/* <div className='ml-[50px] items-center text-[18px] font-[400]'  >

        //         <div className='ml-[50px]'><img src={props.imagesr} alt="Image" /></div>
        //         <div className=''>{props.text}</div>

        //     </div> */}

        // </div>

        <div className={combinedClasses}>
            <div className=''>

                <div className='flex justify-center'><img src={props.imagesr} alt="" className=''/></div>
                <div className=' flex justify-center  text-center w-[120px] '>{props.text}</div>

            </div>
            

           
        </div>
    )
}

export default land_card