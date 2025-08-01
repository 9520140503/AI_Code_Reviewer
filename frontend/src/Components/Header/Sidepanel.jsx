import React from 'react'
import Avatar from '../Avatar'
import { Icon, LogOut, User } from 'lucide-react'
import Logout from './Logout'

function Sidepanel({logout}) {
    
  return (
    <div className='w-full'>
        <Avatar/>
        <div>
            <h2 className='mt-2 font-bold'>Vishesh Rajput</h2>
        </div>
        <div className='bg-white/10 backdrop-blur-0 h-full px-2 py-1 mt-2  rounded'>
            <div className='bg-white/10 text-center mx-2 my-2 p-2 rounded flex gap-4'><User/>View Profile</div>
            {/* <div className='bg-white/10 text-center mx-2 my-2 p-2 rounded'>View Profile</div> */}
            <div className='bg-white/10 text-center mx-2 my-2 p-2 rounded' id='same'>
                    <p className='flex items-center gap-4'><LogOut/><Logout/></p>
            </div>
        </div>
    </div>
  )
}

export default Sidepanel