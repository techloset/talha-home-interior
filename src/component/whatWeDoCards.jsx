import React from 'react'

const whatWeDoCards = (props) => {
  return (
    <div >
        <img className={props.classes} src={props.imgeUrl} alt="" />
        <div className=' text-[14px]  mt-[10%] sm:mb-[15%]  sm:text-[24px] font-[600] sm:mt-[33px] text-center text-[#4B2A63] '>{props.text}</div>
    </div>
  )
}

export default whatWeDoCards