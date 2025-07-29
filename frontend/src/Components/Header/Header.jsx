import React from 'react'
import {useSelector} from "react-redux";
import { Link } from 'react-router-dom';
import Robot from "../../Assets/Robot.png"

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navItems = [
    {
        name:"Home",path:"/",status:true
    },{
        name:"Login",path:"/login",status:!authStatus
    },{
        name:"Signup",path:"/signup",status:!authStatus
    },{
        name:"Review Code",path:"/review-code",status:authStatus
    },{
        name:"Summarizer",path:"/summarizer",status:authStatus
    },{
        name:"Code Converter",path:"/code-converter",status:authStatus
    }
  ]
  return (
    <div className='bg-white/20 backdrop-blur-lg w-full py-2 sm:py-6 fixed left-0 z-50 border-4 border-blue-300'>
        <div className='flex items-center justify-around'>
            <div className='flex items-center gap-x-2 '>
                <img src={Robot} alt="" 
                className='w-[32px]'/>
                <h2 className='text-2xl sm:text-3xl md:text-4xl'>
                <Link to="/">
                 Codify
                </Link>
            </h2>
            </div>
        <ul className='hidden sm:flex items-center sm:gap-x-6 md:gap-x-12 '>
            {navItems.map((navItem) => (
                navItem.status? 
                (<li key={navItem.path}
                    className='relative group text-sm sm:text-lg md:text-xl  transition duration-300'>
                   <Link to={navItem.path}
                     className="text-white group-hover:text-blue-300 transition duration-300">
                    {navItem.name} 
                   </Link>
                    <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-blue-300 transition-all duration-500 group-hover:w-full"></span>
                </li>)
                :
                null
            ))}
        </ul>
        </div>
    </div>
  )
}

export default Header