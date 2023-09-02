import React from 'react';
import './Blog.css'
import Navebar from '../Home/Component/Navebar';
import Footer from '../Home/Component/Footer';
import Blog2 from '../Home/Component/Blog'

function Blog() {
  return (
    <div>
      <Navebar />
      <div className='colorsetting'>Blog</div>
      <Blog2 />
      <Footer />
    </div>
  )
}

export default Blog
