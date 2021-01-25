import React from "react";
import "./title.css";

const Title = ({ children, font, padding, clr, txtAlign, margin }) => {
  return (
    <h2
      className="Title"
      style={{
        fontStyle: font,
        padding: padding,
        color: clr,
        textAlign: txtAlign,
        margin: margin
      }}
    >
      {children}
    </h2>
  );
};

export default Title;
