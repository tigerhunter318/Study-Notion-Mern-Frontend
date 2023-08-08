import React from 'react'
import IconBtn from '../../../common/IconBtn'
import { RiEditBoxLine } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import dateFormatter from '../../../../utils/dateFormatter'
import { FiUpload } from "react-icons/fi"
import ChangeProfilePicture from './ChangeProfilePicture'

const Settings = () => {

  const navigate = useNavigate();
  const { user } = useSelector(state => state.profile)

  return (

    <div className='bg-richblack-900 text-white mx-8'>
      <h1 className='font-medium text-richblack-5 text-3xl mb-14' >Edit Profile</h1>


      {/* Change Profile Picture */}
      <ChangeProfilePicture />

    </div>
  )
}

export default Settings
