import './Header.css';
import Logo from "../Assets/investec-bank-logo.png";
import React, { useState } from 'react';

function Header() {

    const [Home, setHome] = useState(true);
    const [Contact, setContact] = useState(false);
    const [About, setAbout] = useState(false);

    const onChangeHandler = (button) => {
        if (button == 'Home') {
            setHome(true);
            setContact(false);
            setAbout(false);
        }
        if (button == 'Contact') {
            setHome(false);
            setContact(true);
            setAbout(false);
        }
        if (button == 'About') {
            setHome(false);
            setContact(false);
            setAbout(true);
        }
    }

    return(
    <div class="header">
        <a href="#default" class="logo"><img src={Logo}/></a>
            <div class="header-right">
            <a className={Home ? "active" : "inactive"} href="#home" onClick={()=>onChangeHandler('Home')}>Home</a>
            <a className={Contact ? "active" : "inactive"} href="#contact" onClick={()=>onChangeHandler('Contact')}>Contact</a>
            <a className={About ? "active" : "inactive"} href="#about" onClick={()=>onChangeHandler('About')}>About</a>
            </div>
    </div>
    );
}

export default Header;