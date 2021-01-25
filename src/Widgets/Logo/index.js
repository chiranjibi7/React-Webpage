import React from 'react';

const Logo = ({logoClass,marginBtm}) => {
    return (
        <div style={{marginBottom: marginBtm}}>
           <i class={logoClass}></i>
        </div>
    )
}

export default Logo;
