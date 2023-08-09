import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import SignUp from "../Pages/SignUp";
import Login from "../Pages/Login";
import Home from "../Pages/Home";
import Cart from "../Pages/Cart";
import { AuthContext } from "../Context/AuthContext";
import { useDispatch } from "react-redux";
import { cartActions } from "../redux/cartSlice";

const Routers = () => {
  const { currentUser } = useContext(AuthContext);
  const dispatch = useDispatch();

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      dispatch(cartActions.resetState());
      return <Navigate to="/login" />;
    }
    return children;
  };

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/cart"
        element={
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default Routers;
