import React from 'react'
import IconBtn from '../../../common/IconBtn'
import { RiEditBoxLine } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { FiUpload } from "react-icons/fi"


const ChangeProfilePicture = () => {
  const navigate = useNavigate();
  const { user } = useSelector(state => state.profile)
  const {token} = useSelector(state=>state.auth)


  return (
    <div className='flex items-center justify-between rounded-md border border-richblack-700 bg-richblack-800 p-8 px-12'>
      <div className='flex gap-x-4 items-center' >
        <div>
          <img src={user?.avatar} alt={`profile-${user?.firstName}`} className='aspect-square w-[78px] rounded-full object-cover' />
        </div>

        <div className='space-y-2'>
          <h2 className='text-lg font-semibold text-richblack-5' >Change Profile Picture</h2>
          <div className='flex gap-x-3' >

            <button className=' bg-richblack-200 text-richblack-900 py-2 px-5 font-semibold rounded-md' >Select</button>


            <IconBtn text={'Upload'} onClickHandler={() => navigate('/dashboard/settings')} children={<FiUpload />} />


          </div>
        </div>
      </div>


    </div>
  )
}

export default ChangeProfilePicture
