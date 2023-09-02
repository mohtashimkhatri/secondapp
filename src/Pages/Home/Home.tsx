import React from 'react';
import './Home.css'
import Navebar from './Component/Navebar';
import Header from './Component/Header'
import About from './Component/About';
import Blog from './Component/Blog';
import Services from './Component/services';
import Gallert from './Component/Gallert';
import Footer from './Component/Footer';

function Home() {
  return (
    <div>
      <Navebar />
      <Header />
      <About />
      <Blog />
      <Services />
      <Gallert />
      <Footer />
    </div>
  )
}

export default Home
