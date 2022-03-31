import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import movieApi from "services/api";

export const store = configureStore({

  // Add api's reducerPath to store
  reducer: {
    [movieApi.reducerPath]: movieApi.reducer,
  },
  // Add default redux middleware along with createApi middleware
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(movieApi.middleware),

  devTools: true, // enable Redux DevTools integration
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
setupListeners(store.dispatch);
