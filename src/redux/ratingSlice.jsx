import { createSlice } from "@reduxjs/toolkit";

const ratingSlice = createSlice({
  name: "rating",
  initialState: { rating: 0 },
  reducers: {
    setRating(state, action) {
      state.rating = action.payload;
    },
  },
});

export const ratingAction = ratingSlice.actions;
export default ratingSlice.reducer;
