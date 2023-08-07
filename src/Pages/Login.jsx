import React, { useContext } from "react";
import Auth from "../Components/Auth";
import { AuthContext } from "../Context/AuthContext";
import { useDispatch, useSelector } from "react-redux";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { validator, authorization } = useContext(AuthContext);
  const dispatch = useDispatch();
  const { email, password } = useSelector((state) => state.auth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validator(email, password, dispatch)) {
      await authorization(
        signInWithEmailAndPassword,
        email,
        password,
        dispatch,
        "Logged in successfuly"
      );
      setTimeout(() => {
        navigate("/");
      }, 1500);
    }
  };
  return (
    <Auth
      title="login"
      welcome="welcome back"
      description="login now and enjoyy shopping"
      route="sign-up"
      routeText="Dont have an account ? Sign up"
      onSubmit={handleSubmit}
    />
  );
};

export default Login;
