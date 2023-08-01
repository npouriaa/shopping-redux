import React from "react";
import "../scss/signUp.scss";
import { Button, IconButton, InputAdornment, TextField } from "@mui/material";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import HttpsIcon from "@mui/icons-material/Https";
import { Link } from "react-router-dom";
import { Visibility } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../redux/signUpSlice";

const SignUp = () => {
  const dispatch = useDispatch();
  const { email, password } = useSelector((state) => state.signUp);
  return (
    <div className="sign-up-con">
      <div className="text-con">
        <h1>sign up</h1>
        <h3>welcome to the online shop</h3>
        <small>sign up now and enjoy shopping</small>
      </div>
      <div className="form">
        <div className="input-con">
          <AlternateEmailIcon htmlColor="#9a9a9a" />
          <TextField
            onChange={(e) => dispatch(actions.setEmail(e.target.value))}
            className="input"
            size="small"
            label="Email"
          />
        </div>
        <div className="input-con">
          <HttpsIcon htmlColor="#9a9a9a" />
          <TextField
            onChange={(e) => dispatch(actions.setPassword(e.target.value))}
            type="password"
            className="input"
            size="small"
            label="Password"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton edge="end">
                    <Visibility />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </div>
        <div className="button-con">
          <Button className="form-btn" variant="contained">
            Sign Up
          </Button>
          <Link className="link">Already a member ? Login</Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
