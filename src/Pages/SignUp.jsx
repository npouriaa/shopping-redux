import React, { useContext } from "react";
import Auth from "../Components/Auth";
import { ValidatorContext } from "../Context/ValidatorContext";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../firebase";
import { notificationActions } from "../redux/notificationSlice";
import { loaderActions } from "../redux/loaderSlice";
import { authActions } from "../redux/authSlice";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {
  const { validator } = useContext(ValidatorContext);
  const dispatch = useDispatch();
  const { email, password } = useSelector((state) => state.auth);

  const setUser = async () => {
    dispatch(loaderActions.setLoading(true));
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      dispatch(authActions.setEmail(""));
      dispatch(authActions.setPassword(""));
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
    if (validator(email, password, dispatch)) {
      setUser();
    }
  };
  return (
    <Auth
      title="sign up"
      welcome="welocome to the online shop"
      description="sign up now and enjoy shopping"
      route="login"
      routeText="Already a member ? Login"
      onSubmit={handleSubmit}
    />
  );
};

export default SignUp;
