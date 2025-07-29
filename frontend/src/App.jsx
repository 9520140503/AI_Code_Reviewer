import React from 'react'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import {Outlet} from "react-router-dom"

function App() {
  return (
    <div className='bg-gray-900 text-white min-h-screen'>
      <Header/>
      <main className='min-h-screen py-32 px-12'>
        <Outlet/>
      </main>
      <Footer/>
    </div>
  )
}

export default App