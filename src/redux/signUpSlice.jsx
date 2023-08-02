import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  password: "",
  passwordVisibility : false,
  passwordError : false,
  emailError : false,
};

const signUpSlice = createSlice({
  name: "signUp",
  initialState,
  reducers: {
    setEmail(state, action) {
      state.email = action.payload;
    },
    setPassword(state, action) {
      state.password = action.payload;
    },
    setPasswordVisibility(state , action){
      state.passwordVisibility = action.payload
    },
    setPasswordError(state , action){
      state.passwordError = action.payload
    },
    setEmailError(state , action){
      state.emailError = action.payload
    }
  },
});

export const signUpActions = signUpSlice.actions;
export default signUpSlice.reducer;
