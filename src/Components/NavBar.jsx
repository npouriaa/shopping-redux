import React, { useRef } from "react";
import "../scss/navbar.scss";
import { Link, useNavigate } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import LogoutIcon from "@mui/icons-material/Logout";
import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const NavBar = () => {
  const hamburgerMenuRef = useRef();
  const arrowIconRef = useRef();
  const currentUser = useSelector((state) => state.auth.currentUser);
  const navigate = useNavigate();
  const subMenuRef = useRef();

  const signOutUser = () => {
    signOut(auth);
    navigate("/login");
  };

  const accountBtnHandler = () => {
    arrowIconRef.current.classList.toggle("rotateIcon");
    subMenuRef.current.classList.toggle("hideSubMenu");
  };

  return (
    <>
      <nav>
        <div className="wide-items-con">
          {!currentUser ? (
            <Link className="link" to="/sign-up">
              <button className="auth-btn btn">
                <span></span>
                <div className="text-layer">
                  <AccountCircleIcon className="icon" />
                  sign up / login
                </div>
              </button>
            </Link>
          ) : (
            <div className="account-btn-con">
              <button className="account-btn btn">
                <span className="acc-btn-color-layer"></span>
                <div className="text-layer">
                  <AccountCircleIcon className="icon" />
                  account
                  <KeyboardArrowDownIcon className="icon rotate" />
                </div>
              </button>
              <div className="submenu">
                <p>Email :</p>
                <p>{currentUser.email}</p>
                <div className="signout-btn-con">
                  <button
                    onClick={() => signOutUser()}
                    className="signout-btn btn"
                  >
                    <span className=""></span>
                    <div className="text-layer">
                      <LogoutIcon className="icon" />
                      sign out
                    </div>
                  </button>
                </div>
              </div>
            </div>
          )}
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
          {!currentUser ? (
            <Link className="link" to="/sign-up">
              <button className="auth-btn btn">
                <span></span>
                <div className="text-layer">
                  <AccountCircleIcon className="icon" />
                  sign up / login
                </div>
              </button>
            </Link>
          ) : (
            <div className="account-btn-con">
              <button
                onClick={() => accountBtnHandler()}
                className="account-btn btn"
              >
                <span className="acc-btn-color-layer"></span>
                <div className="text-layer">
                  <AccountCircleIcon className="icon" />
                  account
                  <KeyboardArrowDownIcon
                    ref={arrowIconRef}
                    className="icon rotate "
                  />
                </div>
              </button>
              <div
                ref={subMenuRef}
                className="submenu hideSubMenu submenu-effect"
              >
                <p>Email :</p>
                <p>{currentUser.email}</p>
                <div className="signout-btn-con">
                  <button
                    onClick={() => signOutUser()}
                    className="signout-btn btn"
                  >
                    <span className=""></span>
                    <div className="text-layer">
                      <LogoutIcon className="icon" />
                      sign out
                    </div>
                  </button>
                </div>
              </div>
            </div>
          )}
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
