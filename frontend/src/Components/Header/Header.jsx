import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Robot from "../../Assets/Robot.png";
import Logout from './Logout';
import { Cross, SquareMenu, X } from "lucide-react";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const [mobile, setMobile] = useState(false);

  const navItems = [
    { name: "Home", path: "/", status: true },
    { name: "Login", path: "/login", status: !authStatus },
    { name: "Signup", path: "/signup", status: !authStatus },
    { name: "Review Code", path: "/review-code", status: authStatus },
    { name: "Summarizer", path: "/summarizer", status: authStatus },
    { name: "Code Converter", path: "/code-converter", status: authStatus }
  ];

  return (
    <div className='bg-white/20 backdrop-blur-lg w-full py-2 sm:py-4 px-6 fixed left-0 z-50 border-4 border-blue-300'>
      <div className='flex items-center justify-between md:px-24'>
        {/* Logo and Title */}
        <div className='flex items-center gap-x-2'>
          <img src={Robot} alt="Logo" className='w-[32px]' />
          <h2 className='text-xl sm:text-2xl md:text-4xl'>
            <Link to="/">Codify</Link>
          </h2>
        </div>

        {/* Desktop Navigation */}
        <ul className='hidden sm:flex items-center gap-x-6 md:gap-x-12'>
          {navItems.map(navItem => (
            navItem.status && (
              <li key={navItem.path} className='relative group text-sm sm:text-md md:text-xl transition duration-300'>
                <Link to={navItem.path} className="text-white group-hover:text-blue-300 transition duration-300">
                  {navItem.name}
                </Link>
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-blue-300 transition-all duration-500 group-hover:w-full"></span>
              </li>
            )
          ))}
          {authStatus && (
            <li className='text-base md:text-lg cursor-pointer w-fit bg-blue-400 p-1 rounded-md hover:bg-white hover:text-black hover:shadow-md hover:shadow-blue-300'>
              <Logout />
            </li>
          )}
        </ul>

        {/* Mobile Menu Toggle Button */}
        <button className='sm:hidden' onClick={() => setMobile(prev => !prev)}>
          {!mobile ? <SquareMenu size={28} />: <X/>}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobile && (
        <ul className='sm:hidden grid grid-cols-2 gap-x-4 justify-center items-center gap-4 p-2 mt-2 text-'>
          {navItems.map(navItem => (
            navItem.status && (
              <li key={navItem.path} className='relative group text-base transition duration-300'>
                <Link to={navItem.path} className="text-white group-hover:text-blue-300 transition duration-300">
                  {navItem.name}
                </Link>
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-blue-300 transition-all duration-500 group-hover:w-full"></span>
              </li>
            )
          ))}
          {authStatus && (
            <li className='text-base cursor-pointer w-fit bg-blue-400 p-1 rounded-md hover:bg-white hover:text-black hover:shadow-md hover:shadow-blue-300'>
              <Logout />
            </li>
          )}
        </ul>
      )}
    </div>
  );
}

export default Header;
