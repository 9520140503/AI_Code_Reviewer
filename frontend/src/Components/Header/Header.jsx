import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Robot from "../../Assets/Robot.png";
import Logout from './Logout';
import { Cross, Image, SquareMenu, X } from "lucide-react";
import Avatar from '../Avatar';
import Sidepanel from './Sidepanel';
import { logout } from '../../Store/authSlice';

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const [mobile, setMobile] = useState(false);
  const [isSideOpen, setisSideOpen] = useState(false);
  const [userData,setUserData] = useState({}); 

  const navItems = [
    { name: "Home", path: "/", status: true },
    { name: "Login", path: "/login", status: !authStatus },
    { name: "Signup", path: "/signup", status: !authStatus },
    { name: "Review Code", path: "/review-code", status: authStatus },
    { name: "Summarizer", path: "/summarizer", status: authStatus },
    { name: "Code Converter", path: "/code-converter", status: authStatus }
  ];

  useEffect(() => {
    const fetchUserInfo = async() => {
      try {
         const response = await fetch('http://localhost:3000/user/profile',{
        method:"GET",
        headers: {
          "Content-Type": "application/json"
        },
        credentials:'include',
       });

       const result = await response.json();
       console.log(result.fullname);
       setUserData(result);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchUserInfo();
  },[])

  return (
    <div className='bg-white/20 backdrop-blur-lg w-full py-2 sm:py-4 px-6 fixed left-0 z-50 border-4 border-blue-300'>
      <div className='flex items-center justify-between md:px-12 gap-x-6'>
        {/* Logo and Title */}
        <div className='flex items-center gap-x-2'>
          <img src={Robot} alt="Logo" className='w-[32px]' />
          <h2 className='text-xl sm:text-2xl md:text-4xl'>
            <Link to="/">Codify</Link>
          </h2>
        </div>

        {/* Desktop Navigation */}
        <ul className='hidden sm:flex items-center gap-x-2 sm:gap-x-4 md:gap-x-5 lg:gap-x-12'>
          {navItems.map(navItem => (
            navItem.status && (
              <li key={navItem.path} className='relative group text-base sm:text-xs md:text-md lg:text-lg transition duration-300'>
                <Link to={navItem.path} className="text-white group-hover:text-blue-300 transition duration-300">
                  {navItem.name}
                </Link>
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-blue-300 transition-all duration-500 group-hover:w-full"></span>
              </li>
            )
          ))}
         
          <li>
           <button onClick={() => setisSideOpen(prev => !prev)}>
              <Avatar userData={{image:userData.image,fullname:userData.fullname,email:userData.email}}/>
            </button>
          </li>
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

      {/* SidePanel */}
      {
        <div className={`flex fixed top-0 right-0 h-screen w-64 rounded p-4 bg-gray-900 z-50 transform transition-transform duration-300 ease-in-out ${isSideOpen && authStatus? "translate-x-0":"translate-x-full"}`}>
          <button
          className='absolute right-2 bg-black'
          onClick={() => setisSideOpen(false)}><X/></button>
          <Sidepanel 
          userData={userData}
          />
        </div>
      }


    </div>
  );
}

export default Header;
