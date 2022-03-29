import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "slices/movieSlice";

export const store = configureStore({
  reducer: {
    movieReducer,
  },
  devTools: true, // enable Redux DevTools integration
});
