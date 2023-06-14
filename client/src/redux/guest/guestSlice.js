import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { guestService } from "../../api/guest/guestService";

const initialState = {
  guestData: null,
};

export const getGuest = createAsyncThunk(
  "guest/getData",
  async (_, { rejectWithValue }) => {
    try {
      const response = await guestService.loginAsGuest();

      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteGuest = createAsyncThunk(
  "guest/delete",
  async (_, { rejectWithValue }) => {
    try {
      const response = await guestService.deleteGuest();
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
    // create a guest-----------------------------------------------------------
    builder.addCase(getGuest.fulfilled, (state, action) => {
      state.guestData = action.payload;
      state.loadingIsActive = false;
    });

    builder.addCase(getGuest.rejected, (state, action) => {
      state.guestData = null;
    });

    // delete a guest----------------------------------------------

    builder.addCase(deleteGuest.fulfilled, (state, action) => {
      state.guestData = action.payload;
    });

    builder.addCase(deleteGuest.rejected, (state, action) => {
      state.guestData = null;
    });
  },
});

export default guestSlice.reducer;
