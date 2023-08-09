import React, { useContext } from "react";
import Auth from "../Components/Auth";
import { AuthContext } from "../Context/AuthContext";
import { useDispatch, useSelector } from "react-redux";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const { validator, authorization } = useContext(AuthContext);
  const dispatch = useDispatch();
  const { email, password } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validator(email, password, dispatch)) {
      authorization(
        createUserWithEmailAndPassword,
        email,
        password,
        dispatch,
        "Signed up successfuly",
        navigate
      );
    }
  };
  return (
    <Auth
      title="sign up"
      welcome="welcome to the online shop"
      description="sign up now and enjoy shopping"
      route="login"
      routeText="Already a member ? Login"
      onSubmit={handleSubmit}
    />
  );
};

export default SignUp;
