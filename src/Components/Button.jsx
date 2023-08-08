import React from "react";
import "../scss/button.scss";
import { Link } from "react-router-dom";

const Button = ({ route, type, icon, arrowIcon, text, onClick }) => {
  return (
    <Link to={route}>
      <button onClick={onClick} className={`${type} btn`}>
        <span></span>
        <div className="text-layer">
          {icon}
          <div className="texts-con">
            <div className="texts">
              <p>{text}</p>
              <p className="second">{text}</p>
            </div>
          </div>
          {arrowIcon}
        </div>
      </button>
    </Link>
  );
};

export default Button;
