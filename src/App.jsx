import React from 'react'
import Header from './component/header/Header'
import LandInteriors from './pages/land inetriors/LandInteriors'
import WhatWeDo from './pages/what_we_do/WhatWeDo'
import OurProjects from './pages/our projects/ourProjects'
import Blog from './pages/blog/Blog'
import InterDesignProduct from './pages/interiorProducts/interDesignProduct'
import HappyCustomer from './pages/happyCustomer/happyCustomer'
import DreamHome from './pages/dreamHome/dreamHome'
import Footer from './component/footer/footer'
// import ComHeader from './component/header/ComHeader'

const App = () => {
  return (
    <div>
      {/* <ComHeader/> */}
      <Header/>
      <LandInteriors/> 
      <WhatWeDo/>
      <OurProjects/>
      <Blog/>
      <InterDesignProduct/>
      <HappyCustomer/>
      {/* <DreamHome/> */}
      {/* <Footer/> */}
    </div>
  )
}

export default App