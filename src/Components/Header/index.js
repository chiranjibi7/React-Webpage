import React from 'react';
import './header.css';
import Heading from '../../Typography/Heading';
import Title from '../../Typography/Title';
import Button from '../../Widgets/Button';

const Header = () => {
    return (
        <div className="Header">
            <Heading>DREAM CITY CHURCH</Heading>
            <Title font="italic">WELCOME TO OUR CHURCH</Title>
            <Button>JOIN WITH US</Button>
        </div>
    )
}

export default Header;
