import React from "react";
import "./App.scss";
import SignUp from "./Pages/SignUp";
import { useSelector } from "react-redux";
import Loader from "./Components/Loader";

const App = () => {
  const loading = useSelector((state) => state.loader.loading);
  return (
    <div className="container">
      {loading ? <Loader /> : ""}
      <SignUp />
    </div>
  );
};

export default App;
