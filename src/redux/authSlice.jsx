import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  password: "",
  passwordVisibility: false,
  passwordError: false,
  emailError: false,
  currentUser: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setEmail(state, action) {
      state.email = action.payload;
    },
    setPassword(state, action) {
      state.password = action.payload;
    },
    setPasswordVisibility(state, action) {
      state.passwordVisibility = action.payload;
    },
    setPasswordError(state, action) {
      state.passwordError = action.payload;
    },
    setEmailError(state, action) {
      state.emailError = action.payload;
    },
    reserStates() {
      return initialState;
    },
    setCurrentUser(state, action) {
      state.currentUser = action.payload;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
