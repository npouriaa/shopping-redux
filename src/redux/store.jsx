import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import loaderReducer from "./loaderSlice";
import errorReducer from "./errorSlice";
import notificationReducer from "./notificationSlice";
import productsReducer from "./productsSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    loader: loaderReducer,
    notification: notificationReducer,
    products: productsReducer,
    error: errorReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable the check temporarily
    }),
});

export default store;
