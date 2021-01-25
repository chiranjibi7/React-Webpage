import React, { Children } from 'react';
import './serviceItem.css';
import Subtitle from '../../../Typography/Subtitle';
import Logo from '../../../Widgets/Logo';

const ServiceItem = ({logoClass,subtitle,children,marginBtm,clr}) => {
    return (
        <div className="ServiceItem">
            <Logo logoClass={logoClass} marginBtm={marginBtm}/>
            <Subtitle clr={clr}>{subtitle}</Subtitle>
            <p>{children}</p>
        </div>
    )
}

export default ServiceItem;
