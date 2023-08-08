import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: { products: [], productsSearch: [], searchedKeyword: "" },
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
      state.productsSearch = action.payload;
    },
    setProductsSearch(state, action) {
      state.productsSearch = action.payload;
    },
    setSearchedKeyword(state, action) {
      state.searchedKeyword = action.payload;
    },
  },
});

export const productsActions = productsSlice.actions;
export default productsSlice.reducer;
