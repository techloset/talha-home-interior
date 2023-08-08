import React from 'react'
import Header from './component/header/header'
import LandInteriors from './pages/land inetriors/LandInteriors'
import WhatWeDo from './pages/what_we_do/WhatWeDo'
import OurProjects from './pages/our projects/ourProjects'
import Blog from './pages/blog/Blog'
import InterDesignProduct from './pages/interiorProducts/interDesignProduct'
import HappyCustomer from './pages/happyCustomer/happyCustomer'

const App = () => {
  return (
    <div>
      <Header/>
      <LandInteriors/>
      <WhatWeDo/>
      <OurProjects/>
      <Blog/>
      <InterDesignProduct/>
      <HappyCustomer/>

    </div>
  )
}

export default App