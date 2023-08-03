import { authActions } from "../redux/authSlice";
import * as emailValidator from "email-validator";
import { createContext } from "react";
import { loaderActions } from "../redux/loaderSlice";
import { notificationActions } from "../redux/notificationSlice";
import { auth } from "../firebase";

export const AuthContext = createContext();

const validator = (email, password, dispatch) => {
  const emailState = dispatch(
    authActions.setEmailError(
      email === "" || !emailValidator.validate(email) ? true : false
    )
  );
  const passwordState = dispatch(
    authActions.setPasswordError(
      password.length < 6 || password === "" ? true : false
    )
  );
  if (!emailState.payload && !passwordState.payload) {
    return true;
  }
  return false;
};

const authorization = async (
  authMethod,
  email,
  password,
  dispatch,
  message
) => {
  dispatch(loaderActions.setLoading(true));
  try {
    await authMethod(auth, email, password);
    dispatch(authActions.setEmail(""));
    dispatch(authActions.setPassword(""));
    dispatch(notificationActions.setSeverity("success"));
    dispatch(notificationActions.setMessage(message));
  } catch (err) {
    dispatch(notificationActions.setSeverity("error"));
    dispatch(notificationActions.setMessage(err.message));
  }
  dispatch(loaderActions.setLoading(false));
  dispatch(notificationActions.setOpen(true));
};

const AuthContextProvider = ({ children }) => {
  return (
    <AuthContext.Provider value={{ validator, authorization }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
