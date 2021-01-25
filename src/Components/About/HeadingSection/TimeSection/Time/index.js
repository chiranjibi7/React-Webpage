import React from 'react';
import Logo from '../../../../../Widgets/Logo';

const Time = ({clr,marginBtm}) => {
    return (
        <div style={{ display: "flex",marginBottom: marginBtm }}>
        <Logo logoClass="far fa-calendar-alt" />
        <p
          style={{
            marginLeft: "5px",
            fontStyle: "italic",
            fontSize: "14px",
            color: clr,
          }}
        >
          Monday,8:00AM . Friday,10:00AM
        </p>
      </div>
    )
}

export default Time;
