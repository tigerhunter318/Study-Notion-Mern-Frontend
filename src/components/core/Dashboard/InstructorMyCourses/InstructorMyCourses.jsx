import React, { useEffect, useState } from 'react'
import IconBtn from '../../../common/IconBtn'
import { useNavigate } from 'react-router-dom'
import { VscAdd } from 'react-icons/vsc'
import CourseTable from './CourseTable'
import Spinner from '../../../common/Spinner'
import { getCreatedCourses } from '../../../../services/operations/courseServices'
import { useSelector } from 'react-redux'


const InstructorMyCourses = () => {

  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const { token } = useSelector(state => state.auth)

  useEffect(() => {

    const fetchCourses = async () => {
      setLoading(true);
      const result = await getCreatedCourses(token);
      if (result) {
        setCourses(result);
      }
      setLoading(false);
    }
    fetchCourses();
  }, [token]);


  return (
    <div>
      <div className='flex justify-between items-center mb-14' >
        <h1 className='text-3xl font-medium text-richblack-5' >My Courses</h1>
        <IconBtn
          type="btn"
          text="Add Course"
          onClickHandler={() => navigate("/dashboard/add-course")}
        >
          <VscAdd />
        </IconBtn>
      </div>

      <div >
        {
          loading ?
            (
              <div>
                <Spinner />
              </div>
            )
            :
            !courses || courses.length === 0 ?
              (
                <div>
                  <div className='h-[1px] mb-10  mx-auto bg-richblack-500' ></div>
                  <p className='text-center text-2xl font-medium text-richblack-100 select-none' >No Courses Found</p>
                </div>
              )
              :
              <CourseTable courses={courses} setCourses={setCourses} />
        }
      </div>


    </div>
  )
}

export default InstructorMyCourses
