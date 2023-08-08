import React, { useRef } from "react";
import "../scss/navbar.scss";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AuthBtn from "./AuthBtn";
import Button from "./Button";

const NavBar = () => {
  const hamburgerMenuRef = useRef();
  return (
    <>
      <nav>
        <div className="wide-items-con">
          <AuthBtn />
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
          <Button
            route={"/cart"}
            type={"cart-btn"}
            icon={<ShoppingCartIcon className="cart-icon" />}
            text={"cart"}
          />
        </div>
        <div className="narrow-items-con">
          <AuthBtn />
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
