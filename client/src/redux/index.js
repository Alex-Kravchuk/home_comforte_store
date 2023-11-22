import { configureStore } from "@reduxjs/toolkit";

import menuDataReducer from "./loading/loadingSlice";

import userReducer from "./user/userSlice";
import guestSlice from "./guest/guestSlice";
import productAddingSlice from "./productAdding/productAddingSlice";

export const store = configureStore({
  reducer: {
    menuData: menuDataReducer,
    user: userReducer,
    guest: guestSlice,
    productAdding: productAddingSlice,
  },
});
