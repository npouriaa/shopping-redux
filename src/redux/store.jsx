import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import loaderReducer from "./loaderSlice";
import notificationReducer from "./notificationSlice";
import ratingReducer from "./ratingSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    loader: loaderReducer,
    notification: notificationReducer,
    rating: ratingReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable the check temporarily
    }),
});

export default store;
