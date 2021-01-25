import React from 'react';
import './button.css';

const Button = ({children,bdr,marginTp}) => {
    return (
        <button className="Button" style={{border: bdr,marginTop:marginTp}}>{children}</button>
    )
}

export default Button;
