import React, { useRef } from "react";
import "../scss/navbar.scss";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AuthBtn from "./AuthBtn";

const NavBar = () => {
  const hamburgerMenuRef = useRef();
  return (
    <>
      <nav>
        <div className="wide-items-con">
          <AuthBtn/>
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
          <Link>
            <button className="cart-btn btn">
              <span></span>
              <div className="text-layer">
                <ShoppingCartIcon className="cart-icon" />
                cart
              </div>
            </button>
          </Link>
        </div>
        <div className="narrow-items-con">
          <AuthBtn/>
          <button className="hamburger-menu-btn">
            <div className="menu-icon">
              <input
                onChange={() =>
                  hamburgerMenuRef.current.classList.toggle("hidden")
                }
                className="menu-icon__cheeckbox"
                type="checkbox"
              />
              <div>
                <span></span>
                <span></span>
              </div>
            </div>
          </button>
        </div>
      </nav>
      <div ref={hamburgerMenuRef} className="hamburger-menu hidden">
        <div className="title">
          <h1>online sHop</h1>
          <p>we brings goodthing to life </p>
          <p>enablement is what we do </p>
        </div>
        <ul>
          <Link className="link">
            <li>
              <span className="li-line"></span>
              Men
              <span className="li-num">01</span>
            </li>
          </Link>
          <Link className="link">
            <li>
              <span className="li-line"></span>
              women
              <span className="li-num">02</span>
            </li>
          </Link>
          <Link className="link">
            <li>
              <span className="li-line"></span>
              contact
              <span className="li-num">03</span>
            </li>
          </Link>
          <Link className="link">
            <li>
              <span className="li-line"></span>
              about us
              <span className="li-num">04</span>
            </li>
          </Link>
          <Link className="link">
            <li>
              <span className="li-line"></span>
              cart
              <span className="li-num">05</span>
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
