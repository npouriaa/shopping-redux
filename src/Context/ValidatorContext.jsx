import { authActions } from "../redux/authSlice";
import * as emailValidator from "email-validator";
import { createContext } from "react";
import { useDispatch, useSelector } from "react-redux";

export const ValidatorContext = createContext();

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

const ValidatorContextProvider = ({ children }) => {
  return (
    <ValidatorContext.Provider value={{ validator }}>
      {children}
    </ValidatorContext.Provider>
  );
};

export default ValidatorContextProvider;
