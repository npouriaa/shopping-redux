import React from "react";
import ErrorIcon from "@mui/icons-material/Error";
import "../scss/error.scss";
import { useSelector } from "react-redux";
const Error = () => {
  const { errorMessage } = useSelector((state) => state.error);
  return (
    <div className="error-con">
      <div className="layer"></div>
      <div className="error">
        <div className="error-title">
          <ErrorIcon className="error-icon" />
          <h2>an error occured</h2>
        </div>
        <h3 className="error-message">{errorMessage}</h3>
        <h4>Please try again later</h4>
      </div>
    </div>
  );
};

export default Error;
