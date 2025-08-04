import Avatar from '../Avatar'
import { Icon, LogOut, User } from 'lucide-react'
import Logout from './Logout'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Sidepanel({userData = {}}) {
    const authStatus = useSelector((state) => state.auth.status)
  return (
    <div className='w-full'>
        <Avatar userData={userData}/>
        <div>
            <h2 className='mt-2 font-bold'>{userData.fullname}</h2>
        </div>
        <div className='bg-white/10 backdrop-blur-0 h-full p-1 mt-2  rounded'>
            <div className='bg-white/10 text-white mx-2 my-2 p-2 rounded flex gap-4'>
            <User className='text-blue-300'/>
            <Link to='/view-profile' state={userData}>View Profile</Link>
            </div>

            {authStatus && <div className='bg-white/10 text-center mx-2 my-2 p-2 rounded' id='same'>
                    <div className='flex items-center gap-4'>
                        <LogOut className='text-blue-300'/>
                        <Logout/>
                    </div>
            </div>}

        </div>
    </div>
  )
}

export default Sidepanel