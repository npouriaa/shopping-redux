import React from "react";
import "../scss/signUp.scss";
import {
  Button,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import HttpsIcon from "@mui/icons-material/Https";
import { Link } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { signUpActions } from "../redux/signUpSlice";
import { loaderActions } from "../redux/loaderSlice";
import { notificationActions } from "../redux/notificationSlice";
import * as emailValidator from "email-validator";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import Notification from "../Components/Notification";

const SignUp = () => {
  const dispatch = useDispatch();
  const { email, password, passwordVisibility, passwordError, emailError } =
    useSelector((state) => state.signUp);

  const validator = () => {
    const emailState = dispatch(
      signUpActions.setEmailError(
        email === "" || !emailValidator.validate(email) ? true : false
      )
    );
    const passwordState = dispatch(
      signUpActions.setPasswordError(
        password.length < 6 || password === "" ? true : false
      )
    );
    if (!emailState.payload && !passwordState.payload) {
      return true;
    }
    return false;
  };

  const setUser = async () => {
    dispatch(loaderActions.setLoading(true));
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      dispatch(signUpActions.setEmail(""));
      dispatch(signUpActions.setPassword(""));
      dispatch(notificationActions.setSeverity("success"));
      dispatch(notificationActions.setMessage("Signed up successfuly"));
    } catch (err) {
      dispatch(notificationActions.setSeverity("error"));
      dispatch(notificationActions.setMessage(err.message));
    }
    dispatch(loaderActions.setLoading(false));
    dispatch(notificationActions.setOpen(true));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validator();
    if (validator()) {
      setUser();
    }
  };

  return (
    <div className="sign-up-con">
      <Notification/>
      <div className="text-con">
        <h1>sign up</h1>
        <h3>welcome to the online shop</h3>
        <small>sign up now and enjoy shopping</small>
      </div>
      <form onSubmit={(e) => handleSubmit(e)} className="form">
        <div className="input-con">
          <AlternateEmailIcon htmlColor={emailError ? "red" : "#9a9a9a"} />
          <TextField
            helperText={
              emailError ? "Plaese Enter a valid email address !" : ""
            }
            onChange={(e) => dispatch(signUpActions.setEmail(e.target.value))}
            className="input"
            size="small"
            error={emailError}
            label="Email"
            value={email}
          />
        </div>
        <div className="input-con">
          <HttpsIcon htmlColor={passwordError ? "red" : "#9a9a9a"} />
          <TextField
            helperText={passwordError ? "Plaese Enter 6 char password !" : ""}
            onChange={(e) =>
              dispatch(signUpActions.setPassword(e.target.value))
            }
            type={passwordVisibility ? "text" : "password"}
            className="input"
            size="small"
            value={password}
            error={passwordError}
            label="Password"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() =>
                      dispatch(
                        signUpActions.setPasswordVisibility(!passwordVisibility)
                      )
                    }
                    edge="end"
                  >
                    {passwordVisibility ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </div>
        <div className="button-con">
          <Button type="submit" className="form-btn" variant="contained">
            Sign Up
          </Button>
          <Link className="link">Already a member ? Login</Link>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
