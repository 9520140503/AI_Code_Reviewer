import React, { useEffect, useState } from 'react';
import robot from '../Assets/robot.png'
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';

const SignupForm = () => {
  const navigate = useNavigate();
  const [error,setError] = useState('');
  const [togglePassword,setTogglePassword] = useState(false);
  const [formData,setformData] = useState({
    fullname:"",
    email:"",
    password:""
  })

  const handleChange = (e) => {
    const {name,value} = e.target;
    setformData((prevData) => ({
      ...prevData,
      [name]:value,
    }))
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const signup = async() => {
      try {
        const response = await fetch(`${import.meta.env.VITE_MAIN_POINT_RENDER}/user/signup`,{
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify(formData)
        })
        const data = await response.json();
        console.log("Signup Successfully",data);
        navigate('/login');
      } catch (error) {
        setError(error.message);
        console.log("Signup Failed",error.message)
      }finally{
        setformData({
          fullname:"",
          email:"",
          password:""
        })
      }
    }
    signup();
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br  p-4">
      <div className="w-full max-w-4xl flex flex-col md:flex-row gap-6">
        {/* Logo and Heading Div */}
        <div className="hidden flex-1 md:flex flex-col items-center justify-center bg-white/10 backdrop-blur-lg border border-white/30 rounded-2xl p-8 shadow-lg shadow-blue-300">
          <img
            src={robot}
            alt="Logo"
            className="w-32 h-36 mb-4 rounded-full animate-updown"
          />
          <h1 className="text-3xl text-white text-center">Welcome to Codify</h1>
        </div>
        {/* Signup Form Div */}
        <div className="flex-1 bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl p-8 shadow-lg transition-transform hover:scale-105 hover:border-2 hover:border-purple-500 hover:shadow-blue-300">
          <h2 className="text-2xl text-blue-300 text-center mb-6">Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="fullname" className="block text-white text-sm mb-2">Full Name</label>
              <input
                type="text"
                id="fullname"
                name="fullname"
                 value={formData.fullname}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full p-3 bg-white/20 text-white rounded-lg focus:bg-white/30 focus:outline-none placeholder-white/70 focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-white text-sm mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                 value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full p-3 bg-white/20 text-white rounded-lg focus:bg-white/30 focus:outline-none placeholder-white/70 focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-6 relative">
              <label htmlFor="password" className="block text-white text-sm mb-2">Password</label>
              <input
                type={togglePassword ? "text":"password"}
                id="password"
                name="password"
                 value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full p-3 bg-white/20 text-white rounded-lg focus:bg-white/30 focus:outline-none placeholder-white/70 focus:ring-2 focus:ring-blue-500"
                required
              />
              <span className='absolute right-5 top-10'>
                <button onClick={() => setTogglePassword(prev => !prev)}>
                  {togglePassword ? <Eye/> : <EyeOff/>}
                </button>
              </span>
            </div>
            <button
              type="submit"
              className="w-full p-3 bg-emerald-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Sign Up
            </button>
          </form>
        <p className='text-center mt-2'>Already have an account ? <Link to='/login' className='text-blue-300 font-bold'>Login</Link></p>
        {!error && <p className='text-center text-red-500 mt-2'>{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
