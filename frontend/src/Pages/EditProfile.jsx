import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Image, User, Mail, Phone } from 'lucide-react';

function EditProfile() {
  const location = useLocation();
  const data = location.state;
  const [error,setError] = useState('');
  const [loader,setLoader] = useState(false);
  const navigate = useNavigate()
  const [userData, setUserData] = useState({
    image: data.image || "",
    fullname: data.fullname || "",
    email: data.email || "",
    mobile: data.mobile || "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    setLoader(true);
    setError('');
    try {
        const response = await fetch(`${import.meta.env.VITE_MAIN_POINT_RENDER}/user/updateProfile`,{
        method:"PUT",
        credentials:'include',
        headers:{
             "Content-Type": "application/json",
             "Authorization":`Bearer ${token}`
        },
        body:JSON.stringify(userData)
        })
        const result = await response.json();
        if(!response.ok){
            setError(result.message)
        }
        alert('Profile Updated Successfully')
        console.log(result);
        navigate('/');
    } catch (error) {
        console.log(error.message);
        setError(error.message)
    } finally{
        setLoader(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="w-full max-w-lg mx-auto min-h-screen bg-gray-900/80 flex items-center justify-center p-4 sm:p-6 md:p-8">
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes slideIn {
            from { opacity: 0; transform: translateX(-20px); }
            to { opacity: 1; transform: translateX(0); }
          }
          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.05); }
            100% { transform: scale(1); }
          }
          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-fadeIn {
            animation: fadeIn 0.8s ease-out forwards;
          }
          .animate-slideIn {
            animation: slideIn 0.6s ease-out forwards;
          }
          .animate-pulseButton {
            animation: pulse 2s infinite ease-in-out;
          }
          .animate-gradient {
            background: linear-gradient(45deg, rgba(139, 92, 246, 0.2), rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.2));
            background-size: 200% 200%;
            animation: gradientShift 8s ease-in-out infinite;
          }
        `}
      </style>
      <form
        onSubmit={handleSubmit}
        className="w-full bg-white/10 backdrop-blur-md rounded-2xl shadow-xl shadow-purple-500/20 p-6 sm:p-8 md:p-10 transition-all duration-300 hover:shadow-purple-500/40 animate-gradient animate-fadeIn animate-glow"
      >
        <h2 className="text-xl sm:text-2xl md:text-3xl text-center font-semibold text-blue-300 mb-6 md:mb-8 animate-fadeIn">Edit Profile</h2>
        
        <div className="space-y-6">
          <div className="relative group animate-slideIn" style={{ animationDelay: '0.1s' }}>
            <label htmlFor="image" className="flex items-center gap-2 text-sm sm:text-base md:text-lg text-gray-200 font-medium mb-2">
              <Image className="text-purple-400 group-hover:text-purple-300 transition-colors duration-200 transform group-hover:scale-110" size={20} />
              Profile Image URL
            </label>
            <input
              type="text"
              name="image"
              value={userData.image}
              onChange={handleChange}
              className="w-full p-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-200 transform hover:-translate-y-1"
              placeholder="Enter image URL"
            />
          </div>

          <div className="relative group animate-slideIn" style={{ animationDelay: '0.2s' }}>
            <label htmlFor="fullname" className="flex items-center gap-2 text-sm sm:text-base md:text-lg text-gray-200 font-medium mb-2">
              <User className="text-blue-400 group-hover:text-blue-300 transition-colors duration-200 transform group-hover:scale-110" size={20} />
              Full Name
            </label>
            <input
              type="text"
              name="fullname"
              value={userData.fullname}
              onChange={handleChange}
              className="w-full p-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 transform hover:-translate-y-1"
              placeholder="Enter your full name"
            />
          </div>

          <div className="relative group animate-slideIn" style={{ animationDelay: '0.3s' }}>
            <label htmlFor="email" className="flex items-center gap-2 text-sm sm:text-base md:text-lg text-gray-200 font-medium mb-2">
              <Mail className="text-green-400 group-hover:text-green-300 transition-colors duration-200 transform group-hover:scale-110" size={20} />
              Email
            </label>
            <input
              type="email"
              name="email"
              value={userData.email}
              onChange={handleChange}
              className="w-full p-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-200 transform hover:-translate-y-1"
              placeholder="Enter your email"
            />
          </div>

          <div className="relative group animate-slideIn" style={{ animationDelay: '0.4s' }}>
            <label htmlFor="mobile" className="flex items-center gap-2 text-sm sm:text-base md:text-lg text-gray-200 font-medium mb-2">
              <Phone className="text-red-400 group-hover:text-red-300 transition-colors duration-200 transform group-hover:scale-110" size={20} />
              Mobile
            </label>
            <input
              type="tel"
              name="mobile"
              value={userData.mobile}
              onChange={handleChange}
              className="w-full p-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-200 transform hover:-translate-y-1"
              placeholder="Enter your mobile number"
            />
          </div>

          {error && <p className='text-center text-red-400'>{error}</p>}

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 mt-6 animate-pulseButton"
          >
            {!loader ? "Save Changes" : "Updating"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditProfile;