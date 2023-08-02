import { configureStore } from "@reduxjs/toolkit";
import signUpReducer from "./signUpSlice";
import loaderReducer from "./loaderSlice";
import notificationReducer from "./notificationSlice";

const store = configureStore({
  reducer: {
    signUp: signUpReducer,
    loader: loaderReducer,
    notification: notificationReducer,
  },
});

export default store;
