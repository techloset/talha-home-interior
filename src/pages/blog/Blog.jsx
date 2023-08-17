import React from 'react'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import "slick-carousel/slick/slick-theme.css";
import { dataDigitalBestSeller } from './const'

// import BlogCard from '../../component/blogCard'

const Blog = () => {
      const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 0,
            responsive: [
                  {
                        breakpoint: 2520,
                        settings: {
                              slidesToShow: 4,
                              slidesToScroll: 2,
                              infinite: true,
                              dots: true
                        }
                  },

                  {
                        breakpoint: 1024,
                        settings: {
                              slidesToShow: 4,
                              slidesToScroll: 2,
                              infinite: true,
                              dots: true
                        }
                  },
                  {
                        breakpoint: 767,
                        settings: {
                              slidesToShow: 3,
                              slidesToScroll: 1,
                              initialSlide: 2
                        }
                  },
                  {
                        breakpoint: 480,
                        settings: {
                              slidesToShow: 2,
                              slidesToScroll: 1
                        }
                  }
            ]
      };


      return (


            <div className='  mt-[10%]  mx-8 lg:mx-20'>

                  <p className=' md:mx-0 text-[20px]  md:text-[36px] font-[500] '>Blogs</p>
                  <Slider {...settings}>
                        {
                              dataDigitalBestSeller.map((item) => (

                                    <div className=' overflow-x:hidden'>

                                          <div className='mt-[15px]  '>
                                                <img className=' h-[120px] mr-[160px] md:mr-0  md:p-[5px] md:w-[300px] md:h-[200px] lg:w-[330px] lg:h-[333px] ' src={item.linkImg} alt="" />
                                          </div>
                                          <div className=' mt-[10px] '>
                                                <h1 className=' md:h-[60px]  md:w-[80%] h-[30px] md:text-[18px] lg:text-[24px] font-[500] md:mt-[8%]'>{item.title}</h1>
                                                <h1 className=' w-[80%] text-[14px]  md:w-[90%] md:text-start  md:text-[14px] md:font-[400] md:mt-[4%] lg:text-[20px] '>{item.Desc}</h1>
                                          </div>

                                    </div>

                              ))
                        }
                  </Slider>
                  <button className=' hidden   md:flex md:justify-center md:m-auto bg-[#4B2A63] md:p-3 lg:p-6 lg:font-[600] md:w-[25%] md:text-[17px] md:text-[400] text-white md:mt-[5%]  lg:w-[270px] lg:h-[80px] lg:text-24px '>View All</button>
            </div>
      )
}

export default Blog