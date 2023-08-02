import { toast } from 'react-hot-toast'
import { setLoading, setToken } from "../../redux/slices/authSlice"
import { setUser } from "../../redux/slices/profileSlice";
import { apiConnector } from "../apiConnector";
import { authApi } from "../apis";

export const login = async (email, password, dispatch, navigate) => {
  dispatch(setLoading(true));
  const toastId = toast.loading('Loading ...')

  try {
    const response = await apiConnector('POST', authApi.POST_LOGIN_USER_API, {
      email,
      password
    });

    toast.success('Login Successful');
    dispatch(setToken(response.data.token));
    dispatch(setUser(response.data.user));
    localStorage.setItem('token', JSON.stringify(response.data.token));
    navigate('/dashboard/my-profile')
  } catch (error) {
    // toast.error('Login Failed');
    toast.error(error?.response?.data?.error || 'Login Failed')
  }

  toast.dismiss(toastId)
  dispatch(setLoading(false));
}


export const signUp = async (signUpData, dispatch, navigate) => {
  dispatch(setLoading(true));
  const toastId = toast.loading('Loading ...')

  try {
    const response = await apiConnector('POST', authApi.POST_SIGNUP_USER_API, signUpData);

    toast.success('SignUp Successful');
    dispatch(setToken(response.data.token));
    dispatch(setUser(response.data.user));
    localStorage.setItem('token', JSON.stringify(response.data.token));
    navigate('/dashboard/my-profile')
  } catch (error) {
    // toast.error('Login Failed');
    toast.error(error?.response?.data?.error || 'SignUp Failed')
    navigate('/signup')
  }

  toast.dismiss(toastId)
  dispatch(setLoading(false));
}

export const sendOtp = async (email, dispatch, navigate) => {
  const toastId = toast.loading('Loading...');
  dispatch(setLoading(true))

  try {
    const response = await apiConnector('POST', authApi.POST_SEND_OTP_API, {
      email
    });
    toast.success('OTP sent successfully');
    navigate('/verify-email')
  } catch (error) {
    toast.error(error?.response?.data?.error || 'SignUp Failed')
  }
  toast.dismiss(toastId);
  dispatch(setLoading(false));
}


export const logout = async (dispatch, navigate) => {
  dispatch(setToken(null));
  dispatch(setUser(null));
  localStorage.removeItem('token');
  toast.success('Logged out')
  navigate('/')
} 
