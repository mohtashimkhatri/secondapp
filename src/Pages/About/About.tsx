import React from 'react'
import Navebar from '../Home/Component/Navebar'
import About1from from '../Home/Component/About'

import './About.css'
import Footer from '../Home/Component/Footer'

function About() {
  return (
    <>
      <Navebar />
      <div className='colorsetting'>\
      <h1>ABOUT</h1></div>
      <About1from />
      <Footer />
    </>
  )
}

export default About
