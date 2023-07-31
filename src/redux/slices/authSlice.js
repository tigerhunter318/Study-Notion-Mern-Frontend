import { createSlice } from "@reduxjs/toolkit";

// TODO - verify localStorage
const initialState = {
  token: localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : null,
  loading: false
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken(prevState, action) {
      prevState.token = action.payload
    },
    setLoading(state, value) {
      state.loading = value.payload
    }
  }
})

export const { setToken, setLoading } = authSlice.actions
export default authSlice.reducer
