import React, { useEffect } from "react";
import "./App.scss";
import { useSelector } from "react-redux";
import Loader from "./Components/Loader";
import Routers from "./Routers/Routers";
import AuthContextProvider from "./Context/AuthContext";
import Error from "./Components/Error";

const App = () => {
  const {loading} = useSelector((state) => state.loader);
  const { error } = useSelector((state) => state.error);
  return (
    <AuthContextProvider>
      <div className="container">
        {loading ? <Loader /> : error ? <Error/> : ''}
        <Routers />
      </div>
    </AuthContextProvider>
  );
};

export default App;
