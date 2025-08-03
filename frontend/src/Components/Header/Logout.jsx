import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {useDispatch} from "react-redux";
import {logout} from "../../Store/authSlice";

function Logout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false)
  const handleLogout = async() => {
    const token = localStorage.getItem('token');
    setLoading(true);
    try {
      const response =  await fetch(`${import.meta.env.VITE_MAIN_POINT_RENDER}/user/logout`,{
        method:"GET",
        headers:{
           "Content-Type": "application/json",
           "Authorization":`Bearer ${token}`
        }
      })

      const data = await response.json();

      if(response.ok){
        localStorage.removeItem('token');
        dispatch(logout());
        navigate('/login');
      }
    } catch (error) {
      console.log(error.message);
    }finally{
      setLoading(false);
    }
  }
  return (
    <div>
      <button onClick={handleLogout}>
        {loading ? "Logging Out":"Logout"}
      </button>
    </div>
  )
}

export default Logout