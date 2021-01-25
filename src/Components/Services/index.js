import React from 'react';
import './services.css';
import Title from '../../Typography/Title';
import ServiceItem from './ServiceItem';

const Services = () => {
    return (
        <div className="Services">
            <Title clr="rgb(218, 83, 83)">STATEMENT OF FAITH</Title>
            <div className="Service-container">
                <ServiceItem 
                marginBtm="20px"
                clr="rgb(218, 83, 83)"
                logoClass="fab fa-pagelines fa-2x"
                subtitle="What We Believe"
                >aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</ServiceItem>

                <ServiceItem 
                marginBtm="20px"
                clr="rgb(218, 83, 83)"
                logoClass="fas fa-users fa-2x"
                subtitle="Who We Are"
               >bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb</ServiceItem>

                <ServiceItem 
                marginBtm="20px"
                clr="rgb(218, 83, 83)"
                logoClass="fas fa-heart fa-2x"
                subtitle="How We Live"
               >cccccccccccccccccccccccccccccccccccccccccc</ServiceItem>
            </div>
        </div>
    )
}

export default Services;
