import React, { useState } from 'react'
import Robot from "../Assets/Robot.png"

function Avatar({userData}) {
    const [userImage, setuserImage] = useState('');
    return (
        <div className='bg-blue-800 rounded-xl h-8 w-8 md:h-10 md:w-10 overflow-hidden border-2 '>
            <img src={userImage || Robot}
            onError={(e) =>  (e.target.src = 'https://via.placeholder.com/150?text=Avatar')}
            alt="user" 
            className='object-contain'/>
        </div>
    )
}

export default Avatar