import React from "react";
import { FaGreaterThan } from "react-icons/fa";
import "./Button.css";

const Button = ({ text }) => {
  return (
    <div className="click">
      <div className="text">
        {text} <FaGreaterThan className="arrow" />
      </div>
    </div>
  );
};

export default Button;
