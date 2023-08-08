import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/core/Dashboard/Sidebar'

const DashBoard = () => {



  return (
    <div className='flex  min-h-[calc(100vh-3.5rem)] bg-richblack-900 text-white' >
      <Sidebar />
      <div className='mx-auto flex-1 w-11/12 max-w-[1000px] py-10 overflow-auto' >
        <Outlet />
      </div>
    </div>
  )
}

export default DashBoard
