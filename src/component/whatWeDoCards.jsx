import React from 'react'

const whatWeDoCards = (props) => {
  return (
    <div className={props.classes}>
        <div className=''><img src={props.imgeUrl} alt="" /></div>
        <div className='text-[14px]  mt-[10%]  md:mt-[18%] md:text-[18px] lg:text-[24px] font-[600] text-[#4B2A63] '>{props.text}</div>
    </div>
  )
}

export default whatWeDoCards