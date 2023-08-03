import React from "react";
import "./App.scss";
import { useSelector } from "react-redux";
import Loader from "./Components/Loader";
import Routers from "./Routers/Routers";
import Auth from "./Components/Auth";
import AuthContextProvider from "./Context/AuthContext";

const App = () => {
  const loading = useSelector((state) => state.loader.loading);

  return (
    <AuthContextProvider>
      <div className="container">
        {loading ? <Loader /> : ""}
        <Routers />
      </div>
    </AuthContextProvider>
  );
};

export default App;
