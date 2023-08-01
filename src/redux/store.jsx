import { configureStore } from "@reduxjs/toolkit";
import signUpReducer from './signUpSlice'

const store = configureStore({
  reducer : {
    signUp : signUpReducer
  }
})

export default store