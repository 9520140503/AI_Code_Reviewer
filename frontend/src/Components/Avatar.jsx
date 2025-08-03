import React from 'react';
import Robot from "../Assets/robot.png";

function Avatar({ userData = {} }) {
  return (
    <div className='bg-blue-800 rounded-xl h-8 w-8 md:h-10 md:w-10 overflow-hidden border-2 '>
      <img
        src={userData.image || Robot}
        onError={(e) => (e.target.src = Robot)}
        alt="user"
        className='object-cover w-full h-full'
      />
    </div>
  );
}

export default Avatar;
