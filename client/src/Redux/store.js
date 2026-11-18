import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSclice";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
