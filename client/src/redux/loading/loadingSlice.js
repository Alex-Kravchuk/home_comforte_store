import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ProductService } from "../../api/product/productService";


const initialState = {
  loadingIsActive: false,
  // menu data
  data: [],
};

export const getMenuData = createAsyncThunk(
  "products/getMenuData",
  async () => {
    const response = await ProductService.getAllCategories();
    return response;
  }
);

export const menuDataSlice = createSlice({
  name: "menu data",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getMenuData.pending, (state, action) => {
      state.loadingIsActive = true;
      state.data = [];
    });

    builder.addCase(getMenuData.fulfilled, (state, action) => {
      state.data = action.payload ?? [];
      state.loadingIsActive = false;
    });
  },
});


export default menuDataSlice.reducer;
