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
                              slidesToShow: 4.3,
                              slidesToScroll: 2,
                              infinite: true,
                              dots: true
                        }
                  },

                  {
                        breakpoint: 1400,
                        settings: {
                              slidesToShow: 2.3,
                              slidesToScroll: 2,
                              infinite: true,
                              dots: true
                        }
                  },
                  {
                        breakpoint: 990,
                        settings: {
                              slidesToShow: 2.3,
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


            <div className='  mt-[10%] lg:mt-[99px]  mx-8 lg:mx-20 font-popinsmedium sm:ml-[100px] sm:mr-[80px]  slg:ml-[147px] lg:ml-[100px] lg:mr-[80px] '>

                  <p className=' text-[20px]  sm:ml-[47px] font-popinsMedium sm:text-[36px] font-[500] '>Blogs</p>
                  <Slider {...settings}>
                        {
                              dataDigitalBestSeller.map((item) => (

                                    <div className=' overflow-x:hidden  sm:mx-8 lg:mx-0 sm:mt-[58px]   slg:ml-[150px] lg:ml-[124px] sm:ml-[80px]'>

                                          <div className='mt-[15px]   '>
                                          {/* sm:w-[200px] sm:h-[200px]*/}
                                                <img className='   h-[120px] mr-[160px] sm:w-[95%] sm:h-[283px]    slg:w-[330px] slg:h-[333px] ' src={item.linkImg} alt="" />
                                          </div>

                                          <div className=' mt-[10px]  '>
                                                <h1 className='  lg:h-[60px]  lg:w-[80%] h-[30px] sm:text-[24px] sm:mt-[16px]  lg:text-[24px] font-[500] lg:mt-[16px]'>{item.title}</h1>
                                                <h1 className='sm:w-[285px] w-[80%] text-[14px]   lg:text-start sm:text-[18px] slg:text-[18px] slg:w-[330px]  slg:mt-[16px]  lg:font-[400] lg:mt-[16px]  lg:text-[17px] lg:h-[78px] lg:w-[300px]  '>{item.Desc}</h1>
                                          </div>

                                    </div>

                              ))
                        }
                  </Slider>
                  <button className=' hidden   lg:flex lg:justify-center lg:m-auto bg-[#4B2A63]  lg:p-5 lg:font-[600] text-white lg:mt-[5%]  lg:w-[270px] lg:h-[80px] lg:text-[24px] '>View all</button>
            </div>
      )
}

export default Blog