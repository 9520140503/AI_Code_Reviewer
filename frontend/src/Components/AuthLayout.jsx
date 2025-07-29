import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import Loader from './Loader2';

function AuthLayout({
    authenticaiton=true,children
}) {
    const authStatus = useSelector((state) => state.auth.status);
    const navigate = useNavigate();
    const [loader,setLoader] = useState(false);

    useEffect(() => {
        setLoader(true);
        if(authenticaiton && authStatus !== authenticaiton){
            navigate('/login')
        }
        else if(!authenticaiton && authStatus !== authenticaiton){
            navigate('/')
        }
        setLoader(false);
    },[authenticaiton,authStatus,navigate])
  return (
    <div>
        {loader ? 
            <div>   
                <Loader/>
            </div> :
            
            <div>
                {children}
            </div>
        }
    </div>
  )
}

export default AuthLayout