import React from 'react';
import './Galery.css'
import Navebar from '../Home/Component/Navebar';
import Galery2 from '../Home/Component/Gallert'
import Footer from '../Home/Component/Footer';
function Galery() {
  return (
    <div>
      <Navebar />
      <div className='colorSetting'>
        Gallery
      </div>
      <Galery2 />
      <Footer />  
    </div>
  )
}

export default Galery
