import React, { Children } from 'react';
import Subtitle from '../../../Typography/Subtitle';
import Time from '../../About/HeadingSection/TimeSection/Time';
import LocationSection from '../../About/HeadingSection/LocationSection';
import './event.css';

const Event = ({imgSource,imgAlt,subtitleTxt,children}) => {
    return (
        <div className="Event">
            <img src={imgSource} alt={imgAlt} className="Image"/>
            <Subtitle marginBtm="10px">{subtitleTxt}</Subtitle>
            <Time clr="rgb(218, 83, 83)"/>
            <LocationSection clr="rgb(218, 83, 83)"/>
            <p className="Description">{children}</p>
        </div>
    )
}

export default Event
