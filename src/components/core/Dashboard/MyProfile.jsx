import React from 'react'
import IconBtn from '../../common/IconBtn'
import { RiEditBoxLine } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import dateFormatter from '../../../utils/dateFormatter'

const MyProfile = () => {
  const navigate = useNavigate();
  const { user } = useSelector(state => state.profile)

  return (
    <div className='bg-richblack-900 text-white mx-5' >
      <h1 className='font-medium text-richblack-5 text-3xl mb-14' >My Profile</h1>

      <div className='flex items-center justify-between rounded-md border border-richblack-700 bg-richblack-800 p-8 px-12'>
        <div className='flex gap-x-4 items-center' >
          <div>
            <img src={user?.avatar} alt={`profile-${user?.firstName}`} className='aspect-square w-[78px] rounded-full object-cover' />
          </div>

          <div className='space-y-1'>
            <h2 className='text-lg font-semibold text-richblack-5' >{user?.firstName} {user?.lastName}</h2>
            <p className='text-sm text-richblack-300'>{user?.email}</p>
          </div>
        </div>

        <IconBtn text={'Edit'} onClickHandler={() => navigate('/dashboard/settings')} children={<RiEditBoxLine />} />
      </div>

      <div className='flex flex-col gap-y-10 my-10 rounded-md border border-richblack-700 p-8 px-12 bg-richblack-800'>
        <div className='flex items-center justify-between' >
          <h2 className='text-lg font-semibold text-richblack-5'>About</h2>
          <IconBtn text={'Edit'} onClickHandler={() => navigate('/dashboard/settings')} children={<RiEditBoxLine />} />
        </div>
        <p className={`${user?.profile?.about ? 'text-richblack-5' : 'text-richblack-400'} text-sm font-medium`} >{user?.profile?.about || 'Write Something About Yourself'}</p>
      </div>

      <div className='flex flex-col gap-y-10 my-10 rounded-md border border-richblack-700 p-8 px-12 bg-richblack-800 '>
        <div className='flex items-center justify-between w-full' >
          <h2 className='text-lg font-semibold text-richblack-5' >Personal Details</h2>
          <IconBtn text={'Edit'} onClickHandler={() => navigate('/dashboard/settings')} children={<RiEditBoxLine />} />
        </div>

        <div className='flex justify-between max-w-[500px]' >
          <div className='flex flex-col gap-y-5'>
            <div>
              <p className='mb-2 text-sm text-richblack-600'>First Name</p>
              <p className='text-sm text-richblack-5 font-medium' >{user?.firstName}</p>
            </div>

            <div>
              <p className='mb-2 text-sm text-richblack-600'>Email</p>
              <p className='text-sm text-richblack-5 font-medium' >{user?.email}</p>
            </div>

            <div>
              <p className='mb-2 text-sm text-richblack-600'>Gender</p>
              <p className={`text-sm font-medium ${user?.profile?.gender ? 'text-richblack-5' : 'text-richblack-400'} `} >{user?.profile?.gender ?? 'Add Gender'}</p>
            </div>
          </div>

          <div className='flex flex-col gap-y-5'>
            <div>
              <p className='mb-2 text-sm text-richblack-600'>Last Name</p>
              <p className='text-sm text-richblack-5 font-medium' >{user?.lastName}</p>
            </div>


            <div>
              <p className='mb-2 text-sm text-richblack-600'>Phone Number</p>
              <p className={`text-sm font-medium ${user?.profile?.contactNumber ? 'text-richblack-5' : 'text-richblack-400'} `} >{user?.profile?.contactNumber ?? 'Add Contact Number'}</p>
            </div>

            <div>
              <p className='mb-2 text-sm text-richblack-600'>Date of Birth</p>
              <p className={`text-sm font-medium ${user?.profile?.dob ? 'text-richblack-5' : 'text-richblack-400'} `} >{user?.profile?.dob ? dateFormatter(user?.profile?.dob) : 'Add Date of Birth'}</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default MyProfile
