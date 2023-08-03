import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import SignUp from "../Pages/SignUp";
import Login from "../Pages/Login";
import Home from "../Pages/Home";
import { useSelector } from "react-redux";

const Routers = () => {
  const  currentUser  = useSelector(state => state.auth.currentUser)

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default Routers;
