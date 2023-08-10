import React from 'react'


const blogCard = (props) => {
  return (
    <div className=''>
        <div className=''>
            <img className={props.imgeWid} src={props.imgUrl} alt="" />
        </div>
        
          <p className='md:h-[60px]  md:w-[80%] h-[30px] md:text-[18px] lg:text-[24px] font-[500] md:mt-[8%] '>{props.text}</p>
         
           <p className=' w-[80%] text-[14px] md:w-[90%] md:text-start  md:text-[14px] md:font-[400] md:mt-[4%] lg:text-[20px]  '>{props.para}</p>
           
        
    </div>
  )
}

export default blogCard