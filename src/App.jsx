import React from 'react'
import Header from './component/header/header'
import LandInteriors from './pages/land inetriors/LandInteriors'
import WhatWeDo from './pages/what_we_do/WhatWeDo'
import OurProjects from './pages/our projects/ourProjects'
import Blog from './pages/blog/Blog'

const App = () => {
  return (
    <div>
      <Header/>
      <LandInteriors/>
      <WhatWeDo/>
      <OurProjects/>
      <Blog/>
    </div>
  )
}

export default App