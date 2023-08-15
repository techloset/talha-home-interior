import React from 'react'

const ComHeader = () => {
    
    return (
      <div className="w-full">
        <div className='flex justify-between bg-blue-500 items-center '>
            <img src="/images/menu.png" className='w-[50px]' alt="" />
            <h3>Side bar</h3>
        </div>

        <div className='bg-red-500 p-3 w-[100%] translate-x-[-100%] transition-all duration-[0.8s] ease-in-out'>
        <ol className=''>
                <li className='p-2'>Home</li>
                <li className='p-2'>about</li>
                <li className='p-2'>Contact</li>
                <li className='p-2'>Address</li>
                <li className='p-2'>school</li>
                <li className='p-2'>College</li>
                <li className='p-2'>University</li>
            </ol>
        </div>
      </div>
    );
  }
  


export default ComHeader