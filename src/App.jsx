import React from "react";
import "./App.scss";
import { useSelector } from "react-redux";
import Loader from "./Components/Loader";
import Routers from "./Routers/Routers";
import Auth from "./Components/Auth";
import ValidatorContextProvider from "./Context/ValidatorContext.jsx";

const App = () => {
  const loading = useSelector((state) => state.loader.loading);

  return (
    <ValidatorContextProvider>
      <div className="container">
        {loading ? <Loader /> : ""}
        <Routers />
      </div>
    </ValidatorContextProvider>
  );
};

export default App;
