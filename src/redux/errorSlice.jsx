import { createSlice } from "@reduxjs/toolkit";

const errorSlice = createSlice({
  name: "error",
  initialState: { error: false, errorMessage: "" },
  reducers: {
    setError(state) {
      state.error = true;
    },
    setErrorMessage(state, action) {
      state.errorMessage = action.payload;
    },
  },
});

export const errorActions = errorSlice.actions;
export default errorSlice.reducer;
