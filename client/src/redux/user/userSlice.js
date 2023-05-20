import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userSignUp } from "../../api/user/userAPI";
// import { firstLogin } from "../../api/user/userAPI";

const initialState = {
  loadingIsActive: false,
  userData: null,
};

export const createUser = createAsyncThunk(
  "user/create",
  async (email, password, name, lastname) => {
    const response = await userSignUp(email, password, name, lastname);
    return response
  }
);

export const getUserData = createAsyncThunk("user/getData", async () => {
  // const response = await firstLogin();
  // return response;
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    // getting a user's data------------------------------------------------------------
    builder.addCase(getUserData.pending, (state, action) => {
      state.loadingIsActive = true;
      state.userData = null;
    });

    builder.addCase(getUserData.fulfilled, (state, action) => {
      state.userData = { ...action.payload };
      state.loadingIsActive = false;
    });
    // sign up -------------------------------------------------------------------------
    builder.addCase(createUser.pending, (state, action) => {
      state.loadingIsActive = true;
      state.userData = null;
    });

    builder.addCase(createUser.fulfilled, (state, action) => {
      state.userData = { ...action.payload };
      state.loadingIsActive = false;
    });
  },
});

export default userSlice.reducer;
