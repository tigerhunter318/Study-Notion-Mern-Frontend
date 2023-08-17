import { toast } from "react-hot-toast"
import { setUser } from "../../redux/slices/profileSlice"
import { userApi } from "../apis"
import { setLoading } from "../../redux/slices/authSlice";
import { apiConnector } from "../apiConnector";
import { logout } from "./authServices";


export const getCurrentUser = async (token, dispatch, navigate) => {
  // const toastId = toast.loading('Loading ...');
  setLoading(true);

  try {
    const response = await apiConnector('GET', userApi.GET_CURRENT_LOGGED_USER_API, null,
      {
        Authorization: `Bearer ${token}`
      });
    dispatch(setUser(response.data.data));
  } catch (error) {
    toast.error('Could not get user details, Login Again')
    dispatch(logout(dispatch, navigate));
    navigate('/login')
  }

  setLoading(false);
  // toast.dismiss(toastId);
}
