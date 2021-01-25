import React from "react";
import "./details.css";
import Subtitle from "../../../../Typography/Subtitle";
import Time from "../../HeadingSection/TimeSection/Time";
import LocationSection from "../../HeadingSection/LocationSection";

const Details = () => {
  return (
    <div className="Details">
      <div className="Detail">
        <Subtitle marginBtm="10px">Welcome to our church</Subtitle>
        <Time clr="rgb(218, 83, 83)" marginBtm="0px" />
        <LocationSection clr="rgb(218, 83, 83)" />
      </div>
    </div>
  );
};

export default Details;
