import React from 'react'
import BlogCard from '../../component/blogCard'

const Blog = () => {
      const img1 = '/images/blogCard1.png'
      const img2 = '/images/blogCard2.png'
      const img3 = '/images/blogCard3.png'
      const img4 = '/images/blogCard4.png'
      const img5 = '/images/blogCard5.png'

      const textWidth = ' '
      // w-[110px]
      const imgeWidth = 'h-[120px] mr-[160px] md:mr-0  md:p-[5px] md:w-[300px] md:h-[200px] '


      return (

            <div className='md:mx-8  mt-[10%] font-popins'>

                  {/* heding */}
                  <p className=' mx-5 md:mx-0 text-[20px]  md:text-[36px] font-[500] lg:mx-4'>Blogs</p>

                  {/* cards div  */}
                  <div className=' flex mt-[3%] mx-5 md:mx-0 overflow-x-hidden'>

                        <BlogCard clas={textWidth} imgeWid={imgeWidth} imgUrl={img1} text='Modern Interior' para='Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,' />
                        <BlogCard clas={textWidth} imgeWid={imgeWidth} imgUrl={img2} text='Exterior Project' para='Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,' />
                        <BlogCard clas={textWidth} imgeWid={imgeWidth} imgUrl={img3} text='Grey Beauty' para='Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,' />
                        <BlogCard clas={textWidth} imgeWid={imgeWidth} imgUrl={img4} text='Plantation interior' para='Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,' />
                        <BlogCard clas={textWidth} imgeWid={imgeWidth} imgUrl={img5} text='Role of furnitures' para='Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,' />

                  </div>

                  {/* button */}
                  <button className=' hidden   md:flex md:justify-center md:m-auto bg-[#4B2A63] md:p-3 md:w-[25%] md:text-[20px] md:text-[600] text-white md:mt-[5%]'>View All</button>
            </div>
      )
}

export default Blog