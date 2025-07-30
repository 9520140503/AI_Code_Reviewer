import React from 'react'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import {Outlet} from "react-router-dom"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // duration in ms
  }, []);
  return (
    <div className='bg-gray-900 text-white min-h-screen'>
      <Header/>
      <main className='min-h-screen py-32 px-12' data-aos="zoom-in" data-aos-duration="1500">
        <Outlet/>
      </main>
      <Footer/>
    </div>
  )
}

export default App