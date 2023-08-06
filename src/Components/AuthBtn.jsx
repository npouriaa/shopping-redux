import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import LogoutIcon from "@mui/icons-material/Logout";
import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const AuthBtn = () => {
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
                className="icon rotate"
              />
            </div>
          </button>
          <div ref={subMenuRef} className="submenu hideSubMenu">
            <p>Email :</p>
            <p>{currentUser.email}</p>
            <div className="signout-btn-con">
              <button onClick={() => signOutUser()} className="signout-btn btn">
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
    </>
  );
};

export default AuthBtn;
