import { configureStore } from "@reduxjs/toolkit";

import menuDataReducer from "./loading/loadingSlice";


export const store = configureStore({
  reducer: {
    menuData: menuDataReducer,
  },
});
