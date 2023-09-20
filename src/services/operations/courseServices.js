import { toast } from "react-hot-toast"
import { categoriesApi, courseApi } from "../apis";
import { apiConnector } from "../apiConnector";

// Fetch all categories
export const fetchCourseCategories = async (dispatch, navigate) => {
  // const toastId = toast.loading('Loading ...');
  // setLoading(true);
  let result = [];
  try {
    const response = await apiConnector('GET', categoriesApi.GET_GET_ALL_CATEGORIES_API);
    result = response.data?.data;
  } catch (error) {
    toast.error('Could not get course categories, Try Again');
    navigate('/')
  }

  // setLoading(false);
  // toast.dismiss(toastId);
  return result
}


// Add a course // only by instructor
export const addCourse = async (formData, token, dispatch, navigate) => {
  let result = null;
  const toastId = toast.loading('Loading ...');
  try {
    const response = await apiConnector('POST', courseApi.POST_CREATE_COURSE_API,
      formData, {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${token}`
    });

    result = response.data?.data;
  } catch (error) {
    toast.error(error?.response?.data?.error || 'Cannot create course, Try Again');
  }
  toast.dismiss(toastId);
  return result
}


// Edit details a course // only by instructor
export const editCourseDetails = async (formData, token, dispatch, navigate) => {
  let result = null;
  const toastId = toast.loading('Loading ...');
  try {
    const response = await apiConnector('PUT', courseApi.PUT_EDIT_COURSE_API,
      formData, {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${token}`
    });

    result = response.data?.data;
  } catch (error) {
    toast.error(error?.response?.data?.error || 'Cannot edit course, Try Again');
  }
  toast.dismiss(toastId);
  return result
}


// Get Full details of a course
export const getFullDetailsOfCourse = async (courseId, token) => {
  let result = null;
  const toastId = toast.loading('Loading ...');
  try {
    const response = await apiConnector('POST', courseApi.POST_GET_FULL_DETAILS_OF_COURSE,
      {
        courseId
      }, {
      Authorization: `Bearer ${token}`
    });

    result = response.data?.data;
  } catch (error) {
    toast.error(error?.response?.data?.error || 'Cannot fetch course, Try Again');
  }
  toast.dismiss(toastId);
  return result
}



