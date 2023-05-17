import { configureStore } from "@reduxjs/toolkit";

import menuDataReducer from "./loading/loadingSlice";

import userReducer from "./user/userSlice";

export const store = configureStore({
  reducer: {
    menuData: menuDataReducer,
    user: userReducer
  },
});
