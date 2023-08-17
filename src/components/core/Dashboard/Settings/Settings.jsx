import React from 'react'
import IconBtn from '../../../common/IconBtn'
import { RiEditBoxLine } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import dateFormatter from '../../../../utils/dateFormatter'
import { FiUpload } from "react-icons/fi"
import ChangeProfilePicture from './ChangeProfilePicture'
import EditProfile from './EditProfile'
import { UpdatePassword } from './UpdatePassword'
import DeleteAccount from './DeleteAccount'

const Settings = () => {

  const navigate = useNavigate();
  const { user } = useSelector(state => state.profile)

  return (

    <div className='bg-richblack-900 text-white mx-8 flex flex-col gap-y-5'>
      <h1 className='font-medium text-richblack-5 text-3xl mb-14' >Edit Profile</h1>

      {/* Change Profile Picture */}
      <ChangeProfilePicture />

      {/* Edit Profile Information */}
      <EditProfile />

      {/* Update Password */}
      <UpdatePassword />

      {/* Delete Account */}
      <DeleteAccount />


    </div>
  )
}

export default Settings
