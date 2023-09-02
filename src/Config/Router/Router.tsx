import React from 'react';
import { BrowserRouter, Routes,Route} from 'react-router-dom';
import Home from '../../Pages/Home/Home';
import About from '../../Pages/About/About';
import Services from '../../Pages/Services/Services';
import Galery from '../../Pages/Galery/Galery';
import Shedule from '../../Pages/Shedule/Shedule';
import Contact from '../../Pages/Contact/Contact';
import UserNotFound from '../../Pages/UserFound/UserNotFound';
import Blog from '../../Pages/Blog/Blog';


function Router() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route  path='/' element={<Home />} />
        <Route  path='about' element={<About />} />
        <Route  path='shedule' element={<Shedule />} />
        <Route  path='Services' element={<Services />} />
        <Route  path='gallery' element={<Galery/>} />
        <Route  path='blog' element={<Blog   />} />
        <Route  path='contact' element={<Contact />} />
        <Route  path='*' element={<UserNotFound />} />

      </Routes>
      </BrowserRouter>
    </>
  )
}

export default Router
  