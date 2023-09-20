import { combineReducers } from "@reduxjs/toolkit";
import authReducer from '../slices/authSlice'
import profileReducer from "../slices/profileSlice";
import cartReducer from "../slices/cartSlice";
import addCourseReducer from "../slices/addCourseSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer,
  cart: cartReducer,
  addCourse: addCourseReducer
})

export default rootReducer
