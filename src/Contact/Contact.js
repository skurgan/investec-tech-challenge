import React, { useState} from 'react';
import './Contact.css';
import Zebra from '../Assets/zebra.png';

function Contact () {
    
    return(
        <div class="body"> 
            <img src={Zebra}/>
            <div class="words">
            <div class="title">Contact Us</div>
            <p/>
            <div class="text">TeamOneIsTheBest@investec.co.za</div>
            <ul>
                <li>Sam Kurgan</li>
                <li>Khanimambo Maluleke</li>
                <li>Sydney Muganda</li>
                <li>Gabriel Marcus</li>
                <li>Jordyn Nitch</li>
            </ul>
            </div>
        </div>
    );
}

export default Contact;
