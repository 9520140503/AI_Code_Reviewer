import React, { useState } from 'react';
import Robot from "../Assets/robot.png";
import { Mail, Pen, Phone, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

function ViewProfile() {
  const location = useLocation();
  const userData = location.state || {}
  return (
    <div className="w-full max-w-2xl mx-auto bg-white/10 backdrop-blur-sm rounded-2xl shadow-xl shadow-purple-500/20 p-6 sm:p-8 md:p-10 transition-all duration-300 hover:shadow-purple-500/40 border-2 animate-updown">
      <h2 className="text-xl sm:text-2xl md:text-3xl text-center font-semibold text-blue-300 mb-6 md:mb-8">Profile Section</h2>
      
      <div className="bg-gray-800/50 rounded-xl p-4 sm:p-6 md:p-8 transition-all duration-300 hover:bg-gray-800/70 border-2">
        <div className="flex flex-col items-center">
          <div className="relative group">
            <div className="border-2 border-purple-500/30 rounded-full w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 overflow-hidden transition-all duration-300 group-hover:border-purple-500/60">
              <img
                src={userData.image || Robot}
                alt="userimage"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          <div className="mt-6 w-full space-y-4">
            <p className="flex items-center gap-3 text-base sm:text-lg md:text-xl text-gray-100 font-medium group transition-colors duration-200 hover:text-blue-200">
              <User className="text-blue-400 group-hover:text-blue-300 transition-colors duration-200" size={24} />
              <span>{userData.fullname || "N/A"}</span>
            </p>
            <p className="flex items-center gap-3 text-sm sm:text-base md:text-lg text-gray-100 font-medium group transition-colors duration-200 hover:text-green-200">
              <Mail className="text-green-400 group-hover:text-green-300 transition-colors duration-200" size={24} />
              <span>{userData.email || "N/A"}</span>
            </p>
            <p className="flex items-center gap-3 text-sm sm:text-base md:text-lg text-gray-100 font-medium group transition-colors duration-200 hover:text-red-200">
              <Phone className="text-red-400 group-hover:text-red-300 transition-colors duration-200" size={24} />
              <span>{userData.mobile || "N/A"}</span>
            </p>
            <button className='bg-emerald-600 flex items-center gap-x-2 rounded p-1 md:px-2 mx-auto'>
              <Pen size={18}/>
              <Link to='/update-profile' state={userData}>Edit Profile</Link></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewProfile;