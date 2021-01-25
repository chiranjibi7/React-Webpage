import React from 'react';
import './headingSection.css';
import TimeSection from './TimeSection';
import LocationSection from './LocationSection';
import Button from '../../../Widgets/Button';

const HeadingSection = () => {
    return (
        <div className="HeadingSection">
           <TimeSection/>
           <LocationSection clr='white' marginTp="20px"/>
           <Button bdr="1px solid white" marginTp="20px">READ MORE</Button>
        </div>
    )
}

export default HeadingSection;
