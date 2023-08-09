import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { cart: [] },
  reducers: {
    setCart(state, action) {
      state.cart = action.payload;
    },
    resetState(state) {
      state.cart = [];
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
