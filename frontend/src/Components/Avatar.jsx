import React, { useState } from 'react'
import Robot from "../Assets/Robot.png"

function Avatar() {
    const [userImage, setuserImage] = useState('');
    return (
        <div className='bg-red-500 rounded-xl h-8 w-8 overflow-hidden border-2 '>
            <img src={userImage || Robot}
            onError={(e) =>  (e.target.src = 'https://via.placeholder.com/150?text=Avatar')}
            alt="user" 
            className='object-contain'/>
        </div>
    )
}

export default Avatar