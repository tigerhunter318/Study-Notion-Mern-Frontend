import React from 'react'
import { useSelector } from 'react-redux';
import { removeFromCart } from '../../../../redux/slices/cartSlice';
import { RiDeleteBin6Line } from "react-icons/ri"
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import RatingStars from '../../../common/RatingStars';

const CartCourses = () => {
  const { cartItems } = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className='flex flex-col flex-1'>
      {
        cartItems.map((course, ind) => (
          <div
            key={course._id}
            className={`flex items-start justify-between flex-wrap w-full gap-6
          ${ind !== cartItems.length - 1 && 'border-b border-b-richblack-400 pb-6'}
          ${ind !== 0 && 'mt-6'}
          `}>

            <div
              className='flex flex-1 flex-col gap-4 lg:flex-row cursor-pointer '
              onClick={() => navigate(`/course/${course._id}`)}
            >

              <img src={course?.thumbnail} alt={course?.title}
                className='h-[148px] w-[220px] rounded-lg object-cover'
              />

              <div className='' >
                <h2 className='text-lg font-medium text-richblack-5' >{course?.title}</h2>
                <p className='text-sm text-richblack-300' >{course?.category?.name}</p>

                <div className='flex items-center gap-2' >
                  <span className='text-yellow-5' >{course?.averageRating}</span>
                  
                  <RatingStars rating={course?.averageRating} starSize={20} />

                  <span className='text-richblack-400' >{course?.reviews?.length} Ratings</span>
                </div>
              </div>

            </div>

            <div className='flex flex-col items-end space-y-2' >
              <button
                onClick={() => dispatch(removeFromCart(course._id))}
                className='flex items-center gap-x-1 rounded-md border border-richblack-600 bg-richblack-700 py-3 px-3 text-pink-200' >
                <RiDeleteBin6Line />
                <span> Remove</span>
              </button>

              <p className='mb-6 text-3xl font-medium text-yellow-100' >₹ {course?.price}</p>
            </div>

          </div>
        ))
      }
    </div>
  )
}

export default CartCourses
