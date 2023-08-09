import React from "react";
import "../scss/header.scss";
import NavBar from "./NavBar";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <div className="header-con">
      <h1 className="navbar-title">Online shop</h1>
      <NavBar />
    </div>
  );
};

export default Header;
