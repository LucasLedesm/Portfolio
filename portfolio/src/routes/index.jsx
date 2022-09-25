import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbaar from "../components/Navbar/Navbaar";
import Footer from "../components/Footer/Footer";
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Projects from '../pages/Projects/Projects';
import Resume from '../pages/Resume/Resume';


const Routees = () => {
  return (
    <BrowserRouter>
                <Navbaar/>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About/>} />
                    <Route path='/projects' element={<Projects/>} />
                    <Route path='/resume' element={<Resume/>} />
                </Routes>
                <Footer/>
            </BrowserRouter>
  )
}

export default Routees