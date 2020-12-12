import React from 'react';
import classes from './Logo.module.css';
import burgerLogo from '../../assets/burger-logo.png';

const logo = (props) => (
    <div className={classes.Logo}>
        <img src={burgerLogo} alt="logo" />
    </div>
)

export default logo;