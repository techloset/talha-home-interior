import React from 'react'

const whatWeDoCards = (props) => {
  return (
    <div className={props.classes}>
        <div><img src={props.imgeUrl} alt="" /></div>
        <div className='md:mt-[20%]'>{props.text}</div>
    </div>
  )
}

export default whatWeDoCards