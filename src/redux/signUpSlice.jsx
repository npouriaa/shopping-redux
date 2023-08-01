import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "dsadsds",
  password: "",
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
  },
});

export const actions = signUpSlice.actions;
export default signUpSlice.reducer;
