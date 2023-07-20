import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import HighlightedText from '../components/core/HomePage/HighlightedText'

const Home = () => {
  return (
    <div className='bg-richblack-900 flex flex-col font-inter min-h-screen'>

      {/* Section 1 - Black color section */}
      <div className='mx-auto flex flex-col items-center w-11/12 max-w-maxContent text-white' >


        <Link to={'/signup'}>
          <div className='flex items-center bg-richblack-800 text-richblack-200 font-bold rounded-full mt-16 w-fit mx-auto transition-all duration-200 hover:scale-95 gap-2 px-10 py-[5px] hover:bg-richblack-900
            border-white  drop-shadow-[0_1.5px_rbga(255, 255, 255, 0.25)]
          ' >
            Become an instructor
            <FaArrowRight />
          </div>
        </Link>

        <div>
          Empower Your Future with
          <HighlightedText text={'Coding Skils'} />
        </div>

        <div>
          <p>With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors.</p>
        </div>
      </div>

      {/* Section 2 - White color section */}


      {/* Section 3 - Black color section */}


      {/* Section 4 - Footer section */}



    </div>
  )
}

export default Home
