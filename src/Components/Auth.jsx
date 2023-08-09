import React, { useEffect } from "react";
import Notification from "../Components/Notification";
import { Button, IconButton, InputAdornment, TextField } from "@mui/material";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import HttpsIcon from "@mui/icons-material/Https";
import "../scss/auth.scss";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../redux/authSlice";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const Auth = ({ title, welcome, description, route, routeText, onSubmit }) => {
  const loacation = useLocation();
  const dispatch = useDispatch();
  const { email, password, passwordVisibility, passwordError, emailError } =
    useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(authActions.resetStates());
  }, [loacation]);

  return (
    <div className="auth-con">
      <Notification />
      <div className="text-con">
        <h1>{title}</h1>
        <h3>{welcome} </h3>
        <small>{description}</small>
      </div>
      <form onSubmit={(e) => onSubmit(e)} className="form">
        <div className="input-con">
          <AlternateEmailIcon htmlColor={emailError ? "red" : "#9a9a9a"} />
          <TextField
            helperText={
              emailError ? "Plaese Enter a valid email address !" : ""
            }
            onChange={(e) => dispatch(authActions.setEmail(e.target.value))}
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
            onChange={(e) => dispatch(authActions.setPassword(e.target.value))}
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
                        authActions.setPasswordVisibility(!passwordVisibility)
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
            {title}
          </Button>
          <Link to={`/${route}`} className="link">
            {routeText}
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Auth;
