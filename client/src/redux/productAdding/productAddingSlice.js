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
    dimension: {
      info: null,
      img: null,
    },
  },
  images: {},
  modifiers: {},
};

export const productAddingSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    saveSubGeneralInfo(state, action) {
      state.generalInfo.subGeneral = action.payload;
    },

    saveDimensionInfo(state, action) {
      state.generalInfo.dimension = action.payload;
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

      state.generalInfo.dimension = {
        info: null,
        img: null,
      };
    },
  },
});

export const { saveSubGeneralInfo, saveDimensionInfo, resetGeneralInfoFields } =
  productAddingSlice.actions;

export default productAddingSlice.reducer;
