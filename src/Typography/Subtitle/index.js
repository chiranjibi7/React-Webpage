import React from "react";

const Subtitle = ({ children, clr, marginBtm, marginLft }) => {
  return (
    <h3 style={{ color: clr, marginBottom: marginBtm, marginLeft: marginLft }}>
      {children}
    </h3>
  );
};

export default Subtitle;
