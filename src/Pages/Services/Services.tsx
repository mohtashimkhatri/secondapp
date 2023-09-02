import React from 'react';
import './Services.css'
import Navebar from '../Home/Component/Navebar';
import Services2 from '../Home/Component/services';
import Footer from '../Home/Component/Footer';


function Services() {
  return (
    <div>
      <Navebar />
      <div className='colorsetting'>
        Servics
      </div>
      <Services2 />
      <Footer />
    </div>
  )
}

export default Services
