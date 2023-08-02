import React, { useContext } from "react";
import Auth from "../Components/Auth";
import { ValidatorContext } from "../Context/ValidatorContext";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const { validator } = useContext(ValidatorContext);
  const dispatch = useDispatch();
  const { email, password } = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    validator(email, password, dispatch);
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
