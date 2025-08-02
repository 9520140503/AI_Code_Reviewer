import React, { useState, useEffect } from 'react';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useDispatch } from 'react-redux';
import Cookies from 'js-cookie';
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
      const token = Cookies.get('token');

      if (token) {
        try {
          await dispatch(login({ token })); // Ensure login accepts an object
          navigate('/');
        } catch (error) {
          console.error('Token validation failed:', error);
          navigate('/login');
        }
      } else {
        console.warn('No token found in cookies.');
        navigate('/login');
      }

      setLoading(false);
    };

    checkAuth();
  }, [dispatch, navigate]);

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Header />
      <main
        className="min-h-screen py-32 px-12"
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
