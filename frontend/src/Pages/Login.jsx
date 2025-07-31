import React from 'react';
import Robot from '../Assets/Robot.png';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center  p-4">
      <div className="w-full max-w-4xl flex flex-col md:flex-row gap-6">
        {/* Logo and Heading Div */}
        <div className="hidden flex-1 md:flex flex-col items-center justify-center bg-white/10 backdrop-blur-lg border border-white/30 rounded-2xl p-8 shadow-lg hover:shadow-blue-300">
          <img
            src={Robot}
            alt="Logo"
            className="w-32 h-36 mb-4 rounded-full animate-updown"
          />
          <h1 className="text-3xl text-white text-center">Welcome to Codify</h1>
        </div>
        {/* Login Form Div */}
        <div className="flex-1 bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl p-8 shadow-lg transition-transform hover:scale-105 hover:border-2 hover:border-purple-500 hover:shadow-blue-300">
          <h2 className="text-2xl text-blue-300 text-center mb-6">Log In</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block text-white text-sm mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="w-full p-3 bg-white/20 text-white rounded-lg focus:bg-white/30 focus:outline-none placeholder-white/70 focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-white text-sm mb-2">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                className="w-full p-3 bg-white/20 text-white rounded-lg focus:bg-white/30 focus:outline-none placeholder-white/70 focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full p-3 bg-emerald-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Log In
            </button>
          </form>
            <p className='text-center mt-2'>Don't have an account ? <Link to='/signup' className='text-blue-300 font-bold'>Signup</Link></p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;