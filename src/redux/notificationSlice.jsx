import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: "notification",
  initialState: { open: false, severity: "", message: "" },
  reducers: {
    setOpen(state, action) {
      state.open = action.payload;
    },
    setSeverity(state, action) {
      state.severity = action.payload;
    },
    setMessage(state, action) {
      state.message = action.payload;
    },
  },
});

export const notificationActions = notificationSlice.actions;
export default notificationSlice.reducer;
