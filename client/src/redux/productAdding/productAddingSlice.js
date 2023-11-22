import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { AuthService } from "../../api/user/authService";

const initialState = {
  generalInfo: {
    subGeneral: {
      name: null,
      price: null,
      categoryId: null,
      typeId: null,
      subTypeId: null,
      description: null,
    },
    dimension: {},
  },
  images: {},
  modifiers: {},
};

// export const getUserData = createAsyncThunk(
//   "user/getData",
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await AuthService.loginWithToken();
//       return response;
//     } catch (error) {
//       console.log("who I am");

//       return rejectWithValue(null);
//     }
//   }
// );

export const productAddingSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    saveGeneralInfo(state, action) {
      state.generalInfo.subGeneral = action.payload;
    },
    resetGeneralInfoFields(state) {
      state.generalInfo.subGeneral = {
        name: null,
        price: null,
        categoryId: null,
        typeId: null,
        subTypeId: null,
        description: null,
      };
    },
  },
});

export const { saveGeneralInfo, resetGeneralInfoFields } = productAddingSlice.actions;

export default productAddingSlice.reducer;
