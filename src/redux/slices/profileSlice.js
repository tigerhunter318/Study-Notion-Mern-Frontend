import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  profileLoading: false
}

const profileSlice = createSlice({
  name: 'profile slice',
  initialState,
  reducers: {
    setUser(state, value) {
      state.user = value.payload
    },
    setProfileLoading(state, value) {
      state.profileLoading = value.payload
    }
  }
})

export const { setUser, setProfileLoading } = profileSlice.actions
export default profileSlice.reducer
