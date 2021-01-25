import React from 'react';
import './mainSection.css';
import Details from './Details';
import TimeDisplay from './TimeDisplay';

const MainSection = () => {
    return (
        <div className="MainSection">
           <Details/>
           <TimeDisplay/> 
        </div>
    )
}

export default MainSection;
