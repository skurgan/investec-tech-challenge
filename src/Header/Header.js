import './Header.css';
import Logo from "../Assets/investec-bank-logo.png";
import React, { useState } from 'react';
import App from '../App';

const Header = props => {
    const [func, setFunc] = useState(props);
    const [Home, setHome] = useState(true);
    const [Contact, setContact] = useState(false);
    const [About, setAbout] = useState(false);

    const onChangeHandler = (button) => {
        sendData(button);
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

    const sendData = (data) => {
        func.func(data);
    }

    return(
    <div class="header">
        <a href="#default" class="logo"><img src={Logo} onClick={()=>onChangeHandler('Home')}/></a>
            <div class="header-right">
            <a className={Home ? "active" : "inactive"} href="#home" onClick={()=>onChangeHandler('Home')}>Home</a>
            <a className={Contact ? "active" : "inactive"} href="#contact" onClick={()=>onChangeHandler('Contact')}>Contact</a>
            <a className={About ? "active" : "inactive"} href="#about" onClick={()=>onChangeHandler('About')}>About</a>
            </div>
    </div>
    );
}

export default Header;