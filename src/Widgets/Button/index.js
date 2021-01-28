import React from "react";
import "./button.css";

const Button = ({ children, bdr, marginTp, type }) => {
  return (
    <button
      className="Button"
      style={{ border: bdr, marginTop: marginTp }}
      type={type || "button"}
    >
      {children}
    </button>
  );
};

export default Button;
