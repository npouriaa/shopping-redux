import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { cart: [], totalPrice: 0 },
  reducers: {
    setCart(state, action) {
      state.cart = action.payload;
    },
    setTotalPrice(state, action) {
      state.totalPrice = action.payload;
    },
    resetState(state) {
      state.cart = [];
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
