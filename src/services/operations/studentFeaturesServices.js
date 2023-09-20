import { toast } from "react-hot-toast"
import { userApi } from "../apis"
import { apiConnector } from "../apiConnector";


export const getEnrolledCourses = async (token, setEnrolledCourses, dispatch, navigate) => {
  try {
    const response = await apiConnector('GET', userApi.GET_GET_ENROLLED_COURSES_API, null, {
      'Authorization': `Bearer ${token}`
    });
    setEnrolledCourses(response.data.data);
  } catch (error) {
    toast.error(error?.response?.data?.error || 'Fetch Failed')
  }
}

export const buyCourses = async (token, courses, user, setLoading, dispatch, navigate) => {
  // TODO
  console.log('first')
}
