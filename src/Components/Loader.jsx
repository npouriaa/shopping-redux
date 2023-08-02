import React from "react";
import "../scss/loader.scss";

const Loader = () => {
  return (
    <div className="loader-con">
      <div className="layer"></div>
      <div className="loader">
        <span className="loader-text">loading</span>
        <span className="load"></span>
      </div>
    </div>
  );
};

export default Loader;
