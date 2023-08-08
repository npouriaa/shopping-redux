import React from "react";
import "../scss/searchBar.scss";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { productsActions } from "../redux/productsSlice";

const SearchBar = () => {
  const { products } = useSelector(
    (state) => state.products
  );
  const dispatch = useDispatch();

  const filterSearch = (text) => {
    let value = text.toLowerCase();
    let result = [];
    dispatch(productsActions.setSearchedKeyword(value));
    result = products.filter((data) => {
      return data.name.toLowerCase().includes(value);
    });
    dispatch(productsActions.setProductsSearch(result));
  };

  return (
    <div className="searchBar-con">
      <IconButton className="search-btn">
        <SearchIcon className="search-icon" />
      </IconButton>
      <div className="input-icon">
        <input
          onChange={(e) => filterSearch(e.target.value)}
          type="text"
          placeholder="Search for products ..."
        />
      </div>
    </div>
  );
};

export default SearchBar;
