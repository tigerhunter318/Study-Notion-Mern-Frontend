import React from 'react'
import ChangeProfilePicture from './ChangeProfilePicture'
import EditProfile from './EditProfile'
import { UpdatePassword } from './UpdatePassword'
import DeleteAccount from './DeleteAccount'

const Settings = () => {

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
