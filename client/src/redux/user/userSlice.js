import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { AuthService } from "../../api/user/authService";

const initialState = {
  userData: null,
  activeUserPage: "profile",
};

export const getUserData = createAsyncThunk(
  "user/getData",
  async (_, { rejectWithValue }) => {
    try {
      const response = await AuthService.loginWithToken();
      return response;
    } catch (error) {
      console.log("who I am");

      return rejectWithValue(null);
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signup: (state, action) => {
      state.userData = action.payload;
    },

    login: (state, action) => {
      state.userData = action.payload;
    },

    logout: (state) => {
      state.userData = null;
    },

    loginWithToken: (state, action) => {
      state.userData = action.payload;
    },

    updateUser: (state, action) => {
      state.userData = action.payload;
    },

    notAuthorized: (state) => {
      state.userData = null;
    },

    changeActiveUserPage: (state, action) => {
      state.activeUserPage = action.payload;
    },
  },

  extraReducers: (builder) => {
    // getting a user's data------------------------------------------------------------
    builder.addCase(getUserData.fulfilled, (state, action) => {
      state.userData = action.payload;
    });

    builder.addCase(getUserData.rejected, (state, action) => {
      state.userData = action.payload;
    });
  },
});

export const {
  login,
  signup,
  logout,
  updateUser,
  notAuthorized,
  loginWithToken,
  changeActiveUserPage,
} = userSlice.actions;

export default userSlice.reducer;
