import React from "react";
import Time from './Time';
import Subtitile from "../../../../Typography/Subtitle";

const TimeSection = () => {
  return (
    <div style={{ marginTop: "20px" }}>
      <Time clr='white'/>
      <Subtitile clr="white" marginLft='14px'>Welcome to our church</Subtitile>
    </div>
  );
};

export default TimeSection;
