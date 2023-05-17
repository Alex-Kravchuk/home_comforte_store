import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { firstLogin } from "../../api/user/userAPI";

const initialState = {
  loadingIsActive: false,
  userData: {},
};

export const getUserData = createAsyncThunk("users/getUserData", async () => {
  const response = await firstLogin();
  return response;
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getUserData.pending, (state, action) => {
      state.loadingIsActive = true;
      state.userData = {};
    });

    builder.addCase(getUserData.fulfilled, (state, action) => {
      

      state.userData = { ...action.payload };
      state.loadingIsActive = false;
    });
  },
});

export default userSlice.reducer;
