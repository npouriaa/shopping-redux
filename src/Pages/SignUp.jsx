import React, { useRef } from "react";
import "../scss/signUp.scss";
import { Button, IconButton, InputAdornment, TextField } from "@mui/material";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import HttpsIcon from "@mui/icons-material/Https";
import { Link } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../redux/signUpSlice";
import * as emailValidator from "email-validator";

const SignUp = () => {
  const dispatch = useDispatch();
  const { email, password, passwordVisibility, passwordError, emailError } =
    useSelector((state) => state.signUp);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      actions.setEmailError(
        email === "" || !emailValidator.validate(email) ? true : false
      )
    );
    dispatch(
      actions.setPasswordError(
        password.length < 6 || password === "" ? true : false
      )
    );
  };

  return (
    <div className="sign-up-con">
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
            onChange={(e) => dispatch(actions.setEmail(e.target.value))}
            className="input"
            size="small"
            error={emailError}
            label="Email"
          />
        </div>
        <div className="input-con">
          <HttpsIcon htmlColor={passwordError ? "red" : "#9a9a9a"} />
          <TextField
            helperText={passwordError ? "Plaese Enter 6 char password !" : ""}
            onChange={(e) => dispatch(actions.setPassword(e.target.value))}
            type={passwordVisibility ? "text" : "password"}
            className="input"
            size="small"
            error={passwordError}
            label="Password"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() =>
                      dispatch(
                        actions.setPasswordVisibility(!passwordVisibility)
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
