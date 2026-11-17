import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./UserSclice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
