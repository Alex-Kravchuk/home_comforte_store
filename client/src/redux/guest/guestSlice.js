import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { logInAsGuest } from "../../api/user/userAPI";

const initialState = {
  error: null,
  loadingIsActive: false,
  guestData: null,
};

export const getGuest = createAsyncThunk(
  "guest/getData",
  async (_, { rejectWithValue }) => {
    try {
      const response = await logInAsGuest();
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const guestSlice = createSlice({
  name: "guest",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getGuest.pending, (state, action) => {
      state.loadingIsActive = true;
      state.guestData = null;
    });

    builder.addCase(getGuest.fulfilled, (state, action) => {
      state.guestData = { ...action.payload };
      state.loadingIsActive = false;
    });

    builder.addCase(getGuest.rejected, (state, action) => {
      state.error = action.payload;
      state.guestData = null;
      state.loadingIsActive = false;
    });
  },
});

export default guestSlice.reducer;
