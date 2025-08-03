import React, { useState, useEffect } from 'react';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useDispatch } from 'react-redux';
// import Cookies from 'js-cookie';
import { login } from './Store/authSlice';
import Loader from './Components/Loader2';

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
useEffect(() => {
  const checkAuth = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_MAIN_POINT_RENDER}/user/profile`, {
        method:"GET",
        credentials: 'include', 
      });

      if (res.ok) {
        const data = await res.json();
        dispatch(login(data));
        
        if(window.location.pathname === "/login"){
          navigate('/');
        }
        
      } else {
        if (window.location.pathname !== '/login') {
          navigate('/login');
        }
      }
    } catch (err) {
      console.error('Auth failed:', err);
      if (window.location.pathname !== '/login') {
        navigate('/login');
      }
    } finally {
      setLoading(false);
    }
  };

  checkAuth();
}, []);


  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Header />
      <main
        className="min-h-screen py-32 "
        data-aos="zoom-in"
        data-aos-duration="1500"
      >
        {loading ? <Loader /> : <Outlet />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
