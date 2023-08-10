import React from 'react'


const blogCard = (props) => {
  return (
    <div className=''>
        <div className=''>
            <img className={props.imgeWid} src={props.imgUrl} alt="" />
        </div>
        
          <p className=' md:w-[90%] md:text-[20px] lg:text-[24px] md:font-[500] md:mt-[8%]'>{props.text}</p>
         
           <p className=' md:w-[85%] md:text-start  md:text-[14px] md:font-[400] md:mt-[4%]'>{props.para}</p>
           
        
    </div>
  )
}

export default blogCard