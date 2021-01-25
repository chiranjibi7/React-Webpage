import React from "react";
import "./timeDisplay.css";

const TimeDisplay = () => {
  return (
    <div className="TimeDisplay" style={{color:'white'}}>
      <div style={{padding: '20px'}}>
        <h2>200</h2>
        <p style={{fontSize:'14px'}}>Days</p>
      </div>
      <div style={{borderLeft:'1px dotted #dddd',padding:'20px'}}>
        <h2>16</h2>
        <p style={{fontSize:'14px'}}>Hours</p>
      </div>
      <div style={{borderLeft:'1px dotted #dddd',padding:'20px'}}>
        <h2>42</h2>
        <p style={{fontSize:'14px'}}>Minutes</p>
      </div>
      <div style={{borderLeft:'1px dotted #dddd',padding:'20px'}}>
        <h2>40</h2>
        <p style={{fontSize:'14px'}}>Seconds</p>
      </div>
    </div>
  );
};

export default TimeDisplay;
