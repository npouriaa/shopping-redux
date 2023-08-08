import React, { useContext, useRef } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import LogoutIcon from "@mui/icons-material/Logout";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import Button from "./Button";
import { AuthContext } from "../Context/AuthContext";

const AuthBtn = () => {
  const arrowIconRef = useRef();
  const { currentUser } = useContext(AuthContext);
  const subMenuRef = useRef();

  const signOutUser = () => {
    signOut(auth);
  };

  const accountBtnHandler = () => {
    arrowIconRef.current.classList.toggle("rotateIcon");
    subMenuRef.current.classList.toggle("hideSubMenu");
  };

  return (
    <>
      {!currentUser ? (
        <Button
          route={"/login"}
          type={"auth-btn"}
          icon={<AccountCircleIcon className="icon" />}
          text={"sign up / login"}
        />
      ) : (
        <div className="account-btn-con">
          <Button
            route={""}
            type={"account-btn"}
            icon={<AccountCircleIcon className="icon" />}
            arrowIcon={
              <KeyboardArrowDownIcon
                ref={arrowIconRef}
                className="icon rotate"
              />
            }
            text={"account"}
            onClick={accountBtnHandler}
          />
          <div ref={subMenuRef} className="submenu hideSubMenu">
            <p>Email :</p>
            <p>{currentUser.email}</p>
            <div className="signout-btn-con">
              <Button
                route={""}
                type={"signout-btn"}
                icon={<LogoutIcon className="icon" />}
                text={"sign out"}
                onClick={signOutUser}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AuthBtn;
