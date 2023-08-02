import React, { useContext } from "react";
import Auth from "../Components/Auth";
import { ValidatorContext } from "../Context/ValidatorContext";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../redux/authSlice";
import { notificationActions } from "../redux/notificationSlice";
import { loaderActions } from "../redux/loaderSlice";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
  const { validator } = useContext(ValidatorContext);
  const dispatch = useDispatch();
  const { email, password } = useSelector((state) => state.auth);

  const logInUser = async () => {
    dispatch(loaderActions.setLoading(true));
    try {
      await signInWithEmailAndPassword(auth, email, password);
      dispatch(authActions.setEmail(""));
      dispatch(authActions.setPassword(""));
      dispatch(notificationActions.setSeverity("success"));
      dispatch(notificationActions.setMessage("Logged in successfuly"));
    } catch (err) {
      dispatch(notificationActions.setSeverity("error"));
      dispatch(notificationActions.setMessage(err.message));
    }
    dispatch(loaderActions.setLoading(false));
    dispatch(notificationActions.setOpen(true));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validator(email, password, dispatch);
    logInUser();
  };
  return (
    <Auth
      title="login"
      welcome="welocome back"
      description="login now and enjoyy shopping"
      route="sign-up"
      routeText="Dont have an account ? Sign up"
      onSubmit={handleSubmit}
    />
  );
};

export default Login;
