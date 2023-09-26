import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import Spinner from '../components/common/Spinner';
import { getCourse } from '../services/operations/courseServices';
import Footer from '../components/common/Footer';
import RatingStars from '../components/common/RatingStars';
import { BiInfoCircle } from "react-icons/bi"
import { HiOutlineGlobeAlt } from "react-icons/hi"
import dateTimeFormatter from '../utils/dateTimeFormatter';
import CourseBuyNowCard from '../components/core/Course/CourseBuyNowCard';

const CourseDetails = () => {
  const { courseId } = useParams();
  const [loading, setLoading] = useState(false);
  const [courseData, setCourseData] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [confirmationModalData, setConfirmationModalData] = useState(null);

  useEffect(() => {
    const fetchCourseData = async () => {
      setLoading(true);
      const result = await getCourse(courseId);
      console.log(result)
      if (result) {
        setCourseData(result);
      }
      setLoading(false);
    };
    fetchCourseData();
  }, [courseId])

  const handleAddToCart = () => {
    // TODO
  }

  const handleBuyCourse = () => {

  }

  return (
    <div className=''>

      {
        loading && (
          <div className='grid place-items-center min-h-[calc(100vh-3.5rem)]' >
            <Spinner />
          </div>
        )
      }

      {
        !loading && !courseData && (
          <div className='grid place-items-center min-h-[calc(100vh-3.5rem)]' >
            <p className='text-xl text-center text-richblack-5' >No Such Course Found</p>
          </div>
        )
      }

      {
        !loading && courseData &&
        (
          <div className='bg-richblack-900 text-white' >
            <div className='bg-richblack-800'  >
              {/* Course Details */}
              <div className='mx-auto px-4 py-8 lg:w-[1260px] min-h-[450px]  ' >

                <div className='mx-auto lg:mx-0 flex flex-col items-center lg:items-start max-w-maxContentTab xl:max-w-[810px]' >
                  <p className='text-sm w-full ml-5 lg:ml-0 text-left text-richblack-300' >Home / Learning /
                    <span className='text-yellow-25' >
                      {courseData.category.name}
                    </span>
                  </p>

                  {/* Course thumbnail - For small screen */}
                  <div className='lg:hidden relative max-h-[30rem] mt-5' >
                    <div className="absolute bottom-0 left-0 h-full w-full shadow-[#161D29_0px_-64px_36px_-28px_inset]"></div>
                    <img
                      src={courseData.thumbnail}
                      alt="course thumbnail"
                      className='w-full aspect-ratio'
                    />
                  </div>

                  <div className='flex flex-col justify-center gap-4 py-5 text-lg text-richblack-5 my-5' >

                    <p className='text-4xl font-bold text-richblack-5 sm:text-[42px]' >{courseData.title}</p>
                    <p className='text-richblack-200' >{courseData.description}</p>

                    <div className='flex items-center flex-wrap gap-2 text-md' >
                      <p className='text-yellow-25' >{courseData.averageRating}</p>

                      <RatingStars rating={courseData.averageRating} starSize={24} />

                      <p className='text-richblack-200' >( {courseData.reviews.length} ) Ratings</p>
                      <p className='text-richblack-200' >{courseData.numberOfEnrolledStudents}</p>
                    </div>

                    <p className='text-richblack-5' >Created by {courseData.instructor.firstName} {courseData.instructor.lastName}</p>

                    <div className='flex flex-wrap gap-5 text-lg' >
                      <p className='flex items-center gap-2' >
                        <BiInfoCircle />
                        Created at {dateTimeFormatter(courseData.createdAt)}
                      </p>

                      <p className='flex items-center gap-2'>
                        <HiOutlineGlobeAlt />
                        {courseData.language || "English"}
                      </p>
                    </div>

                  </div>

                  {/* Buy now - For small screen */}
                  <div className='lg:hidden w-full flex flex-col gap-4 border-y border-y-richblack-500 py-4 ' >
                    <p className='pb-4 text-3xl font-semibold text-richblack-5 text-center' >
                      ₹ {courseData.price}
                    </p>

                    <button
                      className='rounded-md bg-yellow-50 px-5 py-2 font-semibold text-richblack-900'
                      onClick={handleBuyCourse}
                    >
                      Buy Now
                    </button>

                    <button
                      className='rounded-md bg-richblack-800 px-5 py-2 font-semibold text-richblack-5'
                      onClick={handleAddToCart}
                    >
                      Add to Cart
                    </button>

                  </div>
                </div>
              </div>

              {/* Buy Now - For larger screen TODO */}
              <div className='hidden lg:block' >
                <CourseBuyNowCard
                  courseData={courseData}
                  handleBuyCourse={handleBuyCourse}
                  setConfirmationModalData={setConfirmationModalData}
                />
              </div>
            </div>

            {/* Reviews */}
            <div>
              {/* <p>Reviews from other learners</p> */}
            </div>

            {/* TODO- uncomment it */}
            {/* Footer */}
            {/* <Footer /> */}
          </div>
        )
      }



    </div>
  )
}

export default CourseDetails
