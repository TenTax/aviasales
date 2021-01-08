import React from 'react';

import './Logo.css';
import logo from './Logo.svg';

const Logo = () => (
    <div className="Logo">
        <img className="LogoImage" src={logo} alt="logo aviasales" />
    </div>
);

export default Logo;
