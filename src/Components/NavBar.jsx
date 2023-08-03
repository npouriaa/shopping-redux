import React from "react";
import "../scss/navbar.scss";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navBar-con">
      <ul className="menu-items">
        <Link className="link">
          <li>
            <div className="">
              <p>Men</p>
              <span>Men</span>
            </div>
          </li>
        </Link>
        <Link className="link">
          <li>
            <div className="">
              <p>women</p>
              <span>women</span>
            </div>
          </li>
        </Link>
        <Link className="link">
          <li>
            <div className="">
              <p>contact</p>
              <span>contact</span>
            </div>
          </li>
        </Link>
        <Link className="link">
          <li>
            <div className="">
              <p>about us</p>
              <span>about us</span>
            </div>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default NavBar;
